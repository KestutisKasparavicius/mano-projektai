import React from 'react'
import photos from '../assets/Images.js'
import ErrorCSS from "../styles/error.module.css";
const Error = () => {
  return (
    <div className={ErrorCSS.error}>
       <img src={photos.errorPhoto} alt="burning book" />
        <h1>Oh no, something broke</h1>
    </div>
  )
}

export default Error