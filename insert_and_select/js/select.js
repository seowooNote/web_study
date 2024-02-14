async function handleSearchClick() {
    try {
        // 조회라 보내줄 데이터가 없기 때문에 fetch 에 주소만 입력하면 됨(fetch는 default가 get 요청)
        const response = await fetch("http://localhost:8080/insert_and_select/data/list");
        if(!response.ok) {
            throw await response.json();
        }
        const responseData = await response.json();
        // console.log(responseData);
        // console.log(responseData.data);
        const studentList = document.querySelector(".student-list");
        studentList.innerHTML = "";

        for(let student of responseData.data) {
            studentList.innerHTML += `
                <li>studentId: ${student.id}</li>
                <li>studentName: ${student.name}</li>
                <li>studentAge: ${student.age}</li>
            `;
        }
    } catch (error) {
        console.log(error);
    }
}