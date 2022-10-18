const obj = {
    name: '엘리',
    age: 20,
};


// 동적으로 접근(추가, 삭제 등의 동작)하고 싶을 때 (아직 변수 확정 아님) -> 대괄호 표기법

// 예시 1
function getValue(obj, key){
    return obj[key]; 
}

console.log(getValue(obj, 'name'));

// 예시 2
function addKey(obj, key, value){
    obj[key] = value; 
}

addKey(obj, 'job', 'engineer');
console.log(obj); // { name: '엘리', age: 20, job: 'engineer' }

// 에시 3
function deleteKey(obj, key,){
    delete obj[key];
}

deleteKey(obj, 'age');
console.log(obj); // { name: '엘리', job: 'engineer' }