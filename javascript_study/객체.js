// 객체(Object)
// JavaScript 객체 형태 = {key: value, key: value, ...}     (중괄호를 사용하여 객체 생성)
let student = {
    name: '홍길동',
    age: 20
};

console.log(student);
console.log(typeof(student)); // object
console.log(student.name); // 홍길동
console.log(student.age); // 20

console.log();

class Student {
    name;
    age;

    // 생성자 -> JavaScript 는 자료형 명시를 안하기 떄문에 오버로딩이 되지 않음
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

let s1 = new Student();
console.log(s1);

console.log();

s1.name = '홍길동';
s1.age = 20;
console.log(s1);

console.log();

let s2 = new Student('홍길동2', 30);
console.log(s2);

class User {
    #username; // #은 Java로 치면 private 접근지정자(private field)
    password;

    set setUsername(username) {
        this.#username = username;
    }

    get username() {
        return this.#username;
    }
}

let user1 = new User();
// user1.#username = 'HongGilDong'; // private 접근지정자이기 때문에 값 할당 불가
console.log(user1.username);

let user2 = new User();
user2.setUsername = 'HongGilDong'; // JavaScript 에서 매개변수를 해당 함수로 호출하고 싶을때는 값을 대입하는 형태로 사용 -> set setUsername
console.log(user2.username); // -> get username

// Java로 치면 Map - HashMap
let dataMap = new Map();
dataMap.set("username", "홍길동");
dataMap.set("password", "1234");

console.log(dataMap);
console.log(dataMap.get("username")); // Map의 데이터 가져오기(key 값만 매개변수로! value 는 해당안됨!!!) -> key 값을 매개변수로 사용하여 원하는 key의 value 값을 가져옴
console.log(dataMap.get("password"));
