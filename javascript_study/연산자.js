// 산술연산자
console.log(10 + 20);   // 더하기 연산
console.log(40 - 20);   // 빼기 연산
console.log(50 * 2);    // 곱하기 연산
console.log(10 / 20);   // 나누기 연산
console.log(10 % 20);   // 나머지 연산

// 비교연산자
// JavaScript 는 == 이면 자료형 상관없이 모양만 같으면 true(타입을 비교하지 않는다)
// === 이면 자료형을 비교해서 boolean(타입을 비교한다)
console.log(10 == "10"); // true /  타입비교 X
console.log(10 === "10"); // false(10 은 numebr, "10" 은 string) / 타입비교 O
console.log(10 != "10"); // false / 타입비교 X
console.log(10 !== "10"); // true / 타입비교 O

// 증감연산자