const form = document.getElementById("form");
const input = document.getElementById("input");
const taskList = document.getElementById("task-container");
let tasks = {};

form.addEventListener("submit", function(e){
    e.preventDefault();
    console.log("button clicked");
  });


/*

let newTask = () => {
    newTask["text"] = input.value;
    console.log(newTask);
};
*/