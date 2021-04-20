import React from "react";
import "./style.css";

const words = ["My", "name", "is", "Mitesh"];

export default function App() {
  const [inputField, setInputField] = React.useState(words);
  const [showEdit, setShowEdit] = React.useState(false);
  const handleClick = e => {
    setInputField(inputField || e.target.value);
    setShowEdit(true);
  };
  const handleBlur = () => {
    setShowEdit(false);
  };
  const saveData = index => {
    setInputField({
      ...inputField
    });
  };
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      {words.map((text, index) => {
        return (
          <div>
            {!showEdit && <label onClick={handleClick}>{text}</label>}
            {showEdit && (
              <>
                <input type="text" value={words[index]} onBlur={handleBlur} />
                <button onClick={saveData(index)}>Save</button>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}
