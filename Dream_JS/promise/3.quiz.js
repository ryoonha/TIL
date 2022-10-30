// 주어진 seconds(초)가 지나면 callback 함수를 호출함
// 단, seconds가 0보다 작으면 에러를 던지자!
// seconds < 0 -> .catch(error)

function runInDelay(callback, seconds){
    if(!callback){ // 인자인 callback, seconds 검사
      throw new Error('callback 함수를 전달해야 함')
    }
    if(!seconds || seconds < 0){
      throw new Error('seconds는 0보다 커야 함');
    }
  setTimeout(callback, seconds * 1000); 
}

try {
  runInDelay(()=>{
    console.log('타이머 완료!')
  }, -2);
} catch(error){ // 에러가 발생해도 앱이 강제종료하지 않도록 하기 위해 
  console.log('에러다')
}