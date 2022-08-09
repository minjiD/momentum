const toDoForm = document.getElementById("todo-form");
// const toDoInput = document.querySelector("#todo-form input");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

function handleToDoSubmit(event) {
    event.preventDefault();
    // console.log(toDoInput.value);
    const newToDo = toDoInput.value; //새로운 변수에 input의 값 복사
    toDoInput.value = ""; //empty input value 
}

toDoForm.addEventListener("submit", handleToDoSubmit);