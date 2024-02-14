const productInputs = document.querySelectorAll(".product-inputs");

async function handleAddClick() {
    // 1) 객체 생성(해당 데이터값 받아서)
    let productData = {
        name : productInputs[0].value,
        price : productInputs[1].value,
        size : productInputs[2].value
    }

    console.log(JSON.stringify(productData));

    // 2) 생성한 객체 JSON 형식으로 변환
    // const jsonProductData = JSON.stringify(productData);

    // 3) request 세팅
    // const data = {
    //     method: "POST",
    //     headers: {
    //         "Content-Type" : "Application/json"
    //     },
    //     body : jsonProductData
    // }

    // 4) request 요청
    try {
        const response = await fetch("http://localhost:8080/product/product", {
            method: "POST",
            headers: {
                "Content-Type" : "Application/json"
            },
            body : JSON.stringify(productData)
        });

        if(!response.ok) {
            throw await response.json();
        }
    } catch (error) {
        alert(error.errorMessage);
    }

    
}