import React, { useState } from "react";
const Test = () => {
  const [data, setData] = useState("click me");
  const [inputText, setInputText] = useState("");
  const handleEvent = () => {
    setData("rojhit");
  };
  const handleMe = (e) => {
    setInputText(e.target.value);
  };
  return (
    <div>
      <button onClick={handleEvent}>{data}</button>
      <input type="text" value={inputText} onChange={handleMe} />
      <p>{inputText}</p>
    </div>
  );
};

export default Test;
