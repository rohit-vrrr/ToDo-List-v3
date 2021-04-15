import React from "react";

function App() {
  const [inputText, setInputText] = React.useState("");
  const [items, setItems] = React.useState([]);

  function handleInputText(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function handleClick() {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleInputText} type="text" value={inputText} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((eachItem) => (
            <li>{eachItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
