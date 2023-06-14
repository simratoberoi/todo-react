import { useState } from "react"
import "./style.css"
export default function App() {
  const[newitem, setNewItem] = useState("")
  const[todos,settodos]=useState([])

  function handleSubmit(e) {
    e.preventDefault()
    settodos(currenttodos=> {
      return[
        ...currenttodos,
    {id:crypto.randomUUID(), title:newitem, completed:
    false },
  ]
})
setNewItem("")
}
function toggletodo(id, completed) {
  settodos(currenttodos =>{
    return currenttodos.map(todo => {
      if(todo.id===id) {
        todo.completed=completed
        return{...todo,completed}
      }
      return  todo
    })
  })
}
function deletetodo(id){
  settodos(currenttodos =>{
    return currenttodos.filter(todo=> todo.id !==id)
  })
}
  return(
    <>
     <form onSubmit={handleSubmit} className="new-item-form">
     <div class="w3-container w3-teal">
  <h1>New Item</h1>
</div>
      <div className="form-row">
        <input value={newitem} onChange={e=>setNewItem(e.target.value)} type="text" id="item" />
      </div>
      <button className="btn">Add</button>
      </form>
      
      <h1 className="header"> Todo list </h1>
      <ul className="list">
        {todos.map(todo => {
       return (
       <li key={todo.id}>
          <label>
            <input type="checkbox" className="checkbox"
            checked={todo.completed}
            onChange={e => toggletodo(todo.id,e.target.checked)}/>
            {todo.title}
          </label>
          <button onClick={() => deletetodo(todo.id)} classname="btn.btn-danger">delete</button>
        </li>
       )
      })}
    
      </ul>
      
    </>
  )
}