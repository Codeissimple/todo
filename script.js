const form = document.getElementById("form");
const input = document.getElementById("input");
const taskList = document.getElementById("task-container");

let tasks = [];

form.addEventListener("submit", function(e){
    e.preventDefault();
    addTask(input.value);
    console.log("button clicked");
    form.reset();
  });

function addTask(){
  
}
