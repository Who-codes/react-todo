import { useState } from "react";

function App() {
  const [list, setList] = useState([]);
  const [text, setText] = useState("");
  const [alert, setAlert] = useState(false);
  const [Edit, setEdit] = useState({ status: false, msg: "", type: "" });
  const [editId, setEditId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hello");
  };

  return (
    <div className="container">
      <h2>to do list</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="text"
          placeholder="Eg. Submit Assignment By 11am"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="add-btn">Add</button>
      </form>
      <section className="center"></section>
    </div>
  );
}

export default App;
