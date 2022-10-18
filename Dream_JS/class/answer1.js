// 카운터 만들기 

// 2. 
class Counter {
    #value;
    counter(startValue){
        if(isNaN(startValue) || startValue < 0){
            this.#value = 0; // value 외부에서 접근해서, 무작위로 숫자가 아닌 값이나 0보다 작은 것 넣으면 안 됨
        } else {
            this.#value = startValue;
        }
    }

    increment = () => {
        this.#value++; // 증가 연산자 
    }

    get value() {
        return this.#value; // #로 인해 읽기만 가능
    }
}

// 1. (제일 먼저) 사용할 코드부터 만들기

const counter = new Counter(0); // 숫자는 내가 원하는 숫자 넣도록 

counter.increment(); // 호출하면 숫자를 증가시키는 함수, 1
counter.increment(); // 2
console.log(counter.value); 


