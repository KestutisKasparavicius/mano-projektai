import React, { useEffect, useState } from 'react'

const Home = () => {
  const [books, setBooks] = useState([]);
  const [book, setBook] = useState([]);

  useEffect(() => {

    fetch('http://localhost:3001/api/books')
      .then((response) => response.json())
      .then((data) => setBooks(data))
      .catch((error) => console.error('Error fetching books:', error));
    
  }, []);

  useEffect(() => {
    fetch('http://localhost:3001/api/book/1')
      .then((response) => response.json())
      .then((data) => data[0])
      .then((data) => setBook(data))
      .catch((error) => console.error('Error fetching book by ID:', error));
  }, []);

  return (
    <div>
      elo {books.pavadinimas}
      {console.log(books)}
      elo {book.id}
    </div>
  )
}

export default Home