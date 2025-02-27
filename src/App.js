import { useState } from "react";

export default function TodoList() {
  const [listInput, setListInput] = useState(""); //setListInput는 listInput값을 바꾸는 함수. listInput의 초기값을 ""(빈 문자열)로 설정.
  const [todos, setTodos] = useState([]); //todos라는 변수를 선언과동시에, []로 빈 배열로 초기화. setTodos는 todos 값을 바꾸는 함수
  const [index, setIndex] = useState(0); //주소값안 index를 0으로 초기화.

  const handleAdd = () => {
    if (!listInput.trim()) {
      alert("할 일을 입력해주세요!");
      return;
    }
    setTodos([
      ...todos,
      { id: `todo-${index}`, text: listInput, checked: false },
    ]);
    setIndex(index + 1);
    setListInput("");
  };

  const handleModify = () => {
    setTodos(
      todos.map((todo) => {
        if (todo.checked) {
          const newText = prompt("수정할 내용을 입력하세요:", todo.text);
          if (newText !== null) {
            return { ...todo, text: newText };
          }
        }
        return todo;
      })
    );
  };

  const handleDelete = () => {
    setTodos(todos.filter((todo) => !todo.checked));
  };

  const handleClear = () => {
    setTodos([]);
  };

  const handleCheckboxChange = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  const handleSelectAll = (e) => {
    setTodos(todos.map((todo) => ({ ...todo, checked: e.target.checked })));
  };

  return (
    <div
      className="min-h-screen p-5"
      style={{
        background: "linear-gradient(45deg, #f5e1be, #f3d9a7, #e8c994)",
        fontFamily: "Arial, sans-serif",
        color: "white",
      }}
    >
      <header
        className="text-center p-5 rounded-xl shadow-lg"
        style={{
          backdropFilter: "blur(10px)",
          background: "linear-gradient(45deg, #ed8c1e, #d7a122, #e0ab18)",
          borderRadius: "20px",
          boxShadow: "0 0 20px rgba(255, 255, 255, 0.2)",
        }}
      >
        <h1
          className="text-3xl font-bold"
          style={{
            animation: "glow 1.5s infinite alternate",
            textShadow: "0 0 5px #fff, 0 0 10px #ff00ff, 0 0 15px #ff00ff",
          }}
        >
          ⚛️ToDo List App⚛️
        </h1>
        <input
          type="text"
          value={listInput}
          onChange={(e) => setListInput(e.target.value)}
          placeholder="⏰ ↪︎ Please enter your Todo List"
          className="p-2 text-black rounded-md mx-2"
          style={{
            fontSize: "1.2rem",
            padding: "10px",
            borderRadius: "10px",
            border: "none",
            width: "50%",
          }}
        />
        <button
          onClick={handleAdd}
          id="AddButton"
          className="text-white font-bold py-2 px-4 rounded"
          style={{
            background: "linear-gradient(90deg, #00bfff, #004cff)",
            transition: "0.3s",
            cursor: "pointer",
            fontSize: "1.2rem",
          }}
        >
          Add
        </button>
      </header>

      <main
        className="p-5 shadow-lg rounded-xl mt-5"
        style={{
          backdropFilter: "blur(10px)",
          background: "linear-gradient(45deg, #ed8c1e, #d7a122, #e0ab18)",
          borderRadius: "20px",
          boxShadow: "0 0 20px rgba(255, 255, 255, 0.2)",
        }}
      >
        <h2>🛡️ ToDo List:</h2>
        <input type="checkbox" onChange={handleSelectAll} />
        <label className="ml-2">Select All</label>
        <ul className="mt-3">
          {todos.map((todo) => (
            <li key={todo.id} className="flex items-center mt-2">
              <input
                type="checkbox"
                checked={todo.checked}
                onChange={() => handleCheckboxChange(todo.id)}
                className="mr-2"
              />
              <span>{todo.text}</span>
            </li>
          ))}
        </ul>
      </main>

      <footer
        className="p-5 shadow-lg rounded-xl mt-5 text-right"
        style={{
          backdropFilter: "blur(10px)",
          background: "linear-gradient(45deg, #ed8c1e, #d7a122, #e0ab18)",
          borderRadius: "20px",
          boxShadow: "0 0 20px rgba(255, 255, 255, 0.2)",
        }}
      >
        <h2>🛡️ Completed Tasks: {todos.length}개</h2>
        <div>
          <button onClick={handleModify} id="ModifyButton">
            Modify Selected
          </button>
          <button onClick={handleDelete} id="DeleteButton">
            Delete Selected
          </button>
          <button onClick={handleClear} id="ClearButton">
            Clear All
          </button>
        </div>
      </footer>
    </div>
  );
}
