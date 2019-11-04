const initApp = () => {
    const existingTodos = getTodos();
    if (existingTodos && existingTodos.length > 0) {
        console.log("todos in local storage", existingTodos);
        existingTodos.forEach(todo => renderTodo(todo, todoStateFunctions));
    }

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
        // when creating the todo item, it is not yet done
        const todoObject = { text: todoText, done: false }; 
        renderTodo(todoObject, todoStateFunctions);

        toggleTodoForm(addFormElement, addTodoButton, false);
    });
};

initApp();

function toggleTodoForm(addFormElement, addTodoButton, showForm) {
    const input = addFormElement.querySelector("input");
    input.value = "";
    addFormElement.style.display = showForm ? "block" : "none";
    addTodoButton.style.display = showForm ? "none" : "block";
    if (showForm) {
        input.focus();
    }
}
  