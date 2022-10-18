// 클래스마다 공통된 속성이나 동작이 있다면
/*
class Tiger {
    constructor(color){
        this.color = color;
    }
    eat(){
        console.log('먹자!');
    }
    sleep(){
        console.log('잔다');
    }
}

class Dog {
    constructor(color){
        this.color = color;
    }
    eat(){
        console.log('먹자!');
    }
    sleep(){
        console.log('잔다');
    }
    play(){
        console.log('놀자아~');
    }
}
*/

class Animal {
    constructor(color){
        this.color = color;
    }
    eat(){
        console.log('먹자!');
    }
    sleep(){
        console.log('잔다');
    }
}

class Tiger extends Animal {}

const tiger = new Tiger('노랑이');
console.log(tiger); // Tiger { color: '노랑이' }

tiger.eat();
tiger.sleep();

class Dog extends Animal {
    constructor(color, ownerName){
        super(color);
        this.ownerName = ownerName;
    }
    play(){
        console.log('노올자~!')
    }

    // 오버라이딩 overriding - 부모 메서드를 덮어씌우고 싶을 때 
    eat(){
        console.log('강아지가 먹는다') 
    }

    // 부모의 메서드 기능 가져오되, 추가하고 싶을 때 
    sleep(){
        super.sleep(); // 부모의 기능 호출 
        console.log('Good night!')
    }
}

const dog = new Dog('누렁이');
console.log(dog);
dog.eat();
dog.sleep();
dog.play();