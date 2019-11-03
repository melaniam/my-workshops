const todos = []; // array of objects with keys: text, done

const addTodo = newTodo => {
    todos.push(newTodo);
    console.log("addTodo", newTodo, todos); // just for testing
};

const updateTodo = newTodo => {
    const oldTodo = todos.find(t => t.text === newTodo.text);
    if (oldTodo) {
        if (oldTodo.done !== newTodo.done) {
            oldTodo.done = newTodo.done;
        } else {
            console.log("todo has not changed");
        }
    } else {
        console.log("todo not found");
    }

    console.log("updateTodo", newTodo, todos); // just for testing
};

const deleteTodo = todoToDelete => {
    const index = todos.findIndex(t => t.text === todoToDelete.text);
    if (index === -1) {
        console.log("todo not found");
    } else {
        todos.splice(index, 1);
    }

    console.log("deleteTodo", todoToDelete, todos); // just for testing
};

const todoStateFunctions = { addTodo, updateTodo, deleteTodo };
