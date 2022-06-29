var form = document.getElementById("form");
const inputValue = document.getElementById("input");
const taskList = document.getElementById("taskList");

let tasks = [];

form.addEventListener("submit", function(e){
    e.preventDefault();
    var newInput = input.value;
    addTask(newInput); 
    console.log(tasks);

    form.reset();
  });


function addTask(newTask){
  let taskInstance = document.createElement("li");
  let checkButton = document.createElement("INPUT");
  let taskText = document.createElement("span");
  let deleteButton = document.createElement("button");

  taskInstance.setAttribute("class", "");
  
  taskText.setAttribute("class", "task-body");
  checkButton.setAttribute("type", "checkbox");
  checkButton.setAttribute("class", "");
  deleteButton.setAttribute("class", "");

  taskText.innerText = newTask;

  taskInstance.appendChild(checkButton);
  taskInstance.appendChild(taskText);
  taskList.appendChild(checkButton);
  taskList.appendChild(taskText);
  taskList.appendChild(deleteButton);
  tasks.push(taskInstance);

}
