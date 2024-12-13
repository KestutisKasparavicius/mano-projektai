import React, { useEffect, useState } from 'react'

const Home = () => {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [err, setErr] = useState(false);

  useEffect(() => {
      const fetchData = async () => {
        const response = await fetch("http://localhost:3001/api/book");
        const resData = await response.json();
        setData(resData);
      }
      fetchData()
      }, []
  )
  return (
    <main>
      <div className="bookcase">
    <div className='bookshelf-container'>
      <div className="bookshelf">
        <div className="book">{data} </div>
      </div>
      <div className="bookshelf"></div>
      <div className="bookshelf"></div>
    </div>
    <div className='cabinet'>
      <span className="door">&#128996;</span>
      <span className="door">&#128996;</span>
    </div>
      </div>
    </main>
  )
}

export default Home