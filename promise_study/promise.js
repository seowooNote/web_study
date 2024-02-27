// Promise : 동기식을 비동기식으로 변환
// Promise.all() : Promise의 비동기식 결과들을 동기식으로 받아옴

main();

let complete = [false, false, false, false];

function main() {
    // console.log("구구단 외워와1");
    // console.log("구구단 외워와2");
    // console.log("구구단 외워와3");
    const promises = [
        gugudan(0, 4, "홍길동4"),
        gugudan(1, 1, "홍길동1"),
        gugudan(2, 3, "홍길동3"),
        gugudan(3, 2, "홍길동2")
    ];

    Promise.all(promises).then(result => {console.log(result)});

}

function gugudan(index, time, name) {
    // new Promise((resolve, reject) => {
    //     console.log(`${name} : 구구단 외워와!!!`);
    //     resolve(() => {
    //         setTimeout(() => {
    //             console.log(`${name}: 다 외웠어요!!!`);
    //         }, time * 1000);
    //     });
    // }).then(() => {});

    // const promise = new Promise((resolve, reject) => {
    //     console.log(`${name} : 구구단 외워와!!!`);
    //     resolve(() => {
    //         setTimeout(() => {
    //             console.log(`${name}: 다 외웠어요!!!`);
    //         }, time * 1000);
    //     });
    // });

    // promise.then((result) => {
    //     result();
    //     return "완료";
    // }).then((result) => {
    //     console.log(result);
    // });

    const promise = new Promise((resolve, reject) => {
        console.log(`${name} : 구구단 외워와!!!`);
        setTimeout(() => {
            console.log(`${name}: 다 외웠어요!!!`);
            // complete = complete.map((value, cIndex) => cIndex !== index ? value : true);
            resolve(true);
        }, time * 1000);
    });

    return promise;
}