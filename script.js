var form = document.getElementById("form");
const inputValue = document.getElementById("input");
const taskList = document.getElementById("taskList");

let tasks = [];

form.addEventListener("submit", function(e){
    e.preventDefault();
    var newInput = input.value;
    addTask(newInput.value); 
    console.log(tasks);

    form.reset();
  });


function addTask(newtask){//newtask is the input
  const taskInstance = document.createElement("li");
  const checkButton = document.createElement("div");
  const taskText = document.createElement("span");//This is body of the task

  taskInstance.setAttribute("class", "");
  checkButton.setAttribute("class", "");
  taskText.setAttribute("class", "");

  taskText.innerText = newtask;//I'm passing the input into innerText(?)
  taskList.appendChild(taskInstance);
  taskInstance.appendChild(checkButton);
  taskInstance.appendChild(taskText);
  tasks.push(taskInstance);

}
