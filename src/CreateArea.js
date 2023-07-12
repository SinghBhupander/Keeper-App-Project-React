import React, { useState } from "react";
import "./styles.css";

function CreateArea(props) {
  const [notes, setNote] = useState({ title: "", desc: "" });
  function handleChange(e) {
    const { name, value } = e.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }
  function SubmitNote(e) {
    props.onAdd(notes);
    setNote({
      title: "",
      desc: ""
    });
    e.preventDefault();
  }
  return (
    <div>
      <form className="form1">
        <input
          name="title"
          onChange={handleChange}
          value={notes.title}
          placeholder="Title"
        />
        <br />
        <textarea
          name="desc"
          onChange={handleChange}
          value={notes.desc}
          placeholder="take a note..."
          rows="3"
        />
        <br />
        <button onClick={SubmitNote}>Add</button>
      </form>
    </div>
  );
}
export default CreateArea;
