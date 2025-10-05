import React, { useEffect, useState } from 'react'
import fetchData from '../services/userService'
import './PaginatedData.css'
const PaginatedData = () => {

  const [apiData, setApiData] = useState([]);

  const itemPerPage = 10;

  //2 TOtal page 
  const totalPage = Math.ceil(apiData.length / itemPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  // startIndex 
  const startIndex = (currentPage - 1) * itemPerPage;
  const endIndex = startIndex + itemPerPage;

  const currentData = apiData.slice(startIndex, endIndex);

  // 2 handler function 
  // 1 prevHandler 
  const prevHandler = () => {
    setCurrentPage(currentPage - 1);
  }
  const nextHandler = () => {
    setCurrentPage(currentPage + 1);
  }


  const fetchApiData = async () => {
    const result = await fetchData();
    setApiData(result);
  }

  useEffect(() => {
    fetchApiData();
  }, [])



  console.log(currentData);

  return (
    <div>
      <h1>Paginate Data Client SIDE</h1>

      {/* SHOW data */}
      <div className='post_container'>
        {
          currentData.map((post) => {
            return (
              <>
                <div className='post_card' key={post.id}>
                  <div className='header'>
                    <span className="post-id">ID: {post.id}</span>
                    <span className="post-user">User: {post.userId}</span>
                  </div>
                  <h3 className='title' style={{textAlign:"center"}}>{post.title}</h3>
                  <p className="post-body">{post.body}</p>
                </div>
              </>
            )
          })
        }
      </div>

      {/* pagination show */}

      <div className='pagination'>
        <button className='prev_btn' onClick={prevHandler} disabled={currentPage == 1}>Prev</button>
        <span>page  {currentPage} of {totalPage}</span>
        <button onClick={nextHandler} className='next_btn' disabled={currentPage == totalPage}>next</button>
      </div>
    </div>
  )
}

export default PaginatedData
