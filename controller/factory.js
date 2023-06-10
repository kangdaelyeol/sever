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


export const getCurrentDate = () => {
  return new Date().toISOString().slice(0, 10).replaceAll("-", "");
}