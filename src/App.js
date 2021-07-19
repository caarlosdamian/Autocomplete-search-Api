import { useEffect, useState } from "react";
import getData from "./helpers/getData";
import "./App.css";

function App() {
  const [users, setUsers] = useState();
  const [text, setText] = useState("");
  useEffect(() => {
    getData().then((res) => {
      setUsers(res);
    });
  }, []);

  const onchangeHandler = (text) => {
    setText(text);
    console.log(text);
  };
  return (
    <div className="container">
      {console.log(text)}

      <input
        type="text"
        className="col-md-12 input"
        onChange={(e) => onchangeHandler(e.target.value)}
        value={text}
      ></input>
    </div>
  );
}

export default App;
