const name = document.querySelector(".name");
const age = document.querySelector(".age");
const address = document.querySelector(".address");
const button = document.querySelector("button");

let number = 1;

button.onclick = () => {
    alert("데이터 전송 완료");
    const dataList = document.querySelector("tbody");
    
    dataList.innerHTML += `<tr>
                                <td style="border: 1px solid black;">${number++}</td>
                                <td style="border: 1px solid black;">${name.value}</td>
                                <td style="border: 1px solid black;">${age.value}</td>
                                <td style="border: 1px solid black;">${address.value}</td>
                           </tr>`;
    name.value = "";
    age.value = "";
    address.value = "";
}