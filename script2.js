const form = document.getElementById("form");
const input = document.getElementById("input");
const taskList = document.getElementById("taskList");
const taskObject = document.querySelector("task-instance-class");
let tasks;
tasks = localStorage.getItem('localTasks') ?  JSON.parse(localStorage.getItem('localTasks')) : tasks = [];
//console.log('tasks');
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
    id: Date.now()
  }
  }
  function renderList(array){
    taskList.innerHTML = "";
    array.forEach(function(element, index)  {
      let newEntry = `<li><input type='checkbox' class='checkBox' ${element.completed ? 'checked' : null}>${element.taskName}<button class='buttonDelete'>X</button></li>${element.id}`;
      taskList.innerHTML += newEntry;
      
    });
  }
  taskList.addEventListener('click', event => {
    if (event.target.classList.contains('checkBox')) {
      const itemKey = event.target.parentElement;
      //toggleDone(itemKey);
      console.log(itemKey);
    }
    
    if (event.target.classList.contains('buttonDelete')) {
      const itemKey = event.target.parentElement;
      //deleteTodo(itemKey);
      console.log(itemKey);
    }
  });


  function deleteTodo(key) {
    const index = taskList.findIndex(item => item.id === Number(key));
    const todo = {
      deleted: true,
      ...taskList[index]
    };
    tasks = tasks.filter(item => item.id !== Number(key));
    renderTodo(todo);
  }

/*
  taskList.addEventListener('click', function(e){
    let item = e.target.parentElement.innerText;
    
    tasks.forEach((element,index) => {
      //console.log(item, element.taskName);
      if(element.taskName === item){
        element.completed = !element.completed;
        if(e.target.classList.contains('buttonDelete')){
          tasks.splice(index, 1);
          console.log(`splice ${tasks}`);
  //need to render again after the delete button.
        }
        localStorage.setItem('localTasks', JSON.stringify(tasks));
      }
    });
  
    //console.log(tasks);
  })
  */
