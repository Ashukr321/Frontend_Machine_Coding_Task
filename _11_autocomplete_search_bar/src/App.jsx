import { useCallback, useEffect, useState } from 'react';
import './App.css';

function App() {
  const [search, setSearch] = useState('');
  const [apiData, setApiData] = useState([]);
  const [suggestion, setSuggestion] = useState([]);
  const [recentSearch, setRecentSearch] = useState([]);
  const [isFocused, setIsFocused] = useState(false);

  // Debounce function
  const debounce = (func, delay) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => func(...args), delay);
    };
  };

  // Fetch API data
  const fetchApiData = async (query = '') => {
    const response = await fetch(`https://dummyjson.com/products/search?q=${query}`);
    const result = await response.json();
    setApiData(result.products);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceFunc = useCallback(debounce(fetchApiData, 600), []);

  useEffect(() => {
    debounceFunc(search);
  }, [search, debounceFunc]);


  // Filter suggestions
  useEffect(() => {
    if (!search.trim()) {  
      setSuggestion([]);
      return;
    }
    const filtered = apiData.filter(prd =>
      prd.title.toLowerCase().startsWith(search.toLowerCase())
    );
    setSuggestion(filtered.slice(0, 5));
  }, [search, apiData]);

  // Select product from suggestions
  const selectHandler = (prd) => {
    setSearch(prd.title);
    setSuggestion([]);
    setApiData([prd]);
    addToRecentSearch(prd.title);
    setIsFocused(false);
  };

  // Load recent searches from localStorage
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('recentSearch')) || [];
    setRecentSearch(stored);
  }, []);

  // Add to recent search
  const addToRecentSearch = (query) => {
    if (!query.trim()) return;
    setRecentSearch(prev => {
      const updated = [query, ...prev.filter(item => item !== query)].slice(0, 5);
      localStorage.setItem('recentSearch', JSON.stringify(updated));
      return updated;
    });
  };

  // Delete from recent search
  const handleDelete = (term) => {
    setRecentSearch(prev => {
      const updated = prev.filter(item => item !== term);
      localStorage.setItem('recentSearch', JSON.stringify(updated));
      return updated;
    });
  };

  // Handle recent search click
  const handleRecentClick = async (term) => {
    setSearch(term);
    setIsFocused(false);
    const response = await fetch(`https://dummyjson.com/products/search?q=${term}`);
    const result = await response.json();
    setApiData(result.products);
    addToRecentSearch(term);
  };




  return (
    <div className="app-container">
      {/* Search Input */}
      <form className="search-form" onSubmit={e => e.preventDefault()}>
        <div className="input-container">
          <input
            type="text"
            value={search}
            placeholder="🔍 Search for products..."
            onChange={e => setSearch(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        </div>

        {/* Suggestions */}
        {suggestion.length > 1 && (
          <div className="suggestion-box">
            {suggestion.map(prd => (
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

      {/* Recent Searches */}
      {isFocused && search.trim() === '' && recentSearch.length > 0 && (
        <div className="recent_box">
          {recentSearch.map(term => (
            <div key={term} className="recent_search" >
              <span onMouseDown={() => { handleRecentClick(term) }}>{term}</span>
              <span onMouseDown={() => handleDelete(term)}>❌</span>
            </div>
          ))}
        </div>
      )}

      {/* Display Products */}
      <div className="product-container">
        {apiData.length > 0 ? (
          apiData.map(prd => (
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
          <div style={{ display: 'flex', justifyContent: 'center', height: '65vh', alignItems: 'center' }}>
            <div className="loader"></div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
