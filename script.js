const form = document.getElementById("form");
const input = document.getElementById("input");
const taskList = document.getElementById("taskList");

let tasks = [];

form.addEventListener("submit", function(e){
    e.preventDefault();
    addTask(input.value);
    console.log("button clicked");
    form.reset();
  });

function addTask(newTask){
  const taskInstance = document.createElement("li");
  const checkButton = document.createElement("div");
  const taskText = document.createElement("span");

  taskInstance.setAttribute("class", "");
  checkButton.setAttribute("class", "");
  taskText.setAttribute("class", "");

  taskText.innerText = newTask;
  taskList.appendChild(newTask);
  taskInstance.appendChild(checkButton);
  taskInstance.appendChild(taskText);

}
