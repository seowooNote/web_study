const menu1 = {
    path : "/test/menu",
    params : {
        page : 1,
        searchValue : "테스트"
    }
}

const result =  "/test/menu?page=1&searchValue=테스트";

const result2 = menu1.path + "?";
console.log(result2)

const keys = Object.keys(menu1.params);
console.log(keys.map(key => menu1.params[key]));
// console.log(keys[0]);
// console.log(keys[1]);

const values = Object.values(menu1.params);
console.log(values);

const entries = Object.entries(menu1.params);
console.log(entries);
console.log(entries.map((entry) => entry[0] + "=" + entry[1]));
console.log(entries.map(([key, value]) => key + "=" + value));


const names = ["홍길동1", "홍길동2", "홍길동3"];
const names2 = names.join(); // join 배열 -> 문자열 (쉼표로 default / 매개변수에 값을 너으면 해당 값으로 쉼표에서 바뀜)
console.log(names2);
const names3 = names.join("&");
console.log(names3);

console.log(entries.map(([key, value]) => key + "=" + value).join("&"));