const toDoForm = document.getElementById("todo-form");
// const toDoInput = document.querySelector("#todo-form input");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

// const toDos = []; //application이 시작될 때 toDos 배열이 항상 비어있기 때문에 localStorage에 저장된 toDos가 덮어 씌워진다.
let toDos = [];

//toDos 배열을 localStorage에 넣는/저장하는 역할
function saveToDos() { 
    //localStorage는 배열을 저장할 수 없고 텍스트만 가능
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //-> 리스트를 불러올 때를 위해서 JSON.stringify()을 사용하여 배열형태의 문자열로 저장
    //JSON.stringify()는 JavaScript object, array 등 어떤 코드 간에 그것을 string으로 만들어준다.
    // -> 값을 string으로 저장하고 싶을 때 이것을 많이 사용한다. 
    // JSON.parse()를 사용하여 단순 string을 object, 배열형태로 변환
    //newToDo들만 localStorage에 저장하고 있다. 즉, 가지고 있던 toDos의 이전 복사본을 잊어버리고 있다는 의미
}

function deleteToDo(event) {
    // console.log(event);
    // console.dir(event.target.parentElement); //parentNode, parentElement -> 클릭된 element의 부모
    //event.target은 클릭된 HTML element
    // -> 모든 HTML element에는 하나 이상의 property가 있다.
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); //filter의 toDo는 DB에 있는 요소 중 하나, 그래서 이 함수는 DB에 있는 모든 것과 함께 실행
    // -> 클릭한 li의 id와 다른 toDo는 남겨둔다.
    // -> li.id의 type이 string이여서 삭제되지 않아 parseInt()로 타입변환하여 삭제
    saveToDos(); //localStorage에 변경된 값으로 다시 저장
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id; //li태그의 id 생성
    const span = document.createElement("span");
    // span.innerText = newTodo; //들어온 값을 바로 span으로 생성
    span.innerText = newTodo.text; //들어온 오브젝트의 text를 바로 span으로 생성
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span); //append는 맨 마지막에 놓여져야 한다.
    li.appendChild(button);  
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    // console.log(toDoInput.value);
    const newToDo = toDoInput.value; //새로운 변수에 input의 값 복사
    toDoInput.value = ""; //empty input value 
    const newToDoObj = {
        text: newToDo,
        id: Date.now(),
    }
    // toDos.push(newToDo); //입력받은 텍스트를 배열에 저장
    toDos.push(newToDoObj); //입력받은 텍스트를 아이디와 함께 오븢젝트 형태로 배열에 저장
    // paintToDo(newToDo); //입력받은 텍스트를 화면에 출력
    paintToDo(newToDoObj); //화면에 출력
    saveToDos(); //입력받은 텍스트를 localStorage 저장
}

toDoForm.addEventListener("submit", handleToDoSubmit);

//forEach TEST function
function sayHello(item) {
    console.log("this is the turn of ", item);
}

//localStorage에 저장된 toDos를 가지고 오는 기능
const savedToDos = localStorage.getItem(TODOS_KEY);
// console.log(savedToDos);
if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    // console.log(parsedToDos);

    //array에 있는 각각의 item에 대해서 function을 실행
    // parsedToDos.forEach(sayHello); //forEach TEST
    // -> 저장된 item을 하나씩 가져와 출력한다.
    // -> JavaScript가 저장된 array의 각 item을 가지고 실행시킨다.
    // parsedToDos.forEach((item) => console.log("this is the turn of ", item)); //forEach TEST, arrow function
    toDos = parsedToDos; //localStorage에 toDo들이 있다면 toDos에 파싱한 값을 넣어서 전에 있던 값들을 복원
    parsedToDos.forEach(paintToDo); //JavaScript가 텍스트(item)를 paintToDo에 전달해준다.
}

//filter() TEST function
//지우고 싶은 item을 제외하고 새 array를 생성
function doFilter(item) {
    // return true; //array의 item을 유지하고 싶으면 true 리턴
    // return false; //array item X
    return item !== 3; //item의 값이 3이 아닌 item만 return
}

//filter() TEST
// [1, 2, 3, 4].filter(doFilter); //forEach와 방식이 비슷