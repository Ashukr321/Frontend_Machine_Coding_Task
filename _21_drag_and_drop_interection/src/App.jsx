import React, { useState } from 'react'
import './App.css'

const App = () => {

  // const 
  const [item, setItem] = useState(["item1", "item2", "item3", "item4"])

  const [dragItem, setDragItem] = useState(null);
  //dragHandler 
  const handleDragStart = (index) => {
    setDragItem(index);
  }

  // 
  const handleDragOver = (e) => {
    e.preventDefault();
  }

  // 
  const handleDragDrop = (index) => {
    const updatedItem = [...item]; // copy the original array of items 
    const draggedItem = updatedItem[dragItem];
    // remove dragItem from old position
    updatedItem.splice(dragItem, 1);

    //  add into new Positon 
    updatedItem.splice(index, 0, draggedItem);
    setItem(updatedItem);
    setDragItem(null);
  }

  return (
    <div>
      <h1>Drag and Drop Interaction</h1>

      <div className='container'>

        {
          item.map((item, index) => (
            <div key={item} draggable onDragStart={() => { handleDragStart(index) }} onDragOver={handleDragOver} onDrop={() => { handleDragDrop(index) }} className='item'>
              <p>{item}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default App
