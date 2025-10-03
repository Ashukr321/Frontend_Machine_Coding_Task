
import { useEffect, useState } from 'react'
import fetchData from './services/userService';
import './App.css'

function App() {

  //  1. fetch Api data and store in the state card
  const [apiData, setApiData] = useState([]);

  // 2. How many data show per page  create variable const itemPerPage 
  const itemPerPage = 10;

  // 3.total_page 
  // total_page  = apiData.length/itemPerPage
  const totalPage = Math.ceil(apiData.length / itemPerPage);

  // 4 track the currentPage state , default currentPage value 1 
  const [currentPage, setCurrentPage] = useState(1);

  // 5 startIndex = (currentPage-1) * itemPerPage
  const startIndex = (currentPage - 1) * itemPerPage;
  // 6.endIndex = startIndex + itemPerPage
  const endIndex = startIndex + itemPerPage;

  // 7  currentData = apiData.slice(startIndex,endIndex)
  const currentData = apiData.slice(startIndex, endIndex);



  // function
  const getData = async () => {
    try {
      const result = await fetchData();
      setApiData(result);

    } catch (error) {
      console.log(error)
    }
  }
  // create function to fetchApiData 
  useEffect(() => {
    getData();
  }, [])






  // 8 create handler function 
  const prevHandler = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }
  // nextHandler 
  const nextHandler = () => {
    if (currentPage < totalPage) {
      setCurrentPage(currentPage + 1);
    }
  }


  return (
    <>
      <h1>Pagination Client side</h1>
      {/* show currentPageData */}

      <div className="posts-container">
        {currentData.map((item) => (
          <div className="post-card" key={item.id}>
            <div className="post-header">
              <span className="post-id">ID: {item.id}</span>
              <span className="post-user">User: {item.userId}</span>
            </div>
            <h3 className="post-title">{item.title}</h3>
            <p className="post-body">{item.body}</p>
          </div>
        ))}
      </div>



      {/* add pagination button */}
      <div style={{ marginTop: "20px", position: "fixed", bottom: "10px", right: '0px' }}>
        {/* prev button */}
        <button onClick={prevHandler} disabled={currentPage == 1}>
          Prev
        </button>
        {/* page: */}
        <span style={{ fontWeight: "bold" }}>
          page: {currentPage} of {totalPage}
        </span>

        {/* next */}
        <button onClick={nextHandler} disabled={currentPage == totalPage}>
          Next
        </button>
      </div>
    </>
  )
}

export default App


/* 
  Logic
  1. fetch Api data and store in the state card
  2. How many data show per page  create variable const itemPerPage 
  3. total_page 
    total_page  = apiData.length/itemPerPage
  4. track the currentPage state , default currentPage value 1 
  5. startIndex = (currentPage-1) * itemPerPage
  6. endIndex = startIndex + itemPerPage
  7. currentData = apiData.slice(startIndex,endIndex)
 */