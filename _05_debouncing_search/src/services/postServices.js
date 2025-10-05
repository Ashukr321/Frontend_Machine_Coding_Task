
const fetchPostById = async (id) => {
  const response = await fetch(`https://dummyjson.com/products/search?q=${id}`, {
    method: "GET"
  })
  if (!response.ok) {
    throw new Error("Failed to Fetch Data");
  }
  const resData = await response.json();
  return resData.products;
}

export default fetchPostById;