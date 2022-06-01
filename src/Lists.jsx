import { AiFillEdit } from "react-icons/ai";
import { GoTrashcan } from "react-icons/go";
import { TiTick } from "react-icons/ti";
import { CgUndo } from "react-icons/cg";

const Lists = ({ list, taskDone, isComplete, deleteItem, editItem }) => {
  return (
    <div className="list">
      {list.map((item) => {
        const { title, id } = item;
        return (
          <article className="list-item" key={item.id}>
            <p className={isComplete ? "done" : null}>{title}</p>
            <div className="btn-container">
              <button
                className={isComplete ? "undo" : "tick"}
                onClick={() => taskDone(id)}
              >
                {isComplete ? <CgUndo /> : <TiTick />}
              </button>
              <button className="edit-btn" onClick={() => editItem(id)}>
                <AiFillEdit />
              </button>
              <button className="trash" onClick={() => deleteItem(id)}>
                <GoTrashcan />
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Lists;
