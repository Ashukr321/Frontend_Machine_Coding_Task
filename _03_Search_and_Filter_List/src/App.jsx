
import { useState } from 'react';
import './App.css'

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [rating, setRating] = useState("All");

  // feature sort based on price state
  // minPrice 
  const [minPrice, setMinPrice] = useState(100);
  const [maxPrice, setMaxPrice] = useState(50000);

  // MaxPrice 
  // data 
  const products = [
    { id: 101, name: "Laptop", category: "Electronics", price: 50000, status: "available", brand: "Dell", rating: 4.5 },
    { id: 102, name: "Smartphone", category: "Electronics", price: 20000, status: "sold out", brand: "Samsung", rating: 4.2 },
    { id: 103, name: "T-Shirt", category: "Clothing", price: 500, status: "available", brand: "Levis", rating: 4.0 },
    { id: 104, name: "Coffee Mug", category: "Kitchen", price: 300, status: "available", brand: "Crockery", rating: 4.1 },
    { id: 105, name: "Headphones", category: "Electronics", price: 1500, status: "available", brand: "Sony", rating: 4.3 },
    { id: 106, name: "Refrigerator", category: "Appliances", price: 35000, status: "available", brand: "LG", rating: 4.6 },
    { id: 107, name: "Jeans", category: "Clothing", price: 1200, status: "sold out", brand: "Wrangler", rating: 4.0 },
    { id: 108, name: "Blender", category: "Kitchen", price: 2000, status: "available", brand: "Philips", rating: 4.2 },
    { id: 109, name: "Tablet", category: "Electronics", price: 25000, status: "available", brand: "Apple", rating: 4.7 },
    { id: 110, name: "Sneakers", category: "Footwear", price: 2500, status: "available", brand: "Nike", rating: 4.4 }
  ];


  // console.log(search, category, rating);
  //  get FilterProduct 
  const filterProducts = products
    .filter((prd) => prd.name.toLowerCase().includes(search.toLowerCase()))
    .filter(prd => category === "All" || prd.category.toLowerCase() === category.toLowerCase())
    .filter((prd) => rating === "All" || Math.floor(prd.rating) >= Number(rating))
    .filter((prd) => prd.price >= minPrice && prd.price <= maxPrice);

  console.log(filterProducts);
  console.log(minPrice);
  return (
    <>
      <h1 className='title'>Search and Filter </h1>

      <div className="container">
        {/* search */}
        <div className='form_container'>
          <form style={{
            display: "flex",
            gap: "10px"
          }}>
            <div style={{ flex: 1 }}>
              <input type="text" name='search' value={search} onChange={(e) => { setSearch(e.target.value) }} placeholder='search' />
            </div>
            <div style={{ display: "flex", gap: "4px" }}>
              {/* category filter */}
              <label>
                <span >Category:</span>
                <select value={category} onChange={(e) => { setCategory(e.target.value) }}>
                  <option value="All">ALL</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Clothing">Clothing</option>
                  <option value="Kitchen">Kitchen</option>
                  <option value="Footwear">Footwear</option>
                </select>
              </label>

              {/* rating filter */}
              <label >
                <span> Rating:</span>
                <select value={rating} onChange={(e) => { setRating(e.target.value) }}>
                  <option value="all" >All</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </label>

              {/* Min Price filter */}
              <label>
                <span>Min Price:</span>
                <select value={minPrice} onChange={(e) => setMinPrice(Number(e.target.value))}>
                  <option value={100}>100₹</option>
                  <option value={1000}>1000₹</option>
                  <option value={5000}>5000₹</option>
                  <option value={10000}>10000₹</option>
                  <option value={20000}>20000₹</option>
                </select>
              </label>

              {/* Max Price filter */}
              <label>
                <span>Max Price:</span>
                <select value={maxPrice} onChange={(e) => setMaxPrice(Number(e.target.value))}>
                  <option value={5000}>5000₹</option>
                  <option value={10000}>10000₹</option>
                  <option value={20000}>20000₹</option>
                  <option value={35000}>35000₹</option>
                  <option value={50000}>50000₹</option>
                </select>
              </label>
            </div>
          </form>
        </div>


        {/* displayData */}
        <div className='products'>
          {
            filterProducts.length > 0 ? (
              filterProducts.map((prd) => (
                <div key={prd.id} className='product_card'>
                  <h3>{prd.name}</h3>
                  <p>Category: {prd.category}</p>
                  <p>Price: ₹{prd.price}</p>
                  <p>Brand: {prd.brand}</p>
                  <p>Rating: {prd.rating}</p>
                </div>

              ))
            ) : (
              <p>No Product Found</p>
            )
          }
        </div>
      </div>
    </>
  )
}

export default App
