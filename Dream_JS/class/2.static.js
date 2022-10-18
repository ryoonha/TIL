// static 정적 프로퍼티, 메서드


class Fruit{
    constructor(name, emoji){
        this.name = name;
        this.emoji = emoji;
    }

    // 인스턴스 레벨의 메서드 
    display = () => { 
        console.log(`${this.name}${this.emoji}`);
    };

    // 클래스 레벨의 메서드 
    // 클래스 레벨의 메서드는 this 참조할 수 없음 -> 템플릿(아무것도 채워지지 않음)이기 때문에 
    static makeRandomFruit(){
        return new Fruit('banana','🍌');
    };

    static MAX_FRUIT = 4;

}

/**
instance level의 methods 와 property는 생성된 instance에 넣어서 호출 가능 
class 자체로는 값이 없어서 호출할 수 없음 
 */

const banana = Fruit.makeRandomFruit();
console.log(banana);

console.log(Fruit.MAX_FRUIT); // 4 

