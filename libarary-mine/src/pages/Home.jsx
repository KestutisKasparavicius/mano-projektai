import React, { useEffect } from 'react'
const Home = () => {
  useEffect(() => {
    fetch('http://localhost:3001/api/books')
      .then((response) => response.json())
      .catch((error) => console.error('Error fetching books:', error));
  }, []);
  return (
    <div>
      elo 
    </div>
  )
}

export default Home