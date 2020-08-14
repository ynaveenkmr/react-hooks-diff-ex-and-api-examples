import React, { useState } from "react";

function InputFields() {
  const [name, setName] = useState({ firstName: "", lastName: "" });

  return (
    <>
      <hr />
      <form>
        <input
          type="text"
          value={name.firstName}
          onChange={e => setName({ ...name, firstName: e.target.value })}
        />
        <input
          type="text"
          value={name.lastName}
          onChange={e => setName({ ...name, lastName: e.target.value })}
        />
      </form>
      First Name: {name.firstName}
      <br />
      Last Name: {name.lastName}

      <h4>{JSON.stringify(name)}</h4>
    </>
  );
}

export default InputFields;
