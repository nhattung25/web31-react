import { useState } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "./features/counter/counter.slice";
import { todoActions } from "./features/todo/todo.slice";

function App() {
  const counter = useSelector((state) => state.counter);
  const { filter, todos } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const title = e.target.elements.title.value;

    // console.log(title);
    dispatch(todoActions.create({ title }));
    e.target.elements.title.value = "";
  };

  const handleFilterChange = (e) => {
    const filter = e.target.value;
    dispatch(todoActions.filter({ filter }));
  };

  const filteredTodos =
    filter == "all"
      ? todos
      : filter === "active"
      ? todos.filter((item) => !item.completed)
      : todos.filter((item) => item.completed);

  return (
    <div>
      {/* <div>
        <h1>Counter App</h1>
        <button onClick={() => dispatch(counterActions.decrement())}>-</button>
        <span>{counter.value}</span>
        <button onClick={() => dispatch(counterActions.increment())}>+</button>
      </div> */}

      <div>
        <h1>TODO APP</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" name="title" />
          <button>Create</button>
        </form>

        <form onChange={handleFilterChange}>
          <label>
            <input name="filter" type="radio" value="all" />
            All
          </label>
          <label>
            <input name="filter" type="radio" value="active" />
            Active
          </label>
          <label>
            <input name="filter" type="radio" value="inactive" />
            Inactive
          </label>
        </form>
        <ul>
          {filteredTodos.map((item) => (
            <li key={item.id}>
              <input
                type="checkbox"
                checked={item.completed}
                onChange={(e) => dispatch(todoActions.mark({ id: item.id }))}
              />
              {item.title}
              <button
                onClick={() => dispatch(todoActions.remove({ id: item.id }))}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
        <button onClick={() => dispatch(todoActions.clear())}>Clear</button>
      </div>
    </div>
  );
}

export default App;

// Store là container lưu trữ mọi thứ mỗi phần dữ liệu gọi là slice
// Slice (lát cắt dữ liệu) chia nhỏ giữ liệu
