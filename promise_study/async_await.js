main();

function main() {
    p1(3, "data1").then(result => console.log(result));

    // 여기서 then을 사용해야됨 why async 를 걸어주는 순간 Promise 이기 때문
    setTimeout(() => p2("data2").then(result => console.log(result)), 4000);
    
    p2("data3").then(result => p3(result, 100).then(result => console.log(result)));

    p4("data4"); // 전체적으로 보았을때 비동기

    console.log("출력"); // 순서상 console 먼저 출력 나머지 함수들은 즉, 비동기(Promise 이기 때문)
}

function p1(time, data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, time * 1000);
    });
}

// async 를 다는 순간 Promise(이 자체가 하나의 비동기가 됨)
// async 의 단점은 resolve 를 마음대로 조작할 수 없다
async function p2(data) {
    return data;
}

async function p3(data, value) {
    return {
        [data] : value
    };
}

async function p4(data) {
    const r2 = await p3(await p2(data), 200);
    console.log(r2);
}