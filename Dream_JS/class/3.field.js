// class Fruit{

//     // class에서 초기화 하고 싶은 것 -> constructor 밖에
//     #type = '과일';

//     // constructor와 중복되는 #필드 속성은 생략 가능
//     constructor(name, emoji){ // 외부로부터 전달받은 데이터로 
//         this.#name = name; 
//         this.#emoji = emoji;
//     }
//     이렇게 사용하면 에러 발생 
// Private field '#name' must be declared in an enclosing class

//     display = () => { 
//         console.log(`${this.name}${this.emoji}`);
//     };
// }


class Fruit{

    // privete 기능 # 붙여서 사용 
        #name;
        #emoji;
        #tyep = '과일';
    
        constructor(name, emoji){ // 내부 사용도 # 붙여서 
            this.#name = name;
            this.#emoji = emoji;
        }
    
        display = () => { 
            console.log(`${this.name}${this.emoji}`);
        };    
    }


const apple = new Fruit('apple','🍎')
// apple.#name = ('오렌지'); 
// Private field '#name' must be declared in an enclosing class
console.log(apple); 