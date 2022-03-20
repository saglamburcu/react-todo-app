import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';


function ListHeader({ addItem }) {

  const [taskName, setTaskName] = useState('');

  const formSubmit = (e) => {
    e.preventDefault();

    const newTask = { id: uuidv4(), task: taskName, done: false };
    addItem(newTask);
    setTaskName('');
  }

  return (
    <>
      <header className="header">
        <h1>todos</h1>
        <form onSubmit={formSubmit}>
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            autoFocus
            name="task"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
        </form>
      </header>
      <section className="main">
        <input className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">
          Mark all as complete
        </label>
      </section>
    </>
  )
}

export default ListHeader;