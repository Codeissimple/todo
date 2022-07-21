const form = document.getElementById("form");
const input = document.getElementById("input");
const taskList = document.getElementById("taskList");
const taskObject = document.querySelector("task-instance-class");

let tasks;
tasks = localStorage.getItem('localTasks') ?  JSON.parse(localStorage.getItem('localTasks')) : tasks = [];
console.log('tasks');
renderList(tasks);

form.addEventListener("submit", function(e){
    e.preventDefault();
    let newInput = input.value;
    tasks.push(createTask(newInput))
    localStorage.setItem('localTasks', JSON.stringify(tasks));
    renderList(tasks);
    form.reset();
  });

function createTask(newTask){
  return{
    taskName: newTask,
    completed: false,
  }
  }

  function renderList(array){



    taskList.innerHTML = "";
    array.forEach(function(element, index)  {
      let newEntry = `<li><input type='checkbox' ${element.completed ? 'checked' : null}>${element.taskName}<button></button></li>`;
      taskList.innerHTML += newEntry;
    });
    
  }

  taskList.addEventListener('click', function(e){
    let item = e.target.parentElement.innerText;
    
    
    tasks.forEach(element => {
     // console.log(item);
     // console.log(`element taskName ${element.taskName}`);
      if(element.taskName === item){
        element.completed = !element.completed;
        console.log('taskName: ' + element.taskName);
        localStorage.setItem('localTasks', JSON.stringify(tasks));
      }

    });
    console.log(tasks);
  })



  
  
