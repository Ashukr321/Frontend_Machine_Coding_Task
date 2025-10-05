import { useState, useEffect, useCallback } from 'react';
import fetchPostById from '../services/postServices';

const debounceFunc = (func, delay) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, delay);
  }
}

const FuncDeb = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  const fetchData = async (query) => {
    const result = await fetchPostById(query);
    setData(result);
  }



  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceFetchData = useCallback(debounceFunc(fetchData, 400), []);


  useEffect(() => {
    debounceFetchData(search);
  }, [search,debounceFetchData])

  console.log(data);
  return (
    <div>
      <h1>Debounce Function</h1>
      <input type="text" onChange={(e) => { setSearch(e.target.value) }} placeholder='search....' />

      {
        data.length > 0 ? (
          data.map((prd) => (
            <p key={prd.id}>{prd.title}</p>
          ))
        ) : null
      }

    </div>
  )
}

export default FuncDeb
