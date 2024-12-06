import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const Auditorium = props => {
  const [book, setBook] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/book")
    .then((res) => {
      return res.json();
    }).then((data) => {
      setBook(data)
    })
  });

  return (
    {
      if (book) {
        return <div></div>
      }
    }
  )
}

Auditorium.propTypes = {}

export default Auditorium