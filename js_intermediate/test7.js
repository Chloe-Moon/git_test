// 생성자 함수로 동일한 객체 만들기
const User = function(name, age){
    this.name = name;
    this.age = age;
    this.showName = function () {
        console.log(this.name);
    }
}

const mike = new User("Mike", 30);

//클래스로 동일한 객체 만들기
class User2 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    showName() {
        console.log(this.name);
    }
}

const tom = new User2("Tom", 19);


