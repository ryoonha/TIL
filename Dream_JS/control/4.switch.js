// 조건문 conditional statement
// switch : 정해진 범위 안의 값에 대해 특정한 일을 해야 하는 경우 
// if else if else if ... else 반복 -> switch 


let day = 2; // 0:월요일, 1: 화요일... 6: 일요일

let dayName;
if (day === 0) {
  dayName = '월요일';
} else if (day === 1) {
  dayName = '화요일';
} else if (day === 2) {
  dayName = '수요일';
} else if (day === 3) {
  dayName = '목요일';
} else if (day === 4) {
  dayName = '금요일';
} else if (day === 5) {
  dayName = '토요일';
} else if (day === 6) {
  dayName = '일요일';
}



switch(day) { // switch(조건)
    case 0: 
        dayName = '월요일';
        break; // 항상 멈추는 코드를 작성해줘야 함!
    case 1:
        dayName = '화요일';
        break;
    case 2:
        dayName = '수요일';
        break;
    case 3:
        dayName = '목요일';
        break;
    case 4:
        dayName = '금요일';
        break;
    case 5: 
        dayName = '토요일';
        break;
    case 6: 
        dayName = '금요일';
        break;
}

console.log(dayName);

console.clear();

let condition = 'okay'; // okay, good  -> 좋음!, bad -> 나쁨!
let text;
switch (condition) {
  case 'okay':
  case 'good':
    text = '좋음!';
    break;
  case 'bad':
    text = '나쁨!';
    break;
}
console.log(text);