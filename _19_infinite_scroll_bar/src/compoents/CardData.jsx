import React from 'react'

const CardData = ({item}) => {
  return (
    <div className='cardData'> 
        <div className='card_id'>{item.id}</div>
      <div className='title'>
        <h3>{item.title}</h3>
        <p className='card_body'>{item.body}</p>
      </div>
    </div>
  )
}

export default CardData
