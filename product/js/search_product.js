const productList = document.querySelector(".product-list");

async function handleSearchClick() {
    try {
        const response = await fetch("http://localhost:8080/product/products");
        
        const responseData = await response.json(); // map
        // console.log(responseData);

        productList.innerHTML = "";

        // back 에서 map 사용시 (key : data 에 접근)
        for(let product of responseData.data) {
            productList.innerHTML += `
                <tr>
                    <td>${product.id}</td>
                    <td>${product.name}</td>
                    <td>${product.price} 원</td>
                    <td>${product.size}</td>
                </tr>
            `;
        }

        // back 에서 map 없이 사용시 const responseData = await response.json(); 의 await 꼭 서야됨 -> 안쓰면 프로미스 타입의 리턴값인 배열 리스트를 가져오지 못하기 때문
        // for(let product of responseData) {
        //     productList.innerHTML += `
        //         <tr>
        //             <td>${product.id}</td>
        //             <td>${product.name}</td>
        //             <td>${product.price} 원</td>
        //             <td>${product.size}</td>
        //         </tr>
        //     `;
        // }
    } catch (error) {
        console.log(error);
    }

}