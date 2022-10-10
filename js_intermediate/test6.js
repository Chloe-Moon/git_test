let user = {name: "Moon"};
let info = {age: 25};
let fe = ["JS", "React"];
let lang = ["Korean", "English"];

user = {
    ...user,
    ...info,
    skills: [...fe, ...lang],
}
console.log(user);