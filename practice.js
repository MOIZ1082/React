// // // const users = [{
// // //     name: 'yujiro',
// // //     age: 75
// // // }, {
// // //     name: 'bobzie',
// // //     age: '26'
// // // }]

// // // const names = users.map((user) => {
// // //     console.log(user)
// // // })

// // const str = "abcABC123"; // length = 9
// // let pass = "";

// // for (let i = 0; i < 5; i++) {
// //   let charIndex = Math.floor(Math.random() * str.length); // random number 0-8
// //   pass += str.charAt(charIndex); // get a character at that index
// //   console.log(charIndex)
// // }

// // console.log(pass); // Example: "A1cb3"


// const user = { name: "Sara", age: 22 };

// const papa = {name: 'papa', age: 20};

// function greet({ name }) {
//   console.log(`Hello, ${name}`);
// }

// greet(user); // Hello, Sara

const student = {
  name: "Ayesha",
  grade: "A",
  age: 19,
};

// ✅ Extract name, grade, and age using destructuring

const {name, age, grade} = student;
console.log(name, age, grade)

const colors = ["red", "green", "blue"];

// ✅ Use destructuring to get the first and second colors

const [first, second, third] = colors;
console.log(first, second, third);

let a = 5;
let b = 10;

// ✅ Swap values using array destructuring


let currency = "usd";

let res = {
  "usd": { "inr": 83, "eur": 0.92 },
  "inr": { "usd": 0.012, "eur": 0.011 }
};

console.log(res[currency]); // 👈 same as res["usd"]


