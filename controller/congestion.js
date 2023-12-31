import axios from 'axios';
import { changeCongestion } from './factory.js';
// 혼잡도, 초기, 중기, 단기 예보

// 혼잡도
// return data example
/**
 * {
  gmp: {
		congestion: Stirng  // 혼잡도 (원활, 보통, 혼잡 매우 혼잡),
		time: String // 기준 시간 (16:00)
	},
	cju: {
		... gmp 정보와 동일
	}
 * }
 */
const BaseUrl =
	'https://api.odcloud.kr/api/getAPRTPsgrCongestion/v1/aprtPsgrCongestion';
export const postCongestion = async (req, res, next) => {
	console.log(process.env.PARKING_API_KEY)
	if (!process.env.API_KEY) {
		throw new Error('Invalid API key');
	}
	console.log(process.env.API_KEY);
	try {
		const params = {
			page: 1,
			perPage: 10,
			serviceKey: process.env.API_KEY,
		};
		const reqUrl = BaseUrl + '\u200B' + '?' + new URLSearchParams(params);
		// req axios
		const result = await axios.get(process.env.CON_URL);
		const data = result.data.data;
		const gmpInfo = { congestion: '', time: '' };
		const cjuInfo = { congestion: '', time: '' };
		data.forEach((info) => {
			const { CGDR_ALL_LVL: congestion, PRC_HR: time } = info;

			if (info.IATA_APCD === 'GMP') {
				gmpInfo.congestion = changeCongestion(congestion);
				gmpInfo.time = time;
			}
			if (info.IATA_APCD === 'CJU') {
				cjuInfo.congestion = changeCongestion(congestion);
				cjuInfo.time = time;
			}
		});
		console.log(gmpInfo, cjuInfo);

		return res.status(200).json({ gmp: gmpInfo, cju: cjuInfo });
	} catch (e) {
		console.log('error');
		return res.end();
	}
};
