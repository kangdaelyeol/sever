# Preflight API

Table of Contents

1. [How to Use](#how-to-use)
2. [APIs](#apis)
3. [Routes](#routes)
   - [Forecast API](#forecast-api)
   - [Congestion API](#congestion-api)
   - [Parking API](#parking-api)

## HOW TO USE ?

- Just do it!

### APIS

- BASEURL: https://flightserver.herokuapp.com

## Routes

### Forecast API

Route: `/fcst`

**Required**: Body: `{"startDate": "20230612"}` (StartDate is the departure date)

**description**: 출발일자(startDate)가 현재 기준 3~7일 이후인 경우 해당 출발자에 대한 예보 정보 제공.

**Example of returned data**:

```json
{
	"GmpInfo": {
		// 김포공항 정보
		"fcst": "맑음", // 예보
		"precipitation": 0 // 강수 확률
	},
	"CjuInfo": {
		// 제주공항 정보
		"fcst": "구름많음",
		"precipitation": 30
	}
}
```

**출발일자랑 현재 일자가 3일 미만 || 7일 초과인경우**

```
  null
```

**API 제공 서버 오류인 경우**

```json
{ "error": "API 서버 에러" }
```

---

### Congestion API

Route: `/congestion`

**Example of returned data**:

```json
{
	"gmp": {
		"congestion": "원활", // 혼잡도
		"time": "20:55" // 기준 시각
	},
	"cju": {
		"congestion": "보통",
		"time": "20:55"
	}
}
```

---

### Parking API

Route: `/parking`

**Example of returned data**:

```json
{
	"gmp": [
		// 김포 공항
		{
			"name": "국내선 제1주차장", // 공항 이름
			"full": 2279, // 전체 주차장 좌석 수
			"remain": 1683 // 남은 주차장 좌석 수
		}
		// 추가 주차장...
	],
	"cju": [
		{
			"name": "P1주차장",
			"full": 1830,
			"remain": 1697
		}
		// 추가 주차장...
	]
}
```
