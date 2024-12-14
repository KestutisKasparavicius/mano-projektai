import React from 'react'
import photos from '../assets/Images.js'
// import "../error.css"
const Error = () => {
  return (
    <div className="error">
       <img src={photos.errorPhoto} alt="burning book" />
        <h1>Oh no, something broke</h1>
    </div>
  )
}

export default Error