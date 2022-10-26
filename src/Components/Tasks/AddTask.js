import { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [complete, setComplete] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("Please add a Task");
      return;
    }

    onAdd({ text, day, complete });

    setText("");
    setDay("");
    setComplete(false);
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          placeholder="Add Task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      <div className="form-control">
        <label>Day & Time</label>
        <input
          type="text"
          placeholder="Add Date & Time"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>

      <div className="form-control form-control-check">
        <label>Set Complete</label>
        <input
          type="checkbox"
          checked={complete}
          value={complete}
          onChange={(e) => setComplete(e.currentTarget.checked)}
        />
      </div>

      <input type="submit" value="Save Task" className="btn btn-block" />
    </form>
  );
};

export default AddTask;
