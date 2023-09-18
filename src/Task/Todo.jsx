import React, { useState } from "react";
const Todo = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);

  // it helps to check if the input is not empty then its helps to add new task object or array and also helps to complete the status of false
  const addTodo = () => {
    if (input.trim() !== "") {
      setTodos([...todos, { text: input, completed: false }]);
      setInput("");
    }
  };

  const deleteTodo = (index, isCompleted) => {
    if (isCompleted) {
      const newCompletedTodos = [...completedTodos];
      newCompletedTodos.splice(index, 1);
      setCompletedTodos(newCompletedTodos);
    } else {
      const newTodos = [...todos];
      newTodos.splice(index, 1);
      setTodos(newTodos);
    }
  };

  const toggleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);

    if (newTodos[index].completed) {
      const completedTodo = newTodos[index];
      setCompletedTodos([...completedTodos, completedTodo]);
      deleteTodo(index, false);
    }
  };
  return (
    <section
      style={{
        color: "white",
        display: "flex",
        // textAlign: "center",
        justifyContent: "center",
        marginTop: "123px",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          color: "black",
          padding: "25px 45px",
          borderRadius: "15px",
        }}
      >
        <h1>Things to Do:</h1>
        <ul
          style={{
            listStyleType: "none",
          }}
        >
          {todos.map((todo, index) => {
            return (
              <li key={index}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    position: "relative",
                  }}
                >
                  <h3
                    style={{
                      marginLeft: "-46px",
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={todo.completed}
                      onChange={() => toggleComplete(index)}
                    />
                    {todo.text}
                  </h3>
                  <div>
                    <button
                      onClick={() => deleteTodo(index, false)}
                      style={{
                        padding: "5px 8px",
                        border: "none",
                        backgroundColor: "gray",
                      }}
                    >
                      ✖
                    </button>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>

        <p>Done: {completedTodos.length}</p>
        <div>
          <ul style={{ listStyleType: "none" }}>
            {completedTodos.map((todo, index) => {
              return (
                <li key={index}>
                  <h3
                    style={{
                      display: "flex",
                      marginLeft: "-42px",
                      justifyContent: "space-between",
                    }}
                  >
                    <del> {todo.text}</del>
                    <button
                      onClick={() => deleteTodo(index, true)}
                      style={{
                        padding: "5px 8px",
                        border: "none",
                        backgroundColor: "gray",
                      }}
                    >
                      ✖
                    </button>
                  </h3>
                </li>
              );
            })}
          </ul>
        </div>
        <input
          type="text"
          placeholder="Add a new todo..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={addTodo}
          style={{
            backgroundColor: "blue",
            border: "none",
            color: "white",
            marginLeft: "5px",
            padding: "13px 20px",
            borderRadius: "5px",
          }}
        >
          ADD TASK
        </button>
      </div>
    </section>
  );
};

export default Todo;
