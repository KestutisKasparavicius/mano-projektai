import React, { useEffect, useState } from 'react'
import Bookcase from '../components/Bookcase';
import Header from '../components/Header';
import Error from '../components/Error';
import Bookshelf from '../components/Bookshelf';

const Home = () => {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [err, setErr] = useState(false);

  useEffect(() => {
      const fetchData = async () => {
        setLoading(true);
        try {
        const response = await fetch("http://localhost:3001/api/book");
        const resData = await response.json();
        setData(resData)
        } catch (err) {
          setErr(err);
        } finally {
          setLoading(false)
        };
        
        
      }
      fetchData()
      }, []
  )


  if (isLoading) {
    return (
     <div className="loading">Loading..</div>
    )
  }

  if (err) {
    return (
      <Error/>
    )
  }
  return (
    <>
    <Header />
    <main className='page'>
    <Bookcase>
      <Bookshelf genre={"Classic"} bookList={data}/>
      <Bookshelf genre={"Novel"} bookList={data}/>
      <Bookshelf genre={"Sci-fi"} bookList={data}/>
    </Bookcase>
    </main>
    </>
    
  )
}

export default Home