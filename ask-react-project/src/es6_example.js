const tom = {};
for (let i = 0; i < 5; i++) {
    tom['score' + i] = i
}
console.log(tom)

let tim = [];
for (let i = 0; i < 5; i++) {
    tim = [...tim, {['score' + i]: i}]
}
console.log(tim)

let tum = {
    name: "choi",
    age: 30,
    print: function () {
        console.log('1')
    }
}

console.log(tum.print())

// console.log(tom) // {score1: 10}

const obj_1 = {val: 10};
const obj_2 = obj_1; //얕은 복사
obj_2.val += 1;

console.log("obj_1", obj_1)
console.log("obj_2", obj_2)
console.log('')
const str = `텍스트 문자열입니다.
줄바꿈도 가능합니다. ${1 + 1}`
console.log(str)
console.log('')

let [name] = ["tom", 10, "london"] // 갯수가 같지 않아도 에러 x
console.log(name)

let [, demo,] = ['cc', 323, '10'] // 갯수가 같지 않아도 에러 x
console.log(demo)

let [nick, height, age, region] = ['tim', 187, 20]
console.log(region) //undefined


const demo_func_1 = (obj) => {
    console.log(obj.title)
}

const demo_func_2 = ({title}) => {
    console.log(title)
}

const people = [
    {
        name: "cc",
        age: 11,
    },
    {
        name: "aa",
        age: 12,
    },
]

for (const person of people) {
    console.log(person.name);
    console.log(person.age);
}

for (const {name, age} of people) {
    console.log(name);
    console.log(age);
}


let [name2, ...rest] = ['tim', 10, 'la']

console.log(name2) // tim
console.log(rest) // [10, 'la']

let person1 = {
    name: "steve",
    age: 1,
    region: 'busan'
}

let person2 = {
    ...person1,
    name: "bill"
}
console.log(person1)
console.log(person2)

let paul = (name, age) => `${name}은 ${age}살`;
console.log(paul("paul", 10))
