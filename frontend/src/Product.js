import React from 'react'

const Product = ({id, description, image, price, name}) => {
    return (
        <div className="product">
            <div className="product__info">
                <h1><center>{name}</center></h1>
                <p className="product__price">
                    <center>Price:<strong>{price}</strong></center>
                </p>
            <div className="product__rating">
                <center>{description}</center>
        </div>
      </div>
      <div className="product__image">
      <center><img src={image} alt="" height="350px" width="350px" /></center>
      </div>
      <hr></hr><hr></hr>
    </div>
    )
}

export default Product
