import styles from "./button.module.css"

export default function Button({ buttonText, }) {
    return (
      <button className={styles.button}>{ buttonText }</button>
    );
  }