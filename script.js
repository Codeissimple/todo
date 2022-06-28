const form = document.getElementById("form");
const input = document.getElementById("input");
const taskList = document.getElementById("task-container");

let tasks = [];

form.addEventListener("submit", function(e){
    e.preventDefault();
    addTask();
    console.log("button clicked");
    form.reset();
  });

function addTask(){
  if(input.value != ""){
    const newTask = {
      text,
      checked: false,
      id: Date.now(),
    };

    console.log(tasks);
  }
}

