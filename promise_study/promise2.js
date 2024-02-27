/* Promise */

// main();
main2();

function main() {
    // setTimeout() 비동기
    setTimeout(() => {
        console.log(1);
        console.log(2);
    }, 3000); 
    console.log(3);
}

function main2() {
    new Promise((resolve, reject) => {
        console.log(1);
        console.log(2);
        setTimeout(() => {
            console.log(4);
            resolve(10000);
        }, 3000);
    }).then((num) => {
        console.log("then 실행");
        console.log(`resolve의 매개변수를 가지고 온 num을 호출 : ${num}`);
    });
    console.log(3);
}