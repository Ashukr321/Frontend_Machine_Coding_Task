const fetchData = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: "GET"
  });

  const resData = await response.json();
  return resData;
}

export default fetchData;