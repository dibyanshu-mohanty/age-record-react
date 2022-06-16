import styles from "./ageList.module.css";

const AgeList = (props) => {
  let actualContent;
  if (props.users.length === 0) {
    actualContent = (
      <h3>
        <center>No Users Added</center>
      </h3>
    );
  } else {
    actualContent = props.users.map((user) => (
      <li key={user.id} className={`${styles["user-item"]}`}>
        <span>{user.name}</span>
        <span> ({user.age} years old)</span>
      </li>
    ));
  }
  return (
    <div className={styles.ageList}>
      <ul className={`${styles["age-list"]}`}>{actualContent}</ul>
    </div>
  );
};

export default AgeList;
