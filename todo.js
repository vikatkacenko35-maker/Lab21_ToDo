const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const taskCounter = document.getElementById("taskCounter");
let totalTasks = 0;

function updateCounter(){
    taskCounter.textContent = `Всего задач: ${totalTasks}`;
}
function createTackItem(text){
    const taskItem = document.createElement("li");
    const taskText = document.createElement("span");
    const buttonsDiv = document.createElement("div");
    const completeBtn = document.createElement("button");
    const deleteBtn = document.createElement("button");

    taskItem.className = "task-item";
    taskText.className = "task-text";
    buttonsDiv.className = "task-buttons";
    completeBtn.className = "complete-btn";
    deleteBtn.className = "delete-btn";

    taskText.textContent = text;
    completeBtn.textContent = "Выполнено";
    deleteBtn.textContent = "Удалить";

    buttonsDiv.appendChild(completeBtn);
    buttonsDiv.appendChild(deleteBtn);
    taskItem.appendChild(taskText);
    taskItem.appendChild(buttonsDiv);

    completeBtn.addEventListener("click",function (){
        taskText.classList.toggle("completed");
        completeBtn.textContent = taskText.classList.contains("completed")
        ? "Возобновит"
        : "Выполнено";
    });
    deleteBtn.addEventListener("click", function(){
        taskItem.remove();
        totalTasks--;
        updateCounter();
    });
    return taskItem;
}
function addNewTask(){
    const text = taskInput.ariaValueMax.trim();
    if( text === ""){
        alert("паожалуйтса, введите текст задачи");
        return;
    }
    const newTask = createTackItem(text);
    taskList.appendChild(newTask);
    totalTasks++;
    updateCounter();
    taskInput.value = "";
    taskInput.focus();
    addBtn.addEventListener("click", addNewTask);
    taskInput.addEventListener("keypress", function (event){
        if (event.key === "Enter"){
            addNewTask();
        }
    });
}
document.addEventListener("DOMContentLoaded", function () {
    const sampleTask = [
        "dfgf",
        "dfgfgfg",
        "dfgfdg",
    ];
    sampleTask.forEach(function(task){
        const newTask = createTackItem(task);
        taskList.appendChild(newTask);
        totalTasks++;
    });

    updateCounter();
    
})