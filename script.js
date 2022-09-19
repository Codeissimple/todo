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
    ID: Date.now()
  }

//creating li element
  let newEntry = document.createElement('li');
    newEntry.innerHTML = task.taskText;
    newEntry.done = false;
    newEntry.ID = task.ID;

//creating checkbox element
  let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

//creating delete button
  let deleteButton = document.createElement('button')
    deleteButton = 'X';


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

console.log(localStorage.getItem('tasks'));

  if(localStorage.getItem('tasks') === null) {
      tasks = [];
  } else {
      taskArray = JSON.parse(localStorage.getItem('tasks'));
  
      taskArray.forEach(task => {
          console.log(task.taskText)
          let newEntry = document.createElement('li');
          newEntry.innerHTML = task.taskText;
          newEntry.done = false;
          newEntry.ID = task.ID;
      
      
      //creating checkbox element
        let checkbox = document.createElement('input');
          checkbox.type = 'checkbox';
      
      //creating delete button
        let deleteButton = document.createElement('button')
          deleteButton = 'X';
          deleteButton.classList.add('delButton');
      
      
      // putting task visuals together
        newEntry.prepend(checkbox);
        newEntry.append(deleteButton);
      //-----------------------
        //let newEntry = `<li><input type='checkbox'>${task.taskText}<button class='buttonDelete'>X</button></li>`;
        //console.log(newEntry); 
      //-----------------------
        myTaskList.appendChild(newEntry);
      });
}
};

const li = document.getElementById('li');
console.log(li);

myTaskList.addEventListener('click', function deleteTask(){
  console.log(this);
}); 


  
      


