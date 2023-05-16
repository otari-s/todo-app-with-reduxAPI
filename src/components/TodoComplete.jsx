import styles from "./TodoList.module.css";
import { MdDeleteForever, MdCancel } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearItem, completeTodo, clearAll } from "../store/todo-slice";

function TodoComplete() {
  const navigate = useNavigate();

  const { todos } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div>
      <div className={styles.tododLink}>
        <button
          className={styles.tododLinkButton}
          onClick={() => {
            navigate("/");
          }}
        >
          Todos
        </button>
      </div>
      {todos
        .filter((el) => el.completed)
        .map((todo) => {
          const { id, name, date, completed } = todo;
          return (
            <div className={styles.todoList} key={todo.id}>
              <div className={styles.todoListInfo}>
                <p>{todo.name}</p>
                <p>{todo.date}</p>
              </div>

              <div className={styles.todoListButtons}>
                <button
                  className={styles.todoListBtn}
                  onClick={() => {
                    dispatch(completeTodo({ id, completed: false }));
                  }}
                >
                  <MdCancel className={styles.checkBtn} />
                </button>
                <button
                  className={styles.todoListBtn}
                  onClick={() => {
                    dispatch(clearItem(id));
                  }}
                >
                  <MdDeleteForever className={styles.delBtn} />
                </button>
              </div>
            </div>
          );
        })}

      <button
        className="clearAllBtn"
        onClick={() => {
          dispatch(clearAll({ completed: true }));
        }}
      >
        Clear All
      </button>
    </div>
  );
}

export default TodoComplete;
