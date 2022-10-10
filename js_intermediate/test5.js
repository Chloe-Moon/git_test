/*
나머지 매개변수
user 객체를 만들어 주는 생성자 함수를 만듬 
*/

function User(name, age, ...skills){
    this.name = name;
    this.age = age;
    this.skill = skills;
}

const user1 = new User('Kim', 30, 'html', 'css');
const user2 = new User('Moon', 25, 'JS', 'css');
const user3 = new User('Yoon', 26, 'English');

console.log(user1);
console.log(user2);
console.log(user3);


