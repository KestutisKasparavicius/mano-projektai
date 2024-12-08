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
    <div>
    <ul>
      {data.map((obj) => {
        return <li key={obj.autorius}>{obj.pavadinimas}</li>
      })}
    </ul>
    </div>
  )
}

export default Home