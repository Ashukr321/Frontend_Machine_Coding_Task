import React, { useState } from 'react'

const ModelOpenClose = () => {
  const [isModalOpen,setIsModalOpen] = useState(false);

  const openModalHandler  = ()=>{
    setIsModalOpen(true);
  }
  const closeModalHandler = ()=>{
    setIsModalOpen(false);
  }

  const closeModelOutside = (e)=>{
    if(e.target.className=="model_container"){
      setIsModalOpen(false);
    }
  }

  return (
    <>
      <div>
        <button onClick={openModalHandler}>click</button>
      </div>

      {isModalOpen && (
        <div className='model_container' onClick={closeModelOutside}>
          <div className="modal">
            <h3>Edit Menu</h3>
            <button onClick={closeModalHandler}>close</button>
          </div>
        </div>
      )}
    </>

  )
}

export default ModelOpenClose
