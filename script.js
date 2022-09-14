//minimum of what I need to grab from DOM
const myForm = document.querySelector('form');
const myTaskList = document.querySelector('tasklist');
const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

const localStorageTasks = JSON.parse(localStorage.getItem(''))

//separate eventListeners from the functions to simplify code
myForm.addEventListener('submit', addTask);


//Calling function that's going to display tasks
renderTasks();

function addTask(element) {
  element.preventDefault();
  const taskText = this.querySelector('[name=input]').value;
  const task = {
    taskText, 
    done:false, 
    ID: Date.now()
  }
  console.log(taskText);

  tasks.push(task);
  push2Local();
  renderTasks();

  this.reset();

}

function push2Local() {
  localStorage.setItem('tasks',JSON.stringify(localStorageTasks));
}

function renderTasks() {
  let taskArray = localStorage.getItem('tasks',JSON.stringify(localStorageTasks));
  
  let taskDisplayUL = document.getElementById('tasklist');


  tasks.forEach(display);
  function display(element) {
    let newEntry = `<li><input type='checkbox' ${element.completed ? 'checked' : null}>${element.taskName}<button class='buttonDelete'>X</button></li>`;
  console.log(newEntry);      
    }
    taskDisplayUL.append(newEntry);



  };


  
      


