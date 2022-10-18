// 날짜를 나타내는 date 


console.log(new Date()); // 인자 X -> 현재 시간
console.log(new Date('Jun 5, 2022')); 
console.log(new Date('2022-12-17T03:24:00'));

// UTC기준 (협정 세계시, 1970년 1월 1일 UTC 자정과의 시간 차이를 밀리초 단위로 표기)
console.log(Date.now());
console.log(Date.parse('2022-12-17T03:24:00')); // 밀리초 단위로 지정


// 인스턴스
const now = new Date();
now.setFullYear(2023);
now.setMonth(0); // 0: 1월, set으로 원하는 시간 지정

// get으로 가져올 수 있음
// 주의: 프로그래밍의 index는 무조건 0부터 시작! 
console.log(now.getFullYear());
console.log(now.getDate()); // 0: 1
console.log(now.getDay()); // 0 일요일일부터, 1... 6: 토요일
console.log(now.getTime());
console.log(now);


// 문자열로 변환
console.log(now.toString());
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toISOString()); // ISO 8601 형식
console.log(now.toLocaleString('en-US')); // 미국형식으로 표기 
console.log(now.toLocaleString('ko-KR')); // 한국형식으로 표기