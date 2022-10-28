// try catch finally
function readFile(path) {
  throw new Error('파일 경로를 찾을 수 없음');
  return '파일의내용';
}

function processFile(path) {
  let content;
  try { // 에러를 던질 수 있는 함수라면, 시도한다
    content = readFile(path);
  } catch (error) { // 만약 에러가 발생하면, 에러를 catch 구문대로 처리 
    console.log(error.error);
    content = '기본내용'; // 파일 못 읽으면 이렇게 처리해 
  } finally { // catch 하든 안하든 마지막으로 무언가를 해야 한다면
    console.log('성공하든 실패하든 마지막으로 리소스를 정리할 수 있음!');
  }
  const result = 'hi ' + content;
  return result;
}

const result = processFile('경로');
console.log(result);



