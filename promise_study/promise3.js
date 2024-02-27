/* Promise.all() */
main();
main2();

function main() {
    const promises = [
        new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(1);
                resolve(1);
            }, 3000);
        }),
        new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(2);
                resolve(2);
            }, 2000);
        }),
        new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(3);
                resolve(3);
            }, 1000);
        })
    ];

    Promise.all(promises).then((result) => {console.log(result)});
}