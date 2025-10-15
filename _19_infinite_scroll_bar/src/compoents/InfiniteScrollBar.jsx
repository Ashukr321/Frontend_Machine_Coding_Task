import React, { useEffect, useRef, useState } from "react";
import CardData from "./CardData";

const InfiniteScrollBar = () => {
  const [apiData, setApiData] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [loader, setLoader] = useState(false);
  const [hasMore, setHasMore] = useState(true);
 
  const loaderRef = useRef(null);

  const fetchData = async (pageNumber) => {
    try {
      setLoader(true);
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${pageNumber}`,
        { method: "GET" }
      );
      const resData = await response.json();

      if (resData.length === 0) {
        setHasMore(false);
        return;
      }

      setApiData((prev) => [...prev, ...resData]);

    } catch (error) {
      console.log(error.message);
    } finally {
      setLoader(false);
    }
  };



  useEffect(() => {
    fetchData(pageNumber);
  }, [pageNumber]);



  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const target = entries[0];
        if (target.isIntersecting && hasMore && !loader) { 
          //target.isIntersecting means now this  element seen int he viewport
          setPageNumber((prev) => prev + 1);
        }
      },

      // optional
      {
        root: null, 
        rootMargin: "200px", // start loading before bottom // callback
        threshold: 0, // this reflect the visibility of the target element
      }
    );
    

    if (loaderRef.current) observer.observe(loaderRef.current); // start observering
    // cleaner function
    return () => observer.disconnect();
  }, [hasMore, loader]);

  return (
    <div>
      <div className="container">
        {apiData.map((item) => (
          <CardData key={item.id} item={item} />
        ))}

        {loader && <p style={{ textAlign: "center" }}>Loading more...</p>}

        {!hasMore && (
          <p style={{ textAlign: "center" }}>No more items 😴</p>
        )}

        <div ref={loaderRef} style={{ height: "20px" }}></div>
      </div>
    </div>
  );
};

export default InfiniteScrollBar;
