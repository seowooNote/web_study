main();
main2();

function main() {
    let result = [];
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(1);
        }, 3000);
    }).then((num) => {
        result = [...result, num];
        new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(2);
            }, 2000);
        }).then((num) => {
            result = [...result, num];
            new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(3);
                }, 1000);
            }).then((num) => {
                result = [...result, num];
                return result
            }).then(resultArr => console.log(resultArr));
        })
    });
    
}

function main2() {
    new Promise((resolve, reject) => {
        let result = [];
        setTimeout(() => {
            resolve([result, 1]);
        }, 3000);
    }).then(([result, num]) => {
        result.push(num);
        new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve([result, 2]);
            }, 2000);
        }).then(([result, num]) => {
            result.push(num);
            new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve([result, 3]);
                }, 1000);
            }).then(([result, num]) => {
                result.push(num);
                return result;
            }).then(resultArr => console.log(resultArr));
        })
    });
    
}