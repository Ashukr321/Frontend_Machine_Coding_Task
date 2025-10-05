import React, { useEffect, useState } from 'react'
import './Debounc.css'
import fetchPostById from '../services/postServices.js'


const useDebounce = (searchQuery, delay) => {
  const [debounceValue, setDebounceValue] = useState(searchQuery);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(searchQuery);
    }, delay);

    // cleaner function 
    return () => {
      clearTimeout(timer) // to remove the  old timmer
    }
  }, [searchQuery, delay])
  return debounceValue;
}



const DebouncingComp = () => {
  const [query, setQuery] = useState();
  const debounceQuery = useDebounce(query, 2000); // searchQuery and delay 
  const [data, setData] = useState();


  const fetchData = async (query) => {
    const resData = await fetchPostById(query);
    setData(resData);
  }

  useEffect(() => {
    fetchData(debounceQuery);
  }, [debounceQuery])


  console.log(data);
  return (
    <div>
      <h1>Debouncing Search</h1>

      <form action="">
        <div className='input_box'>
          <input type="text" placeholder='search...' onChange={(e) => setQuery(e.target.value)} />
        </div>
      </form>
    </div>
  )
}

export default DebouncingComp
