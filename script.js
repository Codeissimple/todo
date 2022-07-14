var form = document.getElementById("form");
const inputValue = document.getElementById("input");
const taskList = document.getElementById("taskList");
const taskObject = document.querySelector("task-instance-class");

let tasks = [];

form.addEventListener("submit", function(e){
    e.preventDefault();
    var newInput = input.value;
    addTask(newInput); //needs input validation
    form.reset();
  });


function addTask(newTask){
    let newEntry = document.createElement("li");
    let completeButton = document.createElement("input");
    let taskText = newTask;
    let deleteButton = document.createElement("button");

    completeButton.setAttribute(`type`, `checkbox`);

    newEntry.innerHTML = newTask;
    completeButton.innerHTML = "Check";
    deleteButton.innerHTML = "X";
    
    newEntry.appendChild(deleteButton);
    newEntry.prepend(completeButton);

    taskList.appendChild(newEntry);

    tasks.push(newEntry);
    console.log(tasks);


    deleteButton.addEventListener('click', function(e){
      console.log(e.target);
      e.target.parentElement.remove();
    })

  }
