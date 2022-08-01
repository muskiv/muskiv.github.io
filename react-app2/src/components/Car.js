import React from 'react'

const Car = ({car}) => {

  const {id, model, price, year} = car;
  return (
    <div className='car'>
      ID: {id}  Model: {model}  Price: {price}  Year: {year} 
    </div>
  )
}

export {Car}