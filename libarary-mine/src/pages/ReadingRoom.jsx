import React, { useEffect, useState } from 'react'
import PropTypes, { object } from 'prop-types'
import { Outlet } from 'react-router';

const ReadingRoom = () => {
  const [book, setBook] = useState([]);


  return (
      //
      // Cia children eina, ir per juos pareina parinkta knyga is bookselection. Manrods....
      <>
      <div className="book">Some book info</div>
      <Outlet/>
      </>
    
  )
}


export default ReadingRoom