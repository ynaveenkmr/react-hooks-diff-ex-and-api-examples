import React, { useState } from "react";

function HooksTodo() {
  const [value, setValue] = useState();
  const Array = [1, 2, 3, 4];

  return (
    <>
      <hr />

      {Array + ""}
      <hr />

      {["first", "second"].map(item => (
        <li>{item}</li>
      ))}
      <hr />

      {Array.map(item => (
        <div key={item.id}>{item}</div>
      ))}

    </>
  );
}

export default HooksTodo;
