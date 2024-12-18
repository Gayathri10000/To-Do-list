console.log()
let tasks=JSON.parse(localStorage.getItem('task')) || []

function displayTasks(){
    const Tasklist = document.getElementById('TaskList');
    TaskList.innerHTML = '';

    tasks.forEach((task,index) => {
        Tasklist.innerHTML +=`
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <div>
                <h4>${task.title}</h4>
                <p>${task.description}</p>
            </div>
            <div>
                <button onclick="editTask(${index})" class="btn btn-warning btn-sm btn-outline-info">Edit</button>
                <button onclick="deleteTask(${index})" class="btn btn-danger btn-sm btn-outline-danger">Delete</button>
            </div>
        </li>`;
    });
}

function addTask(){
    const title = document.getElementById('Task Name').value;
    const description = document.getElementById('Task Description').value;

    if (title.trim()){
        tasks.push({title,description});
        localStorage.setItem('task',JSON.stringify(tasks));
        displayTasks();
    }
    else{
        alert("Task Title is Requried!");
    }
}
function deleteTask(index){
    tasks.splice(index,1);
    localStorage.setItem('task',JSON.stringify(tasks));
    displayTasks();
}
function editTask(index){
    const task=tasks[index];
    document.getElementById('Task Name').value = task.title;
    document.getElementById('Task Description').value = task.description;

    deleteTask(index);
}
document.getElementById('AddTask').addEventListener('click',addTask);
window.onload = displayTasks;
