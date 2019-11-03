const todos = []; // array of objects with keys: text, done

const addTodo = newTodo => {
    todos.push(newTodo);
    console.log("addTodo", newTodo, todos); // just for testing
};
