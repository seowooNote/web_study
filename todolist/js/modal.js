// [window.onload 는 js에서 한번만 써야 됨]
// window.onload = () => {
//     // const day = ["일", "월", "화", "수", "목", "금", "토"];
//     // let now = new Date();
//     // console.log(now.getFullYear()); // 년
//     // console.log(now.getMonth() + 1); // 월은 자바스크립트 내에서 0부터 시작하게 되어있어서 +1 해줘야 함
//     // console.log(now.getDate()); // 일
//     // console.log(day[now.getDay()]); // 요일 일(0) -> 토(6)

//     let arr = new Array();
//     let obj1 = {
//         id: 1,
//         name: '홍길동1'
//     }
//     let obj2 = {
//         id: 2,
//         name: '홍길동2'
//     }

//     arr.push(obj1);
//     arr.push(obj2);
//     console.log(arr);

//     console.log(JSON.stringify(arr));
//     console.log(JSON.stringify(obj1));
//     console.log(JSON.stringify(obj2));

//     let jsonArray = JSON.stringify(arr); // 객체를 JSON 으로 바꾸기
//     console.log(JSON.parse(jsonArray));  // JSON을 객체로 바꾸기
// }

window.onkeyup = (e) => {
    if(e.keyCode === 27) {
        handleCancelClick();
    }
}

function handleAddTodoModalOpen() {
    const modal = document.querySelector(".root-modal");
    const title = modal.querySelector(".modal-title");
    const todoInput = modal.querySelector(".todo-input");
    const submitButton = modal.querySelector(".modal-button");
    title.innerHTML = "추가하기";
    todoInput.value = "";
    submitButton.onclick = handleAddTodoSubmit;

    todoInput.onkeydown = (e) => {
        // e.ctrlKey : ctrl 키를 누르고 있으면 true 아니면 false
        // if(e.ctrlKey && e.keyCode === 13) {
        //     submitButton.click();
        // }
        if(!e.shiftKey && e.keyCode === 13) {
            submitButton.click();
        }
    }

    modal.classList.add("modal-show");
}

function handleEditTodoModalOpen(todoId) {
    const modal = document.querySelector(".root-modal");
    const title = modal.querySelector(".modal-title");
    const todoInput = modal.querySelector(".todo-input");
    const submitButton = modal.querySelector(".modal-button");
    title.innerHTML = "수정하기";

    let todoListJson = localStorage.getItem("todoList"); // key "todoList" 있는지 찾아줌
    let todoList = todoListJson !== null ? JSON.parse(todoListJson) : new Array(); 

    let findTodoByTodoId = todoList.filter(todo => todo.todoId === todoId)[0];
    
    todoInput.value = findTodoByTodoId.content;
    submitButton.onclick = () => handleEditTodoSubmit(todoId);

    todoInput.onkeydown = (e) => {
        // e.ctrlKey : ctrl 키를 누르고 있으면 true 아니면 false
        // if(e.ctrlKey && e.keyCode === 13) {
        //     submitButton.click();
        // }
        if(!e.shiftKey && e.keyCode === 13) {
            submitButton.click();
        }
    }

    modal.classList.add("modal-show");
}

function convertDateKor(currentDate) {
    const dayKors = ["일", "월", "화", "수", "목", "금", "토"];
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const date = currentDate.getDate();
    const day = dayKors[currentDate.getDay()];
    return `${year}년 ${month}월 ${date}일 (${day})`;
}

function handleAddTodoSubmit() {
    const modal = document.querySelector(".root-modal");
    const todoInput = modal.querySelector(".todo-input");
    modal.classList.remove("modal-show");

    let todoListJson = localStorage.getItem("todoList"); // key "todoList" 있는지 찾아줌
    let todoList = todoListJson !== null ? JSON.parse(todoListJson) : new Array(); 

    let lastTodoId = todoList.length === 0 ? 0 : todoList[todoList.length - 1].todoId;

    let todoObject = {
        todoId: lastTodoId + 1,
        content: todoInput.value,
        date: convertDateKor(new Date())
    }

    todoList.push(todoObject);

    localStorage.setItem("todoList", JSON.stringify(todoList));
    // localStroage(chrome 자체 데이터 저장 공간)에 Json형태로 저장하기 => key 값에 "todoList" value 값은 객체를 만들어준 데이터값
    getTodoList();
}

function handleEditTodoSubmit(todoId) {
    const modal = document.querySelector(".root-modal");
    modal.classList.remove("modal-show");

    let todoListJson = localStorage.getItem("todoList"); // key "todoList" 있는지 찾아줌
    let todoList = todoListJson !== null ? JSON.parse(todoListJson) : new Array();

    let findIndex = -1;

    for(let i = 0; i < todoList.length; i++) {
        if(todoList[i].todoId === todoId) {
            findIndex = i;
            break;
        }
    }

    if(findIndex === -1) {
        alert("수정오류");
        return;
    } 

    todoList[findIndex].content = document.querySelector(".todo-input").value;
    todoList[findIndex].date = convertDateKor(new Date());

    localStorage.setItem("todoList", JSON.stringify(todoList));
    getTodoList();
}

function handleCancelClick() {
    const modal = document.querySelector(".root-modal");
    modal.classList.remove("modal-show");
}