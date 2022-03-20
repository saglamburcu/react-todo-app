import ListHeader from "./components/ListHeader";
import List from "./components/List";
import ListFooter from "./components/ListFooter";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const defaultData = [
  {
    id: uuidv4(),
    task: "Learn Javascript",
    done: false
  },
  {
    id: uuidv4(),
    task: "Learn React",
    done: false
  },
  {
    id: uuidv4(),
    task: "Have a life!",
    done: false
  }
];

function App() {
  const [data, setData] = useState(defaultData);
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    const updatedData = [...data, item];
    setData(updatedData);
  }

  const updateItems = (item) => {
    setItems(item);
  }

  // DONE
  const onDoneClick = (id) => {
    const updatedData = data.map(item => item.id === id ? { ...item, done: !item.done } : item);
    setData(updatedData);
  }

  // DELETE
  const onRemove = (id) => {
    const updatedData = data.filter(item => item.id !== id);
    setData(updatedData);
  }

  const clearCompleted = () => {
    const clearComp = data.filter(item => item.done !== true);
    setData(clearComp);
  }

  return (
    <div>
      <section className="todoapp">
        <ListHeader
          addItem={addItem}
        />
        <List
          data={data}
          onDoneClick={onDoneClick}
          onRemove={onRemove}
          items={items}
        />
        <ListFooter
          data={data}
          updateItems={updateItems}
          clearCompleted={clearCompleted}
        />
      </section>

      <footer className="info">
        <p>Click to edit a todo</p>
        <p>Created by <a href="https://d12n.me/">Dmitry Sharabin</a></p>
        <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
      </footer>
    </div>
  )
}

export default App;