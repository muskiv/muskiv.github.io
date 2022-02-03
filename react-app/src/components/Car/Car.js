import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteCar } from '../../store';

const Car = ({car: {id, model, price, year}}) => {
  const dispatch = useDispatch();
  
  return (
  <div style={{display: 'flex', justifyContent:'center', alignItems:'center', margin:'20px', gap:'20px'}}>
    <div>
      <div>Modal: {model}</div>
      <div>Price: {price}</div>
      <div>Year: {year}</div>
    </div>
    <button onClick={() => {dispatch(deleteCar({id}))}}>Delete</button>
  </div>
  )
};

export {Car};
