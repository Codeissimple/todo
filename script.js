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

//creating checkbox element
  let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

//creating delete button
  let deleteButton = document.createElement('button')
    //deleteButton.innerText = 'X';
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

//console.log(localStorage.getItem('tasks'));

  if(localStorage.getItem('tasks') === null) {
      tasks = [];
  } else {
      taskArray = JSON.parse(localStorage.getItem('tasks'));
  
      taskArray.forEach(task => {
          //console.log(task.taskText)
          let newEntry = document.createElement('li');
          newEntry.innerHTML = task.taskText;
          newEntry.done = false;
          newEntry.setAttribute('id',task.id);
      
      
      //creating checkbox element
        let checkbox = document.createElement('input');
          checkbox.type = 'checkbox';
          
      
      //creating delete button
      let deleteButton = document.createElement('button')
      //deleteButton.innerText = 'X';
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

const delButton = document.getElementsByClassName('delButton');
//console.log(delButton);



myTaskList.addEventListener("click", function(event) {

    let IDinterest = parseInt(event.target.parentNode.id, 10);
      console.log(IDinterest);
      console.log('tasks reachable');
    for(i = 0; i < tasks.length; i++){
      console.log(tasks[i]);
      if(IDinterest === tasks[i].id){
        //tasks.remove(tasks[i]);
        console.log('aye, aye ', tasks[i]);
      }
    }

    const targetTagToLowerCase = event.target.tagName.toLowerCase();
  if (targetTagToLowerCase === "li") {
    event.target.style.textDecoration = "line-through";
    console.log(target);
  } else if (targetTagToLowerCase === "button") {
    event.target.parentNode.remove();

    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
});




