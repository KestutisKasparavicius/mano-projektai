import React from 'react'

const ColorSelection = (setter) => {

    const handleOnClick = (inputColor: Color) =>  {
        if (inputColor === "white") {
            setColor("black");
            return true;
        } else {
            setColor("white");
            return false;
        }
    };
  return (
    <div>
        <h2>Select your color</h2>
        <button className="button" onClick={() => handleOnClick("white")}>White</button>
        <button className="button" onClick={() => handleOnClick("black")}>Black</button>   
    </div>
  )
}

export default ColorSelection