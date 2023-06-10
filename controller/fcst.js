import axios from 'axios';
import { getCurrentDate } from './factory.js';
const BaseURL =
	'http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst';

export const postFcst = async (req, res, next) => {
	const x = '12';
	const y = '55';
	const params = {
		serviceKey: decodeURIComponent(process.env.API_KEY),
		pageNo: '1',
		numOfRows: '1000',
		dataType: 'JSON',
		base_date: getCurrentDate(),
		base_time: '0600',
		nx: '55',
		ny: '127',
	};
	const queryParams = new URLSearchParams(params).toString();
	const reqURL = BaseURL + '?' + queryParams;

	const result = await axios(reqURL);
	console.log(result.data.response.body.items);

	return res.end();
};
