import axios from 'axios';
import { getCurrentDate } from './factory.js';
const BaseUrl = 'http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0';
const UltraBaseUrl = BaseUrl + '/getUltraSrtFcst';
const VilageBaseUrl = BaseUrl + '/getVilageFcst';

const MidFcstBaseUrl = "http://apis.data.go.kr/1360000/MidFcstInfoService/getMidLandFcst";


/**
 * 
❍단기예보
- Base_time : 0200, 0500, 0800, 1100, 1400, 1700, 2000, 2300 (1일 8회)
- API 제공 시간(~이후) : 02:10, 05:10, 08:10, 11:10, 14:10, 17:10, 20:10, 23:10 
 
 아 ㅅㅂ 이거 안해도 됬었음 
*/

export const postUltraVilageFcst = async (req, res, next) => {
	// 단기 초단기 데이터 리턴

	const BaseParams = {
		serviceKey: decodeURIComponent(process.env.API_KEY),
		pageNo: '1',
		numOfRows: '1000',
		dataType: 'JSON',
		base_date: getCurrentDate(),
		base_time: '0800',
		nx: '55',
		ny: '127',
	};
	const gmpLoc = { nx: '55', ny: '127' };
	const cjuLoc = { nx: '52', ny: '38' };
	// 김포공항 - 57, 127
	// 제주공항 - 52, 38
	const GmpParams = new URLSearchParams({
		...BaseParams,
		...gmpLoc,
	}).toString();
	const CjuParams = new URLSearchParams({
		...BaseParams,
		...cjuLoc,
	}).toString();
	console.log(GmpParams);

	// 초단기 URL
	const UltraGmpUrl = UltraBaseUrl + '?' + GmpParams;
	const UltraCjuUrl = UltraBaseUrl + '?' + CjuParams;

	// 단기 URL
	const VilageGmpUrl = VilageBaseUrl + '?' + GmpParams;
	const VilageCjuUrl = VilageBaseUrl + '?' + CjuParams;


/* When you use 초단기, 단기 API, you can use it. */
	// const [U_G_result, U_C_result, V_G_result, V_C_result] = await Promise.all([
	// 	axios(UltraGmpUrl),
	// 	axios(UltraCjuURL),
	// 	axios(VilageGmpUrl),
	// 	axios(VilageCjuUrl)
	// ]);
	// console.log(V_C_result?.data?.response?.body?.items?.item);
	// console.log(V_C_result.data);


	return res.end();
};




export const postMidFcst = async (req, res, next) => {
	const GmpId = "11B00000";
	const CjuId = "11G00000";

	const BaseParams = {
		serviceKey: decodeURIComponent(process.env.API_KEY),
		dataType: "JSON",
		tmFc: "202306110600", // 0600, 1800
		regId: GmpId
	};
	const GmpUrl = MidFcstBaseUrl + "?" + new URLSearchParams(BaseParams);
	const result = await axios(GmpUrl);
	console.log(result.data);
	const data = result.data.response.body.items.item;
	console.log(data);
	// rnSt6Am -> 7일 뒤 강수 확률(오전) 그냥 오전으로 리턴 하자잉
	// wf7Am -> 7일 뒤 날씨 예보(맑음 | 구름많음 | 흐림 | ...)
	return res.end();
}