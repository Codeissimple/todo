var form = document.getElementById("form");
const inputValue = document.getElementById("input");
const taskList = document.getElementById("taskList");
const taskObject = document.querySelector("task-instance-class");

let tasks = [];

form.addEventListener("submit", function(e){
    e.preventDefault();
    var newInput = input.value;
    addTask(newInput); //needs input validation
    console.log(tasks);

    form.reset();
  });


function addTask(newTask){
  function addItem() {
    let newEntry = document.createElement("li");
    let completeButton = document.createElement("button");
    let taskText = newTask;
    let deleteButton = document.createElement("button");


    newEntry.innerHTML = newTask;
    completeButton.innerHTML = "Check";
    deleteButton.innerHTML = "X";
    
    newEntry.appendChild(completeButton, deleteButton);

    taskList.appendChild(newEntry);

    

    tasks.push(newEntry);
    console.log(tasks);


  }
}