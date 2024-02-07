const mainInput = document.querySelector("div>input");
// 웹페이지 실행시 작성할 함수 구현
window.onload = () => {
    getArrayInputList();
}

// mainInput 텍스트 입력 후 Enter 키 입력 시 이벤트 발생할 함수 구현
mainInput.onkeyup = (e) => {
    if(e.keyCode === 13) {
        const mainInput = document.querySelector("div>input");
        const arrayInputListJson = localStorage.getItem("arrayInputList");
        const arrayInputList = arrayInputListJson !== null ? JSON.parse(arrayInputListJson) : new Array();
        
        let lastArrayInputListIndex = arrayInputList.length !== 0 ? arrayInputList[arrayInputList.length - 1].id : 0;
        
        let arrayInputObject = {
            id: lastArrayInputListIndex + 1,
            content : mainInput.value
        }
        
        arrayInputList.push(arrayInputObject);

        mainInput.value = "";
        
        localStorage.setItem("arrayInputList", JSON.stringify(arrayInputList));

        getArrayInputList();
    }
}

// mainInput 텍스트 입력후 해당 텍스트 value 값 웹사이트 구현되는 함수
function getArrayInputList() {
    const mainInputReturnTarget = document.querySelector("ul");

    const arrayInputListJson = localStorage.getItem("arrayInputList");
    const arrayInputList = arrayInputListJson !== null ? JSON.parse(arrayInputListJson) : new Array();

    mainInputReturnTarget.innerHTML = "";

    for(let array of arrayInputList) {
        mainInputReturnTarget.innerHTML += `
        <li class="array${array.id}">
            <span>${array.id}번 ${array.content}</span>
            <input type="text" />
            <button onclick="handleEditButton(${array.id});">수정</button>
            <button onclick="handleRemoveButton(${array.id});">삭제</button>
        </li>
    `;
    }
}

// mainInput 으로 만들어진 새로운 input에 대한 이벤트(수정버튼)
function handleEditButton(id) {
    // 해당 수정 버튼 클릭 대상 설정(targeting) -> input
    const liTarget = document.querySelector(`.array${id}`);
    const inputTarget = liTarget.querySelector("input");
    const arrayInputListJson = localStorage.getItem("arrayInputList");
    const arrayInputList = arrayInputListJson !== null ? JSON.parse(arrayInputListJson) : new Array();

    for(let i = 0; i < arrayInputList.length; i++) {
        if(arrayInputList[i].id === id) {
            arrayInputList[i].content = inputTarget.value;
            inputTarget.value = "";
            break;
        }
    }
    
    localStorage.setItem("arrayInputList", JSON.stringify(arrayInputList));
    getArrayInputList();
}

// mainInput 으로 만들어진 새로운 input에 대한 이벤트(삭제버튼)
function handleRemoveButton(id) {
    let selected = confirm("정말로 삭제하시겠습니까?");
    if(!selected) {
        return;
    }
    const arrayInputListJson = localStorage.getItem("arrayInputList");
    const arrayInputList = arrayInputListJson !== null ? JSON.parse(arrayInputListJson) : new Array();
    const newArrayInputList = arrayInputList.filter(array => array.id !== id);
    
    localStorage.setItem("arrayInputList", JSON.stringify(newArrayInputList));
    getArrayInputList();
}