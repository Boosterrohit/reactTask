import React, { useContext } from "react";
import NoteState from "../Context/noteState";
const Check = () => {
  const a = useContext(NoteState);
  console.log(a);
  return <p>{a.name}</p>;
};

export default Check;
