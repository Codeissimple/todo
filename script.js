const form = document.getElementById("form");
const input = document.getElementById("input");
const taskList = document.getElementById("taskList");
const taskObject = document.querySelector("task-instance-class");

let tasks = [];

form.addEventListener("submit", function(e){
    e.preventDefault();
    let newInput = input.value;
    tasks.push(createTask(newInput))
    form.reset();
    //console.log(tasks);
    renderList();
  });


function createTask(newTask){
  return{
    taskName: newTask,
    completed: false,
  }
  }

  function renderList(){
    taskList.innerHTML = "";
    tasks.forEach(function(element, index)  {
      let newEntry = `<li> <input type='checkbox'> ${element.taskName}<button></button></li>`;
      taskList.innerHTML += newEntry;
    });
    
  }

  taskList.addEventListener('click', function(e){
    let item = e.target.parentElement.innerText;
    console.log("item: " + item);
    
    tasks.forEach(element => {

      if(element.taskName === item){
        element.completed = !element.completed;
        console.log('taskName: ' + element.taskName);
      }

    });
    //console.log(tasks);
  })



  
  
