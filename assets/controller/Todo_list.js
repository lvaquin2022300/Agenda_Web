
document.addEventListener("DOMContentLoaded", function () {
    const todoListContainer = document.getElementById("todoList");

    function addTask(description, priority) {
        const taskElement = document.createElement("div");
        taskElement.className = "task";

        const priorityElement = document.createElement("span");
        priorityElement.className = "priority";
        priorityElement.textContent = `Prioridad: ${priority}`;

        const descriptionElement = document.createElement("span");
        descriptionElement.textContent = description;

        const deleteButton = document.createElement("button");
        deleteButton.className = "btn";
        deleteButton.textContent = "Eliminar";
        deleteButton.addEventListener("click", function () {
            todoListContainer.removeChild(taskElement);
        });

        taskElement.appendChild(priorityElement);
        taskElement.appendChild(descriptionElement);
        taskElement.appendChild(deleteButton);

        todoListContainer.appendChild(taskElement);
    }

    function addNewTask() {
        const description = prompt("Ingrese la descripción de la tarea:");
        const priority = prompt("Ingrese la prioridad de la tarea:");
        addTask(description, priority);
    }

    const addButton = document.getElementById("addButton");
    addButton.addEventListener("click", addNewTask);

    addTask("Hacer la compra", "Alta");

    addTask("Estudiar para el examen", "Media");

    addTask("Llamar al médico", "Baja");
});