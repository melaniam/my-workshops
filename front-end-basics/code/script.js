const initApp = () => {
    const addTodoButton = document.getElementById("add");

    const addFormElement = document.getElementById("add-todo-form");
    addTodoButton.addEventListener("click", () =>{
        addFormElement.style.display = "block";
        addTodoButton.style.display = "none";
    });
};

initApp();