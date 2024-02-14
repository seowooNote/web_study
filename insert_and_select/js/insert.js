async function handleSubmitClick() {
    const dataInputs = document.querySelectorAll(".data-inputs");

    const data = {
        name : dataInputs[0].value,
        age : dataInputs[1].value
    }

    console.log(data); // 객체

    const jsonData = JSON.stringify(data); // JSON (객체 -> JSON) / JSON은 문자열형 데이터
    console.log(jsonData); 

    // const dataObj = JSON.parse(jsonData); // 객체 (JSON -> 객체)

    const option = {
        method: "POST",
        headers: {
            "Content-Type" : "Application/json"
        },
        body : jsonData
    }

    // 비동기 처리 : 실행 완료된 것 먼저 실행 완료 됨 / fetch 비동기 처리
    // const p = fetch("http://localhost:8080/insert_and_select/data/addition", option);
    // p.then((response) => {
    //     response.json() // "Content-Type" : "Application/json" 이 되어 있으면 .json() 은 JSON -> 객체로 변환해 줌(즉, parse를 하지 않아도 객체로 됨)
    //     .then((json) => {
    //         console.log(json);
    //     });
    //     }
    // ).catch((error) => {
    //     console.log("프로미스 예외 처리!!!");
    //     console.log(error);
    // }
    // ).finally(

    // );

    // const response = fetch("http://localhost:8080/insert_and_select/data/addition", option); // 이 코드는 불가능함

    // await : 비동기 처리 -> 동기 처리 / await 은 async 함수를 작성한 내부에서만 사용 가능!!!
    // await 은 try catch 문 내에 작성하여 처리
    try {
        const response = await fetch("http://localhost:8080/insert_and_select/data/addition", option);

        if(!response.ok) {
            throw await response.json();
        }

        const json = await response.json();
        console.log(json);
        console.log("test");
    } catch (error) {
        alert(error.errorMessage);
    }
}