import { useState } from "react";
import Alert from "./Alert";
import Lists from "./Lists";

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [isComplete, setIsComplete] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({ status: false, msg: "", type: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      showAlert(true, `can't add empty value`, "danger");
    } else if (name && isEditing) {
      setList(
        list.map((item) => {
          if (item.id === editId) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      showAlert(true, "Task Edited", "success");
      setName("");
      setIsEditing(false);
    } else {
      const newItems = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItems]);
      setName("");
      setEditId(null);
      showAlert(true, "Task Added", "success");
    }
  };

  const clearList = () => {
    setList([]);
    showAlert(true, "list cleared", "success");
  };

  const taskDone = () => {
    setIsComplete((prevState) => !prevState);
    showAlert(
      true,
      !isComplete ? "Task completed" : "undo done",
      !isComplete ? "success" : "danger"
    );
  };

  const deleteItem = (id) => {
    setList(list.filter((item) => id !== item.id));
    showAlert(true, "task deleted", "danger");
  };

  const editItem = (id) => {
    let item = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditId(id);
    setName(item.title);
  };

  const showAlert = (status = false, msg, type) => {
    setAlert({ status, msg, type });
  };

  return (
    <div className="container">
      <section className="center">
        <h2>to do list</h2>

        {alert.status && (
          <Alert {...alert} list={list} removeAlert={showAlert} />
        )}

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button className="add-btn">{isEditing ? "Edit" : "Add"}</button>
        </form>
        <div className="list-container">
          <Lists
            list={list}
            taskDone={taskDone}
            isComplete={isComplete}
            deleteItem={deleteItem}
            editItem={editItem}
          />
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
