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
  

  taskInstance.setAttribute("class", "");
  checkButton.setAttribute("type", "checkbox");
  taskText.setAttribute("class", "task-body");

  taskText.innerText = newTask;

  taskInstance.appendChild(checkButton);
  taskInstance.appendChild(taskText);
  taskList.appendChild(checkButton);
  taskList.appendChild(taskText);
  tasks.push(taskInstance);

}
