import React from 'react'

const Child = React.memo(({ user, count }) => {
  console.log("child call")
  return (
    <>
      <h1>{user.name}:{count}</h1>
    </>
  )
})
export default Child;