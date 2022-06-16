import AddButton from "../addButton/addButton";
import Card from "../Card";
import styles from "./errorModal.module.css";

const ErrorModal = (props) => {
  return (
    <div className={styles.backdrop}>
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.errorTitle}</h2>
        </header>
        <p className={styles.content}>{props.errorDesc}</p>
        <footer className={styles.actions}>
          <AddButton onClickHandler={props.onButtonClick}>Okay</AddButton>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
