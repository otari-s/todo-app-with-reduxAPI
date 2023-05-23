import styles from "./TodoList.module.css";
import { MdDeleteForever, MdCheckBox } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { clearAll, clearItem, completeTodo } from "../store/todo-slice";
import { useNavigate } from "react-router-dom";
import { showNotification } from "../store/notification-slice";

function TodoList() {
  const navigate = useNavigate();

  const { todos } = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
    <div>
      <div className={styles.tododLink}>
        <button
          className={styles.tododLinkButton}
          onClick={() => {
            navigate("/complete");
          }}
        >
          Completed Todos Page
        </button>
      </div>
      {todos
        .filter((el) => !el.completed)
        .map((todo) => {
          const { id, name, date } = todo;
          return (
            <div className={styles.todoList} key={todo.id}>
              <div className={styles.todoListInfo}>
                <p style={{ fontSize: "25px", marginBottom: "10px" }}>{name}</p>
                <p style={{ color: "#6a040f" }}>{date}</p>
              </div>

              <div className={styles.todoListButtons}>
                <button
                  className={styles.todoListBtn}
                  onClick={() => {
                    dispatch(completeTodo({ id, completed: true }));
                    dispatch(
                      showNotification({
                        type: "info",
                        message: "todo completed",
                        duration: 3,
                      })
                    );
                  }}
                >
                  <MdCheckBox className={styles.checkBtn} />
                </button>
                <button
                  className={styles.todoListBtn}
                  onClick={() => {
                    dispatch(clearItem(id));
                    dispatch(
                      showNotification({
                        type: "error",
                        message: "todo deleted",
                        duration: 3,
                      })
                    );
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
          dispatch(clearAll({ completed: false }));
          dispatch(
            showNotification({
              type: "error",
              message: "deleted all todos",
              duration: 3,
            })
          );
        }}
      >
        Clear All
      </button>
    </div>
  );
}

export default TodoList;
