import "./App.css";
import { useState } from "react";
import UserInput from "./components/userInput/userInput";
import AgeList from "./components/ageList/ageList";
import Card from "./components/Card";

function App() {
  const [users, setUsers] = useState([]);

  const addUserHandler = (user) => {
    setUsers([...users, user]);
  };
  return (
    <div>
      <Card>
        <UserInput userInputHandler={addUserHandler} />
      </Card>
      <Card>
        <AgeList users={users} />
      </Card>
    </div>
  );
}

export default App;
