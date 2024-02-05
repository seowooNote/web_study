const submitButton = document.querySelector(".input-submit");

// onclick 이벤트 속성 : 해당 영역을 클릭했을때 발생
submitButton.onclick = () => {
    // alert("알림창");
    const input = document.querySelector(".inputs");
    // alert(input.value); // inputs 태그의 해당하는 value 값을 알림창으로 알림
    const dataList = document.querySelector(".data-list");
    dataList.innerHTML += `<li>${input.value}</li>`;
    input.value = '';
}

/*
    위의 코드 매커니즘 예시
    let submitButton = {
        onclick: null
    }

    submitButton.onclick = () => {
        alert("알림창")
    }
*/