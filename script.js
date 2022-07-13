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
  const myTask = new Object();

  myTask.text = newTask;
  myTask.id = Date.now() + Math.random();
  myTask.completed = false;

  tasks.push(myTask);
  console.log(tasks);

}

