import { useCallback, useEffect, useState } from 'react'
import './App.css'
import { IoReturnUpBackOutline } from 'react-icons/io5';
import { PiSeatFill } from 'react-icons/pi';

function App() {
  // search state 
  const [search, setSearch] = useState("");

  // api Data
  const [apiData, setApiData] = useState([]);

  // suggestions 
  const [suggestion, setSuggestion] = useState([]);


  const debounce = (func, delay) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  const fetchApiData = async (query) => {
    const response = await fetch(`https://dummyjson.com/products/search?q=${query}`, {
      method: "GET"
    });
    const result = await response.json();
    setApiData(result.products);
  };


  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceFunc = useCallback(debounce(fetchApiData, 600), []);

  useEffect(() => {
    debounceFunc(search);
  }, [search, debounceFunc]);

  useEffect(() => {
    if (!search.trim()) {
      setSuggestion([]);
      return;
    }
    const filterSuggestion = apiData.filter((prd) =>
      prd.title.toLowerCase().startsWith(search.toLowerCase())
    );
    setSuggestion(filterSuggestion.slice(0, 5));
  }, [search, apiData]);

  // selectHandler 
  const selectHandler = (prd) => {
    setSearch(prd.title);
    setSuggestion([]);
    setApiData([prd]);
  };


  return (
    <div className="app-container">

      {/* Search Input */}
      <form className="search-form" onSubmit={(e) => e.preventDefault()}>
        <div className="input-container">
          <input
            type="text"
            value={search}
            placeholder="🔍 Search for products..."
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* ✅ Suggestions */}
        {suggestion.length > 1 && (
          <div className="suggestion-box">
            {suggestion.map((prd) => (
              <p
                key={prd.id}
                onClick={() => selectHandler(prd)}
                className="suggestion-item"
              >
                {prd.title}
              </p>
            ))}
          </div>
        )}
      </form>

      {/* Display Data */}
      <div className="product-container">
        {apiData.length > 0 ? (
          apiData.map((prd) => (
            <div key={prd.id} className="product-card">
              <div className="header">
                <img src={prd.thumbnail} alt={prd.title} className="product-img" />
                <h3>{prd.title}</h3>
              </div>
              <p className="description">{prd.description.slice(0, 60)}...</p>
              <p className="price">💲{prd.price}</p>
            </div>
          ))
        ) : (
          <div style={{ display: "flex", justifyContent: "center", height: "65vh", alignItems: "center" }}>
            <div class="loader"></div>
          </div>

        )}
      </div>
    </div>
  );
}

export default App;
