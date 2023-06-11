# preflight API

## HOW TO USE ?
 - Just do it!

### APIS
- BASEURL: https://flightserver.herokuapp.com

#### ROUTE
 - /fcst => 중기 예보 (1주일 뒤) 정보
    **return data example**
    ```
        {
          "GmpInfo": { // 김포공항 정보
              "fcst": "맑음", // 예보
              "precipitation": 0 // 강수 확률
          },
          "CjuInfo": { // 제주공항 정보
              "fcst": "구름많음", 
              "precipitation": 30 
          }
        }
    ```
---
 - /congestion => 공항 혼잡도 정보
    **return data example**
    ```
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
-------
 - /parking => 주차장 자리 정보
    **return data example**
    ```
        {
            "gmp": [ // 김포 공항
                {
                    "name": "국내선 제1주차장", // 공항 이름
                    "full": 2279, // 전체 주차장 좌석 수
                    "remain": 1683 // 남은 주차장 좌석 수
                },
                {
                    "name": "국내선 제2주차장",
                    "full": 1733,
                    "remain": 725
                },
                {
                    "name": "국제선 주차빌딩",
                    "full": 567,
                    "remain": 394
                },
                {
                    "name": "국제선 지하",
                    "full": 1200,
                    "remain": 903
                },
                {
                    "name": "화물청사",
                    "full": 737,
                    "remain": 249
                }
            ],
            "cju": [
                {
                    "name": "P1주차장",
                    "full": 1830,
                    "remain": 1697
                },
                {
                    "name": "P2장기주차장",
                    "full": 486,
                    "remain": 275
                },
                {
                    "name": "화물주차장",
                    "full": 732,
                    "remain": 378
                }
            ]
        }
    ```