const form = document.getElementById("form");
const input = document.getElementById("input");
const taskList = document.getElementById("task-container");

let tasks = [];

form.addEventListener("submit", function(e){
    e.preventDefault();
    newTask();
    console.log("button clicked");
    form.reset();
  });



let newTask = () => {
    newTask["text"] = input.value;
    tasks.push("newTask");
    console.log(tasks);
};