import styles from "./TodoHead.module.css";
import image from "../../public/Rectangle 2.svg";
import DateTime from "./DateTime";
function TodoHead() {
  return (
    <div className={styles.imageContainer}>
      <img className={styles.mainImage} src={image} alt="" />
      <DateTime />
    </div>
  );
}

export default TodoHead;
