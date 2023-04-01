const toDoForm= document.querySelector("#todo-form");
const toDoList=document.querySelector("#todo-list")
const toDoInput=toDoForm.querySelector("input");

function paintToDo(newToDo){
    const li=document.createElement("li");
    const span=document.createElement("span");
    span.innerText=newToDo;  
    const button=document.createElement("button");
    button.innerText="❌"
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);  
    button.addEventListener("click", handleDeleteToDo)
}

function handleDeleteToDo(event) {
event.target.parentElement.remove();
}

function handleToDoSubmit(event) {
event.preventDefault();
const newToDo=toDoInput.value;
toDoInput.value="";
paintToDo(newToDo);
}

toDoForm.addEventListener("submit", handleToDoSubmit)
