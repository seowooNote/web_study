// spread 연산
// let array = [1, 2, 3, 4];
// array.push(5);
// console.log(array);
// array = [...array, 6]; // ...array : 해당 array의 배열의 값이 복사 // 6 : 해당 데이터를 ...array 배열에 6인 데이터 값을 추가해라

// let obj = {
//     name: "홍길동",
//     age: 20
// }

// let obj2 = {
//     ...obj,
//     name: "홍길동2",
//     address: "대한민국"
// }

// console.log(obj);
// console.log(obj2);

// 비구조 할당 : 객체를 풀어쓰는 방법
// let obj = {
//     id: 1,
//     name: "홍길동",
//     age: 20
// };

// console.log(obj);

// let {id, name, age} = obj;

// console.log(id);

let dataList = new Array(); // 비어있는 배열 전역으로 선언 (데이터를 넣어줄 배열)
// let dataList = [];

window.onload = () => {
    const addInput = document.querySelector(".add-input");

    addInput.onkeyup = (e) => {
        if(e.keyCode === 13) { // Enter 키 (e.keyCode === 13)
            const inputValue = addInput.value;
            // console.log(inputValue);

            const lastId = dataList.length === 0 ? 0 : dataList[dataList.length - 1].id;

            const dataObj =  {
                id: lastId + 1,
                content: inputValue
            };

            // java Servlet 연동
            fetch("http://localhost:8080/data_array/data/addition", {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify(dataObj)
            });
            // mode: "cors", 는 cross~ 오류시 설정


            dataList = [...dataList, dataObj]; // 
            // dataList.push(dataObj);

            addInput.value = "";

            getDataList();
        }
    }
}

// 함수 컴포넌트화 (REACT)
function contentData({ id, content }) {
    return `
        <li>
            <span>${id}번 </span>
            <span>${content}</span>
            <input type="text" class="edit-input" value="${content}" />
            <button onclick="editData(${id})">수정</button>
            <button onclick="removeData(${id})">삭제</button>
        </li>
    `;
}

function getDataList() {
    const contentList = document.querySelector(".content-list");
    contentList.innerHTML = "";
    for(let dataObj of dataList) {
        contentList.innerHTML += contentData(dataObj);
    }
}

function removeData(id) {
    // const findId = (dataObj) => dataObj.id !== id;
    dataList = dataList.filter((dataObj) => dataObj.id !== id); // filter 매개 변수에 해당하는 조건이 참인 것만 새로운 배열에 담는다

    // for(let dataObj of dataList) {
    //     if(dataObj.id === id) {
    //         dataList.remove(dataObj);
    //     }
    // }

    getDataList();z
}

function editData(id) {
    let findIndex = -1;

    // 1) 방법1
    // for(let i = 0; i < dataList.length; i++) {
    //     if(dataList[i].id === id) {
    //         findIndex = i;
    //         break;
    //     }
    // }

    // 2) 방법2
    let findObj = dataList.filter((dataObj) => dataObj.id === id)[0]; // filter 배열 -> filter 배열의 객체에 접근
    findIndex = dataList.indexOf(findObj);

    const editInputs = document.querySelectorAll(".edit-input");

    dataList[findIndex].content = editInputs[findIndex].value;

    getDataList();
}