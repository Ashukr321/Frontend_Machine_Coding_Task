import React, { useEffect, useState } from 'react'
import './ThrottleSearch.css'
import fetchPostById from '../services/postServices'
const ThrottleSearch = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  const fetchData = async (query) => {
    const result = await fetchPostById(query);
    setData(result);
  }

  useEffect(() => {
    fetchData(search)
  }, [search])

  console.log(data);
  return (
    <div>
      <h1>Throttle Search...</h1>
      <form action="">
        <div className='input_box'>
          <input type="text" placeholder='search...' onChange={(e) => { setSearch(e.target.value) }} />
        </div>
      </form>
    </div>
  )
}

export default ThrottleSearch
