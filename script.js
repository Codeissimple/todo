var form = document.getElementById("form");
const inputValue = document.getElementById("input");
const taskList = document.getElementById("taskList");

let tasks = [];

form.addEventListener("submit", function(e){
    e.preventDefault();
    var newInput = input.value;
    addTask(newInput); //needs input validation
    console.log(tasks);

    form.reset();
  });


function addTask(newTask){
  let taskInstance = document.createElement("li");
  let checkButton = document.createElement("INPUT");
  let taskText = document.createElement("span");
  let deleteButton = document.createElement("button");
  let delDiv = document.createElement("div");
  let taskDiv = document.createElement("div");
  let taskContainer = document.createElement("div");

  taskInstance.setAttribute("class", "");
  
  taskText.setAttribute("class", "task-body");
  checkButton.setAttribute("type", "checkbox");
  checkButton.setAttribute("class", "pointer");
  deleteButton.setAttribute("class", "delButton");
  delDiv.setAttribute("class", "delDiv");
  taskDiv.setAttribute("class", "taskDiv");
  taskContainer.setAttribute("class", "taskContainer");
  
  deleteButton.innerText = "X";
  taskText.innerText = newTask;

  taskDiv.appendChild(checkButton);
  taskDiv.appendChild(taskText);
  delDiv.appendChild(deleteButton);
  taskContainer.appendChild(taskDiv);
  taskContainer.appendChild(delDiv);
  taskList.appendChild(taskContainer);

  tasks.push(taskInstance);
}
