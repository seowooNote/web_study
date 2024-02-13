// async 비동기

// 동기 처리 : 순서대로 실행
// console.log(1);
// console.log(2);
// console.log(3);

// 콜백함수
// setTimeout(() => {
//     console.log(4);
//     setTimeout(() => {
//         console.log(5); // 2초 뒤에 실행하라(5) => 즉 3초 뒤에 4 가 출력된 후 2초 뒤에 5가 출력됨
//     }, 2000);
// }, 3000); // 3초 뒤에 실행해라(4)

// Promise 자체가 비동기
// new Promise((resolve, reject) => {
//     // 비동기 처리 setTimeout()
//     setTimeout(() => {
//         console.log("1번");
//     }, 2000);
//     resolve("3번");
// }).then((result) => {
//     console.log(result);
// });

// console.log("2번");

console.log("프로그램 시작");
const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("여기서");
        console.log("여기까지");
        if(0 === 0) {
            resolve("3초 뒤에 출력"); // .then() -> 정상 작동 시
        } else {
            reject(new Error("오류입니다.")); // .catch() -> 오류 발생 시
        }
    }, 3000)
});

p.then((response) => {
    console.log(response); // resolve() 에 해당
}).catch((error) => {
    console.log(error); // reject() 에 해당
}).finally(() => {

});

console.log("여기가 먼저");