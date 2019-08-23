import React from "react";

const Product = (props) => {
  return (
    <div>
      <h3>
        {props.product.id}. {props.product.name}
      </h3>
      <h4>Price: {`$${props.product.price}`}</h4>
      <p>Description: {props.product.description}</p>
    </div>
  );
};

export default Product;
