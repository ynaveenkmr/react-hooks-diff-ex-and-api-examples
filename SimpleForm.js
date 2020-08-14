import * as React from "react";

function SimpleForm() {
  const [form, setValues] = React.useState({ username: "",password: "" });

  const handleFormSubmittion = e => {
    e.preventDefault();
    console.log(form.username, form.password);
  };
  const updateField = e => {
    setValues({
      ...form,
      [e.target.name]: e.target.value
    });
  };
  return (
    <>
      <ul />
      <form onSubmit={handleFormSubmittion}>
        <div>
          <label>First name
          <input
            type="text"
            name="username"
            onChange={updateField}
            value={form.username}
          />
          </label>
           <br />
           <label>
        Password:
        <input
          value={form.password}
          name="password"
          type="password"
          onChange={updateField}
        />
      </label>
       <br />
          <button>Add</button>
        </div>
      </form>
    </>
  );
}

export default SimpleForm;
