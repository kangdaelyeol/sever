import axios from 'axios';

const BaseUrl =
	'http://openapi.airport.co.kr/service/rest/AirportParking/airportparkingRT';

export const postParking = async (req, res, next) => {
	const params = {
		serviceKey: process.env.PARKING_API_KEY,
	};
	const reqUrl = BaseUrl + '?' + new URLSearchParams(params);
	const result = await axios(reqUrl);
	const data = result.data.response.body.items.item;
	const gimpoInfo = [];
	const jejuInfo = [];
	data.forEach((item) => {
		if (item.aprKor === '제주국제공항') jejuInfo.push(item);
		if (item.aprKor === '김포국제공항') gimpoInfo.push(item);
	});

	console.log(gimpoInfo);
	console.log(jejuInfo);
	const gmp = gimpoInfo.map((v) => {
		return {
			name: v.parkingAirportCodeName,
			full: v.parkingFullSpace,
			remain: v.parkingIstay,
		};
	});

	const cju = jejuInfo.map((v) => {
		return {
			name: v.parkingAirportCodeName,
			full: v.parkingFullSpace,
			remain: v.parkingIstay,
		};
	});
	return res.status(200).json({
		gmp,
		cju,
	});
};
