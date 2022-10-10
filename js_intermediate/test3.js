// 객체를 만들어주는 함수
function makeObj(key, val){
    return {
        [key]:val,
    };
}

// 객체 메소드
const user = {
    name: "moon",
    age: 25
};

// const user2 = user;
const user2 = Object.assign({}, user);
user2.name = "Tom";

console.log(user); // "moon"
console.log(user2); // "Tom"