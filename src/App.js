import { useEffect, useState } from "react";
import getData from "./helpers/getData";
import "./App.css";

function App() {
  const [users, setUsers] = useState();
  useEffect(() => {
    getData().then((res) => {
      console.log(res)
      setUsers(res);
    });
  }, []);
  return (
    <div className="App">
      <input type="text"></input>
    </div>
  );
}

export default App;
