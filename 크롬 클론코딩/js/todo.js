const todoForm=document.querySelector("#todo-form");
const todoInput=todoForm.querySelector("input");
const todoList=document.querySelector("#todo-list");

let todos=[]
const saveTodo=function(){
  localStorage.setItem("todos", JSON.stringify(todos))
}

const deleteTodo=function(event){
  const li=event.target.parentElement
  li.remove()
  todos=todos.filter((todo)=>todo.id!==parseInt(li.id))
  saveTodo()
}

const paintTodo=function(newTodoObj){
  const span=document.createElement("span");
  span.innerText=newTodoObj.text;
  const button=document.createElement("button")
  button.innerText="❌"
  const li=document.createElement("li");
  li.id=newTodoObj.id
  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li)
  button.addEventListener("click", deleteTodo)
}

const handleSubmit=function(event){
  event.preventDefault()
  const newTodo=todoInput.value
  todoInput.value=""
  const newTodoObj={text:newTodo, id:Date.now()}
  todos.push(newTodoObj)
  paintTodo(newTodoObj)
  saveTodo()
}

todoForm.addEventListener("submit", handleSubmit)

const savedTodos=localStorage.getItem("todos")
if(savedTodos!==null){
  const parsedTodos=JSON.parse(savedTodos)
  todos=parsedTodos
  parsedTodos.forEach(paintTodo)
}