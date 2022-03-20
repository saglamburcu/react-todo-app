import { useEffect, useState } from "react";

function ListFooter({ data, updateItems, clearCompleted }) {

  const [selectedFilter, setSelectedFilter] = useState('all'); // seçilen tab bilgisini tutar all, active, completed

  useEffect(() => {
    const newItems = filter();
    updateItems(newItems);

  }, [data, selectedFilter]);


  const filter = () => {
    let filteredData = data;

    if (selectedFilter === 'active') {
      filteredData = data.filter(item => item.done !== true);
    } else if (selectedFilter === 'completed') {
      filteredData = data.filter(item => item.done === true);
    }

    return filteredData;
  }

  const onActive = () => {
    setSelectedFilter('active');
  }

  const onCompleted = () => {
    setSelectedFilter('completed');
  }

  const onAll = () => {
    setSelectedFilter('all');
  }

  const getUncompletedCount = () => {
    const uncompletedItems = data.filter(item => item.done !== true);
    return uncompletedItems.length;
  }

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{getUncompletedCount()}</strong>
        items left
      </span>

      <ul className="filters">
        <li>
          <button type="button" className="selected" onClick={() => onAll()}>All</button>
        </li>
        <li>
          <button type="button" onClick={() => onActive()}>Active</button>
        </li>
        <li>
          <button type="button" onClick={() => onCompleted()}>Completed</button>
        </li>
      </ul>
      <button className="clear-completed" onClick={() => clearCompleted()}>
        Clear completed
      </button>
    </footer>
  )
}

export default ListFooter;