import React from 'react'
import { useOutletContext } from 'react-router'
const Book = () => {
  const [book] = useOutletContext()
  return (
    <div>{book.knygos_perziura}</div>
  )
}

export default Book