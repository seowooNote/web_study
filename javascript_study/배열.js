 // 배열 선언
 let numbers1 = [];             // 방법 1
 let numbers2 = new Array();    // 방법 2
 let numbers3 = [1, 2, 3, 4, 5];    // 배열 선언과 동시에 값 주입 방법

 // .push() : 해당 배열의 데이터 값 주입
numbers1.push(10);
console.log(numbers1);
numbers1.push(20);
console.log(numbers1);
console.log(numbers1[0]); // 10
console.log(numbers1[1]); // 20
numbers1[0] = 30;
console.log(numbers1[0]); // 30
numbers1[2] = 50; // .push() 말고도 해당 배열에 데이터 값을 주입할 수 있음
console.log(numbers1);
numbers1[5] = 100;
console.log(numbers1); // 현재 해당 배열의 index 3, 4 에 해당하는 데이터 값이 없으면 <2 empty items> 라고 해당 배열을 전체 출력할 때 나타냄
console.log(numbers1[3]); // undefined 해당 배열의 index에 위치한 데이터 값이 정의되어 있지 않음

console.log();

// for 문
for(let i = 0; i < numbers1.length; i++) {
    console.log(numbers1[i]); // 해당 배열의 index 값에 위치한 데이터 값이 없는 index 는 undefined 가 출력됨
}

console.log();

for(let i = 0; i < 10; i++) {
    console.log(numbers1[i]); // 해당 배열의 index 값에 위치한 데이터 값이 없는 index 는 undefined 가 출력됨
}

console.log();

// 향상된 for 문(Java는 :(콜론) JavaScript는 of)
for(let num of numbers1) {
    console.log(num);
}

// forEach 문(해당 배열의 index 값에 위치한 데이터 값이 없는 것은 출력하지 않고 들어 있는 데이터 값만 출력됨 / Java는 -> / JavaScript는 =>)
numbers1.forEach(n => console.log(n));