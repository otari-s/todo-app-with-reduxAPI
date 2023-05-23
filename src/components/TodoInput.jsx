import styles from "./TodoInput.module.css";
import { MdLibraryAdd } from "react-icons/md";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/todo-slice";
import { showNotification } from "../store/notification-slice";
import { v4 as uuidv4 } from "uuid";

function TodoInput() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  function onSubmit(e) {
    e.preventDefault();
    const payload = {
      id: uuidv4(),
      name: value,
      date: new Date().toLocaleString(),
      completed: false,
    };
    dispatch(addTodo(payload));
    setValue("");
    dispatch(
      showNotification({
        type: "success",
        message: "todo created",
        duration: 3,
      })
    );
  }

  return (
    <div className={styles.formContainer}>
      <form onSubmit={onSubmit} className={styles.todoForm}>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Todo title"
          className={styles.todoInput}
          type="text"
        />
        <button className={styles.todoBtn} type="submit" disabled={!value}>
          <MdLibraryAdd className={styles.addBtn} />
        </button>
      </form>
    </div>
  );
}

export default TodoInput;
