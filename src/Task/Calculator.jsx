import React, { useState } from "react";

const TipCalculator = () => {
  const [bill, setBill] = useState(50);
  const [tipPercentage, setTipPercentage] = useState(18);
  const [numberOfPeople, setNumberOfPeople] = useState(1);

  const totalTip = () => {
    if (bill === "" || tipPercentage === "" || numberOfPeople === "") {
      return "-";
    }
    return (bill * tipPercentage * 0.01).toFixed(2);
  };

  const tipPerPerson = () => {
    if (bill === "" || tipPercentage === "" || numberOfPeople === "") {
      return "-";
    }
    return (totalTip() / numberOfPeople).toFixed(2);
  };

  return (
    <div
      className="tip-calculator"
      style={{
        marginTop: "100px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "lightgray",
          padding: "20px 40px",
          borderRadius: "15px",
        }}
      >
        <h1>Tip Calculator</h1>

        <div className="inputs">
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="bill">Bill:</label>
            <input
              type="number"
              id="bill"
              value={bill}
              onChange={(e) => setBill(e.target.value)}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="tip-percentage">Tip Percentage:</label>
            <input
              type="number"
              id="tip-percentage"
              value={tipPercentage}
              onChange={(e) => setTipPercentage(e.target.value)}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="number-of-people">Number of People:</label>
            <input
              type="number"
              id="number-of-people"
              value={numberOfPeople}
              min={0}
              onChange={(e) => setNumberOfPeople(e.target.value)}
            />
          </div>
        </div>
        <div className="outputs">
          <p>Total Tip: ${totalTip()}</p>
          <p>Tip Per Person: ${tipPerPerson()}</p>
        </div>
      </div>
    </div>
  );
};

export default TipCalculator;
