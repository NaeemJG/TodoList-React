import React from "react";

const InputArea = (props) => {
  return (
    <div className="form">
      <input onChange={props.handleChange} type="text" value={props.inputText} onKeyPress={props.submit}/>
      <button onClick={props.addItem}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
