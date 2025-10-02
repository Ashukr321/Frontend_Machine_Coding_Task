import { useState } from 'react';
import './App.css'

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("All");
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");



  const addTodoHandler = (e) => {
    e.preventDefault();

    if (todo.length < 4) {
      setError("Plz Enter Item item should be minimum 4 character");
      return
    }

    const newItem = {
      id: Date.now(),
      name: `${todo}`,
      isCompleted: false,
    }


    // add newItems
    setTodos([...todos, newItem]);
    // clear todo 
    setTodo("");
    setError("");

  }



  // deleteItem 
  const deleteItemHandler = (id) => {
    const updatedTodos = todos.filter((item) => item.id !== id)
    setTodos(updatedTodos);
  }


 const markCompleted = (id) => {
  const updatedTodos = todos.map((item) =>
    item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
  );
  setTodos(updatedTodos);
};


  // filterTodo 
  const filterTodos = todos.filter((item) => item.name.toLowerCase().includes(search.toLowerCase())
  ).filter((item) => {
    if (filter === "All") {
      return true
    }
    if (filter === "Active") {
      return !item.isCompleted
    }
    if (filter === "Completed") {
      return item.isCompleted
    }
  })


  return (
    <>
      <div>
        <h1>Todo App</h1>
      </div>

      <div class="container">
        <form action="" onSubmit={addTodoHandler} style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <div style={{ flex: 1, height: "40px" }} >
            <input style={{ width: "100%" }} required onChange={(e) => { setTodo(e.target.value) }} value={todo} placeholder='Enter Items' type="text" name='todo' />
          </div>

          <div style={{ height: "40px" }}>
            <button type='submit'>+Add</button>
          </div>
        </form>
        {/* show error */}
        <div >
          {error ? (<p style={{
            color: "red", marginTop: "10px", textAlign: "center",
          }}>{error}</p>) : ""}
        </div>

        {/* searchBox  + add filter option active / inactive with dropdown*/}
        <div style={{ marginTop: "20px", }}>
          <form style={{ display: "flex", gap: "10px" }} onSubmit={(e) => { e.preventDefault() }}>
            {/* search */}
            <div style={{ height: "40px", flex: 1 }}>
              <input type="text" style={{ width: "100%" }} placeholder='search' onChange={(e) => { setSearch(e.target.value) }} value={search} name='search' />
            </div>

            {/* select filter option */}
            <div style={{ height: '40px' }}>
              <select value={filter} style={{ height: "100%", padding: "0px 12px" }} onChange={(e) => { setFilter(e.target.value) }} >
                <option value="All">All</option>
                <option value="Active">Active</option>
                <option value="Completed">InActive</option>
              </select>
            </div>

          </form>
        </div>


        {/* display todo Item */}
        <div style={{ marginTop: "20px" }}>
          <div  >
            {filterTodos.length > 0 ? (
              filterTodos.map((item, index) => {
                return <>
                  <div key={index} style={{ marginBottom: "10px" }}>
                    <ItemComp item={item} markCompleted={() => markCompleted(item.id)} onDelete={() => deleteItemHandler(item.id)} />
                  </div>
                </>
              })
            ) : ""}
          </div>
        </div>
      </div>
    </>
  )
}

export const ItemComp = ({ item, onDelete, markCompleted }) => {
  return (
    <div style={{ display: "flex", gap: "13px", fontSize: "18px" }}>
      <div style={{ display: "flex", flex: 1, listStyleType: "none", gap: "10px" }}>
        <li>{item.name}</li>
        <li style={{ color: item.isCompleted ? "red" : "green" }}>
          {item.isCompleted ? "Completed" : "Active"}
        </li>
      </div>
      <div style={{ display: "flex", gap: "10px" }}>
        <button className='dlt_btn' onClick={onDelete}>Delete</button>
        <button
          className='dlt_btn'
          style={{ backgroundColor: item.isCompleted ? "orange" : "green" }}
          onClick={markCompleted}
        >
          {item.isCompleted ? "Mark as Active" : "Complete"}
        </button>
      </div>
    </div>
  )
}


export default App
