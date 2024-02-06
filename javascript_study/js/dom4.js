const addBoxButton = document.querySelector(".add-box-button");

addBoxButton.onclick = () => {
    const boxContainer = document.querySelector(".box-container");
    const boxContainer2 = document.querySelector(".containers>.box-container:nth-of-type(2)");
    boxContainer.innerHTML += `
        <div class="box"></div>
    `;

    // boxContainer.removeChild();
    // boxContainer.appendChild();

    const boxList = document.querySelectorAll(".box");
    // boxList[0].onclick = () => {
    //     boxList[0].classList.add("red-box");
    //     let isBlueBox = boxList[0].classList.contains("blue-box");
    //     alert(isBlueBox);
    // }
    // boxList[1].onclick = () => {
    //     boxList[1].classList.add("blue-box");
    // }

    // 1) for 문
    // for(let i = 0; i < boxList.length; i++) {
    //     boxList[i].onclick = () => {
    //         if(boxList[i].classList.contains("blue-box") && boxList[i].classList.contains("box")) {
    //             boxList[i].classList.remove("blue-box");
    //             boxList[i].classList.add("red-box");
    //         } else if(boxList[i].classList.contains("red-box") && boxList[i].classList.contains("box")) {
    //             boxList[i].classList.remove("red-box");
    //         } else if(boxList[i].classList.contains("box")) {
    //             boxList[i].classList.add("blue-box");
    //         } 
    //     }
    // }


    // 2) 향상된 for 문
    for(let box of boxList) {
        box.onclick = () => {
            if(box.classList.contains("blue-box") && box.classList.contains("box")) {
                box.classList.remove("blue-box");
                box.classList.add("red-box");
            } else if(box.classList.contains("red-box") && box.classList.contains("box")) {
                boxContainer2.appendChild(box);
                boxContainer.removeChild(box);
            } else {
                box.classList.add("blue-box");
            } 
        }
    }

    // 3) count
    // for(let box of boxList) {
    //     let count = 0;
    //     box.onclick = () => {  
    //         if(count === 0) {
    //             box.classList.add("blue-box");
    //             count++;
    //         } else if(count === 1) {
    //             box.classList.remove("blue-box");
    //             box.classList.add("red-box");
    //             count++;
    //         } else {
    //             box.classList.remove("red-box");
    //             count = 0;
    //         }
    //     }
    // }

};

