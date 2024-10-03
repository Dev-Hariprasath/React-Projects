import React from 'react'
import Image from './assets/One.jpg'
import PropTypes from 'prop-types'
import {FaShoppingCart } from "react-icons/fa";

const Card = (props) => {
  return (
    <div className='card'>
      <img src= {Image} alt='no img'></img>
      <p>Product: {props.name}</p>
      <p>Price: Rs {props.price} /- Only</p>
      <button>Buy Now <FaShoppingCart 
      role="icon"
      /></button>
      
    </div>
  )
}

Card.PropTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
}

Card.defaultProps ={
  name:"Guest",
  price:"0",
}

export default Card
