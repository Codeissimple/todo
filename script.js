var form = document.getElementById("form");
const inputValue = document.getElementById("input");
const taskList = document.getElementById("taskList");

let tasks = [];

form.addEventListener("submit", function(e){
    e.preventDefault();
    var newInput = input.value;
    addTask(newInput.value);  //Here I take the user input.
    console.log(input.value);
    console.log("button clicked");
    form.reset();
  });
//Here I am pasting the user input into the addTask() function, but 
//it reads "null"(?)
function addTask(newtask){
  const taskInstance = document.createElement("li");
  const checkButton = document.createElement("div");
  const taskText = document.createElement("span");

  taskInstance.setAttribute("class", "");
  checkButton.setAttribute("class", "");
  taskText.setAttribute("class", "");

  taskText.innerText = newtask;
  taskList.appendChild(taskInstance);
  taskInstance.appendChild(checkButton);
  taskInstance.appendChild(taskText);

}
