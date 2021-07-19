import { useEffect, useState } from "react";
import getData from "./helpers/getData";
import "./styles/custom.css";
import "./App.css";

function App() {
  const [users, setUsers] = useState();
  const [text, setText] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    getData().then((res) => {
      setUsers(res);
    });
  }, []);
  const onSgugguestHandler = (text) => {
    setText(text);
    setSuggestions([]);
  };

  const onchangeHandler = (text) => {
    let matches = [];
    if (text.length > 0) {
      matches = users.filter((usr) => {
        const regex = new RegExp(`${text}`, "gi");
        return usr.email.match(regex);
      });
    }
    setSuggestions(matches);
    setText(text);
  };
  return (
    <div className="container">
      {console.log(text)}

      <input
        type="text"
        className="col-md-12 input"
        onChange={(e) => onchangeHandler(e.target.value)}
        value={text}
        onBlur={() => {
          setTimeout(() => {
            setSuggestions([]);
          }, 100);
        }}
      ></input>
      {suggestions &&
        suggestions.map((suggestion, i) => (
          <div
            onClick={() => onSgugguestHandler(suggestion.email)}
            key={i}
            className=" suggestion col-md-12 justify-content-md-center"
          >
            {suggestion.email}
          </div>
        ))}
    </div>
  );
}

export default App;
