import styles from "./userInput.module.css";
import { useState } from "react";
import AddButton from "../addButton/addButton";
import ErrorModal from "../errorModal/errorModal";

const UserInput = (props) => {
  const [user, setUser] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();
  const onUserChangeHandler = (e) => {
    setUser(e.target.value);
  };
  const onAgeChangeHandler = (e) => {
    setAge(e.target.value);
  };
  const onErrorDone = () => {
    setError(null);
  };
  const onAddUserHandler = (e) => {
    e.preventDefault();
    if (user.trim().length === 0 || age.trim().length === 0) {
      setError({
        errorTitle: "Invalid Input",
        errorDesc: "Please fill out all fields",
      });
      return;
    }
    if (age < 0 || age > 120) {
      setError({
        errorTitle: "Invalid Input",
        errorDesc: "Please enter an age (> 0)",
      });
      return;
    }
    props.userInputHandler({
      id: Math.random().toString(),
      name: user,
      age: age,
    });
    setUser("");
    setAge("");
  };
  return (
    <div>
      {error && (
        <ErrorModal
          errorTitle={error.errorTitle}
          errorDesc={error.errorDesc}
          onButtonClick={onErrorDone}
        />
      )}
      <form onSubmit={onAddUserHandler}>
        <div className={styles.userInput}>
          <label for="uName"> Username </label>
          <input
            type="text"
            name="uName"
            onChange={onUserChangeHandler}
            value={user}
          />
          <br></br>
          <label for="age"> Age (Years) </label>
          <input
            type="number"
            min="1"
            step="1"
            name="age"
            onChange={onAgeChangeHandler}
            value={age}
          />
          <AddButton onClickHandler={onAddUserHandler}>Add User</AddButton>
        </div>
      </form>
    </div>
  );
};

export default UserInput;
