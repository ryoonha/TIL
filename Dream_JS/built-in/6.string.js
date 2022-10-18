// 전역객체 string

const textObj = new String('Hello World!');
const text = 'Hello World!';
console.log(textObj);
console.log(text);

// 객체명.아무거나함수 작성한 뒤, 마우스 올린 상태에서 커맨트 누르면 -> 참조페이지로 넘어감 

console.log(text.length); // 길이

// 문자열은 하나씩 문자(알파벳)가 들어간 집합체
// 배열로 접근 
console.log(text[0]);
console.log(text[1]);
console.log(text[2]);
// 함수로 접근 
console.log(text.charAt(0));
console.log(text.charAt(1));
console.log(text.charAt(2));


// 어떤 문자열이 몇 번째 있는지 
console.log(text.indexOf('l')); // 앞에서부터 찾아서, 발견하면 멈춤(2개 있어도 앞에 것만)
console.log(text.lastIndexOf('l')); // 뒤에서부터 찾음


// 특정한 문자가 포함되는지 
console.log(text.includes('tx'));
console.log(text.includes('h'));
console.log(text.includes('H'));


// 특정 문자열로 시작하는지, 끝나는지
console.log(text.startsWith('He'));
console.log(text.endsWith('!'));

// 문자열을 모두 대문자로 변환, 소문자로 변환 
console.log(text.toUpperCase());
console.log(text.toLowerCase());

// 특정한 위치에서 시작해서, 몇 번째에 있는 문자열에 대해 
console.log(text.substring(0, 2)); // 가져옴, He
console.log(text.slice(2)); // ()의 위치까지 삭제하고 가져옴, llo World! 
console.log(text.slice(-2)); // (-, 뒤)의 위치까지 삭제하고 가져옴, d!


// 만약 문자열에 공백이 많다면, 공백 제거
const space = '            space       ';
console.log(space.trim()); // space


// 긴 문자열, 스페이스로 끊어주고 싶다면 
const longText = 'Get to the, point';
console.log(longText.split(' ')); // [ 'Get', 'to', 'the,', 'point' ]
console.log(longText.split(', ', 2)); //끊어진 것 중 몇 개만 가져올 때 [ 'Get to the', 'point' ]