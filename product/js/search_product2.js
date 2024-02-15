async function handleSearchClick() {
    try {
        const response = await fetch("http://localhost:8080/product/products");
        const responseData = await response.json();
        console.log(responseData);

        const productList = document.querySelector(".product-list");
        productList.innerHTML = "";

        for(let product of responseData) {
            productList.innerHTML += ProductInfoTr(product);
        }
    } catch (error) {
        console.log(error);
    }
}

function ProductInfoTr({ productId, productName, productPrice ,productSize }) {
    return `
        <tr>
            <td>${productId}</td>
            <td>${productName}</td>
            <td>${productPrice}</td>
            <td>${productSize}</td>
        </tr>
    `;
}