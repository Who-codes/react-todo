import { useState } from "react";
import Lists from "./Lists";

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [isComplete, setIsComplete] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItems = { id: new Date().getTime().toString(), title: name };
    setList([...list, newItems]);
    setName("");
  };

  const clearList = () => {
    setList([]);
  };

  const taskDone = () => {
    setIsComplete((prevState) => !prevState);
  };

  return (
    <div className="container">
      <section className="center">
        <h2>to do list</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button className="add-btn">Add</button>
        </form>
        <div className="list-container">
          <Lists list={list} taskDone={taskDone} isComplete={isComplete} />
          {list.length > 0 && (
            <button className="clear-btn" onClick={clearList}>
              clear list
            </button>
          )}
        </div>
      </section>
    </div>
  );
}

export default App;
