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
    completeButton === false;

    newEntry.innerHTML = newTask;
    completeButton.innerHTML = "Check";
    deleteButton.innerHTML = "X";
    
    newEntry.appendChild(deleteButton);
    newEntry.prepend(completeButton);

    taskList.appendChild(newEntry);

    tasks.push({"taskName": newTask, "isCompleted": false});
    console.log(tasks);

    completeButton.addEventListener('click', function(e){
      if(newEntry.classList.contains("completed")){
        newEntry.classList.remove('completed');
      }else{
        newEntry.setAttribute('class', 'completed');
      }
    })

    deleteButton.addEventListener('click', function(e){
      console.log(e.target);
      e.target.parentElement.remove();
      
    })
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  
  
