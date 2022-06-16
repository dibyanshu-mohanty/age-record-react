import styles from "./addButton.module.css";

const AddButton = (props) => {
  return (
    <div>
      <button
        className={styles.button}
        type="submit"
        onClick={props.onClickHandler}
      >
        {props.children}
      </button>
    </div>
  );
};

export default AddButton;
