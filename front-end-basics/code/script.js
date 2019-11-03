const initApp = () => {
    const todoListElement = document.getElementById("todo-list");
    const addTodoButton = document.getElementById("add");

    const addFormElement = document.getElementById("add-todo-form");
    addTodoButton.addEventListener("click", () =>{
        toggleTodoForm(addFormElement, addTodoButton, true);
    });

    const saveButton = addFormElement.querySelector("button");
    saveButton.addEventListener("click", (event) => {
        // do not submit the form -> do not refresh the page
        event.preventDefault();

        // get form data
        const todoText = addFormElement.querySelector("input").value;

        // render element
        const todoElement = document.createElement("li");
        todoElement.innerText = todoText;
        todoListElement.appendChild(todoElement);

        toggleTodoForm(addFormElement, addTodoButton, false);
    });
};

initApp();

function toggleTodoForm(addFormElement, addTodoButton, showForm) {
    addFormElement.querySelector("input").value = "";
    addFormElement.style.display = showForm ? "block" : "none";
    addTodoButton.style.display = showForm ? "none" : "block";
}
  