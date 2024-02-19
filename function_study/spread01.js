// 객체 spread
const slime = {
    name: "슬라임"
};

const cuteSlime = {
    ...slime,
    attribute: "cute"
}

const purpleCuteSlime = {
    ...cuteSlime,
    color: "purple",
    name: "slime" // ...cuteSlime에서 해당 name 값이 "슬라임" -> "slime" 으로 변경되어 적용됨
}

console.log(slime);
console.log(cuteSlime);
console.log(purpleCuteSlime);

console.log();

// 배열 spread
const nums = [1, 2, 3, 4];
const nums2 = [...nums, 5, 6, 7, 8, 9, 10];
const nums3 = [...nums2.filter(n => n % 2 === 0), 11, 12, 13, 14, 15]; // filter() 를 사용하여 기존 nums2 배열의 값들을 다 돌면서 해당 조건을 만족하는 배열의 값들만 새로운 배열에 저장되어 최종적으로 num3 배열 내부에 저장되게 된다(여기서 조건은 짝수만 해당)

console.log(nums);
console.log(nums2);
console.log(nums3);

const users = [
    {
        id: 1,
        name : "홍길동1"
    },
    {
        id: 2,
        name : "홍길동2"
    },
    {
        id: 3,
        name : "홍길동3"
    },
    {
        id: 4,
        name : "홍길동4"
    },
    {
        id: 5,
        name : "홍길동5"
    },
];

const evenUser = [...users.filter((user => user.id % 2 == 0)), {id: 6, name: "홍길동6"}, {id: 7, name: "홍길동7"}, {id: 8, name: "홍길동8"}, {id: 9, name: "홍길동9"}, {id: 10, name: "홍길동10"}];
console.log(evenUser);