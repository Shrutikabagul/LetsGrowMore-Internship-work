const taskInput = document.getElementById("task");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);
taskList.addEventListener("click", deleteTask);

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const li = document.createElement("li");
        li.innerHTML = `
            <span>${taskText}</span>
            <span class="delete-btn">Delete</span>
        `;
        taskList.appendChild(li);
        taskInput.value = "";
    }
}

function deleteTask(event) {
    if (event.target.classList.contains("delete-btn")) {
        const li = event.target.parentElement;
        taskList.removeChild(li);
    }
}
