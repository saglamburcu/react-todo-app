
function List({ onDoneClick, onRemove, items }) {


  return (

    <ul className="todo-list">
      {
        items.map((item) => (
          <li key={item.id} className={item.done ? "completed" : ""}>
            <div className="view">
              <input className="toggle" type="checkbox" name="done" onClick={() => onDoneClick(item.id)} defaultChecked={item.done} />
              <label>{item.task}</label>
              <button className="destroy" onClick={(e) => onRemove(item.id)}></button>
            </div>
          </li>
        ))
      }
    </ul>

  )
}

export default List;