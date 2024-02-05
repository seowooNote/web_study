// 함수(Function)
// 함수 선언
function add(num1, num2) {
    console.log("num1 : " + num1);
    console.log(`num2 : ${num2}`); // EL표현식: ``(백쿼터) 를 이용해서 문자열과 다른 자료형의 변수를 내부에서 동시에 사용할 수 있음
    return num1 + num2;
}

add(1, 2);
console.log();
console.log(add(1, 2)); // add 함수의 해당 구현부(console.log()) + return 값 까지 출력됨

let addFunction = add; // Java 에서는 안됨, JavaScript 는 함수도 값으로 쓰기 때문에 함수를 변수로 담을 수 있음
console.log(add); // [Function: add]
console.log(addFunction); // [Function: add]
console.log();
addFunction(1, 2);
console.log(addFunction(1, 2));
console.log();

let user = {
    username: '홍길동',
    password: '1234',
    addFunction: function add(a, b) {
        return a + b;
    }
}

console.log(user.addFunction(10, 20));
console.log();

// 익명함수
let sub = function (a, b) {
    return a - b;
}

let result1 = sub(10, 5);
console.log(result1); // 5
console.log(sub); // [function: sub]
console.log();

// 화살표함수(람다식)
let division = (a, b) => {
    return a / b;
}
console.log(division(10, 5));
console.log();

division = (a, b) => a / b;
console.log(division(15, 5));
console.log(division); // [Function: division]
