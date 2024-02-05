let index = 1;

const appendButton = document.querySelector("button");

appendButton.onclick = () => {
    const textInputs = document.querySelectorAll("input");
    const dataTableBody = document.querySelector("table>tbody");

    dataTableBody.innerHTML +=`
        <tr>
            <td style="border: 1px solid black;">${index}</td>
            <td style="border: 1px solid black;">${textInputs[0].value}</td>
            <td style="border: 1px solid black;">${textInputs[1].value}</td>
            <td style="border: 1px solid black;">${textInputs[2].value}</td>
        </tr>
    `;

    index++;

    for(let input of textInputs) {
        input.value = ''
    }
}