// async 를 해주면 fx1()이 Promise
async function fx1() {
    console.log("fx1 비동기 호출");
    // async 를 해주면 resolve() 호출을 안하더라도 자동으로 되어 있음

    // return 10;

    // throm new Error() 를 해주면 reject() 호출
    // throw new Error(); // reject();
    return 10;
}

async function fx2(num) {
    console.log("fx2 비동기 호출");
    console.log(`${num} 출력`);
}

async function fx3() {
    let arg = 0;
    // fx1().then((result) => {
    //     arg = result;
    //     console.log(arg);
    //     fx2(arg);
    // });

    // fx2(arg); // 0 이 출력 / why? 비동기 처리이기 때문에 .then의 해당 코드보다 fx2()가 빨리 실행되어 0이 출력됨

    // await 은 비동기를 동기로 바꾸는 역할(그리고 await은 async 함수 내에서만 사용이 가능!!!)
    let fx1Result = await fx1(); // await(비동기가 끝날때 까지 기다리다) 을 사용하면 fx1()의 리턴 값을 바로 해당 변수에 담아줌 / 즉, 비동기를 동기로 바꿔주는 것이 await
    // fx1() 는 리턴값이 Promise / await fx1() 는 리턴값이 해당 fx1() 의 return 값이 리턴됨
    arg = fx1Result;
    await fx2(arg);
}

// async 를 해주면 resolve() 호출을 안하더라도 자동으로 되어 있음 / 즉, .then()이 사용 가능

function handleSubmitClick2() {
    // fx1(); // async -> Promise(리턴)
    // console.log(fx1()); // Promise 객체가 리턴되어 출력됨(10 출력 아님)

    // Promise 객체에 접근하여 then 으로 해당 fx1()의 리턴값을 매개변수로 받아 출력(이렇게 해야 10이 출려됨)
    // fx1().then(() => {
    //     console.log("then 호출 / 해당 fx1()의 리턴값(10)을 then의 매개변수로 받음");
    // }).catch(() => {
    //     console.log("오류 생성");
    // }); 

    // console.log("동기 실행");

    fx3();
}

function handleSubmitClick() {
    // Promise 비동기 처리 / 매개변수 resolve, reject 인 함수가 들어감
    const p1 = new Promise((resolve, reject) => {
        console.log("p1 Promise 실행");
        // resolve(); // resolve 호출해야 해당 then() 이 실행
        reject(); // reject 호출해야 해당 catch() 가 실행
    });

    // then() 해당하는 p1 이 실행되고 나면 실행 / 대신 Promise 의 매개변수인 resolve 가 호출이 되어야 지만 실행됨!!!
    // then() 은 Promise의 매개변수 resolve() 호출에 대한 정의 / => then() 도 결국 Promise
    p1.then(() => {
        console.log("p1 then 실행");
        return 10; // return 처리 시 다음 해당 then의 매개변수로 넘겨줌
    }).then((num) => {
        console.log(num);
    }).then(() => {
        console.log("3번째 then 실행");
    }).catch(() => {
        console.log("오류")
    });

    // catch() 오류발생시(reject 호출) 실행
    // p1.catch(() => {
    //     console.log("p1 catch 실행 / 오류");
    // });

    const p2 = new Promise((resolve, reject) => {
        console.log("p2 Promise 실행");
    });

    console.log("동기 실행");

}

// => 즉 비동기 처리는 Promise를 사용하는데 new Promise()를 해서 생성하거나 함수 앞에 async를 작성하여 생성할 수 있음