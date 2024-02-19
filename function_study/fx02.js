응답데이터_뿌려주기();

function 응답데이터_뿌려주기() {
    const responseData = {
        title: "응답데이터",
        dataList: [
            {
                name: "홍길동1",
                age: 11
            },
            {
                name: "홍길동2",
                age: 22
            },
            {
                name: "홍길동3",
                age: 33
            }
        ]
    };

    console.log(타이틀_컴포넌드(responseData.title));

    // 일반 for 문
    // for(let i = 0; i < responseData.dataList.length; i++) {
    //     console.log(데이블_TR_TD_컴포넌트(responseData.dataList[i]));
    // }

    // 향상된 for 문
    // for(let 학생 of responseData.dataList) {
    //     console.log(데이블_TR_TD_컴포넌트(학생));
    // }

    // forEach 문
    // responseData.dataList.forEach((학생) => console.log(데이블_TR_TD_컴포넌트(학생)));

    // 비구조 할당
    // const 타이틀 = responseData.title;
    // const 학생들 = responseData.dataList;
    const { title, dataList } = responseData;
    const { name, age } = dataList[0]; // 1번째 학생
    // 비구조 할당을 이용한 향상된 for 문
    for(let 학생 of dataList) {
        console.log(데이블_TR_TD_컴포넌트(학생, title));
    }

    // 비구조 할당 추가 예시
    const user = {
        username: "aaa",
        password: "bbb",
        address: "ccc"
    }
    const { username, password, address } = user;
}

function 타이틀_컴포넌드(타이틀) {
    return `
        <h1>${타이틀}</h1>
    `;
}

function 데이블_TR_TD_컴포넌트({name, age}, title) {
    console.log(title);
    return `
        <tr>
            <td>${name}</td>
            <td>${age}</td>
        </tr>
    `;
}