// [자바스크립트-JavaScript]
// 베이스 문법 -> 자바
// 타입리스 -> 타입을 명시하지 않음(자료형을 적지 않음)

console.log('hello javascript');

var num = 10;
num = "안녕";
// Java Version
// Object num = 10;
// num = "안녕";

console.log(num);

// typeof
console.log(typeof(10)); // number
console.log(typeof(10.0)); // number
console.log(typeof("10")); // string
console.log(typeof(true)); // boolean

var n;
console.log(typeof(n)); // undefined
console.log(n) // undefined
n= null;
console.log(typeof(n)); // object
console.log(n); // null
console.log(() => {}); // [function (anonymous)]