// promise 버전: callback이 중첩(callback hell)이 없어짐

function runInDelay(seconds){
  return new Promise((resolve, reject) => {
    if(!seconds || seconds < 0){
      reject(new Error('seconds가 0보다 작음')) 
    }
    setTimeout(resolve, seconds * 1000);
  });
}

runInDelay(-2)
.then(()=> console.log('타이머 완료!')) 
.catch(console.error) 
.finally(()=> console.log('끝났다')); // 성공, 실패 상관없이 무조건 수행 