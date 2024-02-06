// 변수 var, let
var num1 = 10;
var num2 = 20;

console.log(num1 + num2);

// 호이스팅 : 메모리 참조 이전에 선언이 무조건 먼저 일어나는 현상(선언 -> 참조 -> 대입 순서)
console.log(num1 + num3);
var num3 = 30;
console.log(num3);
var num3 = "안녕";
console.log(num3);
// var 쓰지 말고 let 사용
// var 를 이용하여 같은 변수를 중복으로 선언하여 사용해도 되는 오류 발생(재선언이 가능한 오류)
// let 은 호이스팅 안됨(=> var 쓰지 말고 let 사용)
// console.log(num4);
let num4 = 40;
console.log(num4);
num4 = 20;
console.log(num4);

// 상수 const
// 값을 변경할 수 없음
const num5 = 50;
// num5 = 60;
console.log(num5);