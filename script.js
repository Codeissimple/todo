const myForm = document.querySelector('form');
const myTaskList = document.getElementById('taskList');
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

//separate eventListeners from the functions to simplify code
myForm.addEventListener('submit', addTask);

//Calling function that's going to display tasks
window.onload = renderTasks();

function addTask(element) {
  element.preventDefault();
  const taskText = this.querySelector('[name=input]').value;
  const task = {
    taskText, 
    done: false, 
    id: Date.now()
  }

//creating li element
  let newEntry = document.createElement('li');
    newEntry.innerHTML = task.taskText;
    newEntry.done = false;
    newEntry.setAttribute('id',task.id);

//creating delete button
  let deleteButton = document.createElement('button')
    deleteButton.classList.add('delButton');

// putting task visuals together
  newEntry.prepend(checkbox);
  newEntry.append(deleteButton);

  myTaskList.appendChild(newEntry);
  tasks.push(task);
  push2Local();
  console.log(tasks);
  this.reset();   
}

function push2Local() {
  console.log(tasks);
  localStorage.setItem('tasks',JSON.stringify(tasks));
  console.log('pushed task to local');
}

function renderTasks() {
console.log('RENDER');
let taskArray = localStorage.getItem('tasks',JSON.stringify(tasks));

  if(localStorage.getItem('tasks') === null) {
      tasks = [];
  } else {
      taskArray = JSON.parse(localStorage.getItem('tasks'));
  
      taskArray.forEach(task => {

          let newEntry = document.createElement('li');
          newEntry.innerHTML = task.taskText;
          newEntry.done = false;
          newEntry.setAttribute('id',task.id);
          
      //creating delete button
      let deleteButton = document.createElement('button')
      deleteButton.classList.add('delButton');
      
      // putting task visuals together
        newEntry.append(deleteButton);

        myTaskList.appendChild(newEntry);
      });
}
};

const delButton = document.getElementsByClassName('delButton');

myTaskList.addEventListener("click", function (event) {
  const targetTagToLowerCase = event.target.tagName.toLowerCase();
  if (targetTagToLowerCase === "li") {
      event.target.style.textDecoration = "line-through";
  } else if (targetTagToLowerCase === "button") {
      event.target.parentNode.remove();
      let IDinterest = Number(event.target.parentNode.id);
      console.log(IDinterest);
      for (let i = 0; i < tasks.length; i++) {
          if (IDinterest === tasks[i].id) {
              tasks.splice(i, 1);
              console.log('aye')
          }
      }
      localStorage.setItem("tasks", JSON.stringify(tasks));
  }
});




