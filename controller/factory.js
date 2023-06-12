export const changeCongestion = (level) => {
	console.log(typeof level);
	if (typeof level !== "number") return '알 수 없음';
	switch (level) {
		case 1:
			return '원활';
		case 2:
			return '보통';
		case 3:
			return '혼잡';
		case 4:
			return '매우 혼잡';
		default:
			return '알 수 없음';
	}
};

export const getCurrentFullDate = () => {
	return new Date().toISOString().slice(0, 16).replaceAll("-","").replace("T", "").replace(":", "");
}

export const getCurrentDate = () => {
  return new Date().toISOString().slice(0, 10).replaceAll("-", "");
}


// 기본적으로 Date함수는 UTC시각 반환 (한국보다 9시간 느림) 안전빵으로 이 시각 기준으로 구한다
export const getTimeFc = () => {
	const currentDate = getCurrentFullDate();
	const currentTime = currentDate.slice(8, 12);
	if(Number(currentTime) > 1800) return currentDate.slice(0, 8) + "1800";
	else return currentDate.slice(0, 8) + "0600"
}