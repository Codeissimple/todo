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
      newTask: input.value,
      checked: false,
      id: Date.now(),
    };

    tasks.push(newTask);


    console.log(tasks);
  }
}

function addTask(newTask) {

}
