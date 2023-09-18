import React from "react";
import Timer from "./Task/Timer";
import TicTac from "./Task/TicTac";
// import Check from "./Task/Check";
import Tier from "./Task/Tier";
import Calculator from "./Task/Calculator";
import Todo from "./Task/Todo";
import CryptoTable from "./Task/Crypto";
import Quiz from "./Task/Quiz";
const App = () => {
  return (
    <div>
      <Timer />
      <TicTac />
      {/* <Check /> */}
      <Tier />
      <Todo />
      <Calculator />
      <CryptoTable />
      <Quiz />
    </div>
  );
};

export default App;
