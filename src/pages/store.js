import '../css/storeitem.css';
import React, { useContext } from 'react';
import products from '../productitems/products.json';
import penis from '../images/paintpenis.png';
import boo from '../images/booo.png';
import steffe from '../images/supersteffe.png'
import { CartContext } from '../context/cartcontex';

/** fix the cart page and component that shows everything inside the cart and total price. */

const images =[
  boo,penis,steffe,penis,boo,steffe
]

const Store = () => {
  const cartContext = useContext(CartContext);

  const productsToRender = () =>{
    return(
    <div className="grid">
     {products.map((product, index)=>{
      return(
        <div key={product.id} className="card">
          <img src={images[index]} alt={`Preview of ${product.title}`}></img>
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <p>${product.price}</p>
          <p>
            <button onClick={() => cartContext.addToCart(product)}>Add to Cart</button>
          </p>
        </div>
      );
    })}
    </div>
    )
  }

  return (
    <div className="pagediv"
    >
      <h1>Welcome to the Store</h1>

      {productsToRender()}
    </div>
  );
};
  
export default Store;