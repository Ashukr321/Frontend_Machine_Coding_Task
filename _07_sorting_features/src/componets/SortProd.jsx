import React, { useState } from 'react'
import './SortProd.css'
import products from '../../data/product.js'

const SortProd = () => {
  // order state 
  const [sortedOrder, setSortedOrder] = useState("") // LowToHigh, HighToLow

  const [sortedItem, setSortedItem] = useState(products);

  // console.log(products);

  const sortHandler = (order) => {
    setSortedOrder(order);
    // copy originalProducts / items /it can api data 
    const sorted = [...products];
    if (order == "LowToHigh") {
      sorted.sort((a, b) => a.price - b.price)// a-b - value <0 keep order , value ==0 no change , value >0 , swap item 
    } else if (order == "HighToLow") {
      sorted.sort((a, b) => b.price - a.price);
    }
    setSortedItem(sorted);
  }

  return (
    <div>
      <h1 style={{
        color: "#333"
      }}>Sorting Product</h1>
      <form>
        <select style={{
          margin: "20px", padding: "10px 32px", fontSize: "14px", cursor: "pointer",
        }} value={sortedOrder} onChange={(e) => { sortHandler(e.target.value) }}>
          <option value="" style={{ color: "#999" }}>Sort By Price:</option>
          <option value="LowToHigh" style={{ color: "#999" }}>LowToHigh</option>
          <option value="HighToLow" style={{ color: "#999" }}>HighToLow</option>
        </select>
      </form>

      < div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center", overflowY: "scroll", height: "70vh" }}>
        {
          sortedItem.map((item) => (

            <div style={{ width: "250px", height: "200px", padding: "20px", boxShadow: "1px 1px .5px #ccc", borderRadius: "5px", cursor: "pointer" }} >
              <div className='header'>
                <h3 style={{ color: "#222" }}>{item.name}</h3>
              </div>
              <div className='priceTag'>
                <p style={{ margin: "4px 0" }}>price:💰{item.price}</p>
                <p style={{ margin: "4px 0" }}>⭐ {item.rating}</p>
              </div>
              <div className='stock'>
                <span
                  style={{
                    display: "inline-block",
                    backgroundColor: item.inStock ? "green" : "red",
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    marginRight: '10px',

                  }}
                >

                </span>

                <span style={{ color: item.inStock ? "green" : "red", fontWeight: "bold" }}>
                  {item.inStock ? "In Stock" : "Out of Stock"}
                </span>
              </div>

            </div>
          ))
        }
      </div>

    </div>
  )
}

export default SortProd


//  {
//     "id": 1,
//     "name": "Wireless Mouse",
//     "category": "Electronics",
//     "price": 499,
//     "rating": 4.3,
//     "inStock": true
//   },


// logic
// sorted order , low to high and hight to low
// LowToHigh or HighToLow , sortedOrder
// sortedProduct
// array. sort () , on the basic of price we can sort it
//


// array.sort() this methods internally use the tim sort
// tim sort is the combination  of the merge sort + insertion sort
// time complexity :  o(n log n )

