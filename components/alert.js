import styles from "./alert.module.css";
import cn from "classnames";

export default function Alert(props) {
  return (
    <div
      className={cn({
        [styles.success]: props.type === "success",
        [styles.success]: props.type === "error",
      })}
    >
      <p className={styles.error}>Hello Kostas Kostas</p>
    </div>
  );
}
