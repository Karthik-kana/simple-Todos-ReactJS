// Write your code here

const TodoItem = props => {
  const {todoItem, deleteTodo} = props
  const {id, title} = todoItem

  const onDelete = () => {
    deleteTodo(id)
  }

  return (
    <li>
      <p>{title}</p>
      <button type="button" onClick={onDelete}>
        delete
      </button>
    </li>
  )
}

export default TodoItem
