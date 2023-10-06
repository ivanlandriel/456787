import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <div>Nombre de la Tienda</div>
      <div>Icono del Carrito</div>
    </nav>
  );
}

export default Navbar;
import React from 'react';

const Catalog = () => {
  // Aquí podrías obtener la lista de productos desde una fuente de datos (por ejemplo, una API)
  const products = [
    { id: 1, name: 'Producto 1', price: 10 },
    { id: 2, name: 'Producto 2', price: 15 },
    // Agrega más productos aquí
  ];

  return (
    <div>
      <h2>Catálogo de Productos</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button>Agregar al Carrito</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Catalog;
import React from 'react';

const ProductDetail = ({ product }) => {
  return (
    <div>
      <h2>Detalle del Producto</h2>
      <h3>{product.name}</h3>
      <p>Precio: ${product.price}</p>
      <button>Agregar al Carrito</button>
    </div>
  );
}

export default ProductDetail;
import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter(item => item.id !== productId);
    setCartItems(updatedCart);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  return useContext(CartContext);
}
import React from 'react';
import { useCart } from './CartContext';

const CartWidget = () => {
  const { cartItems } = useCart();

  return (
    <div>
      <span>{cartItems.length}</span>
      <i>Icono del Carrito</i>
    </div>
  );
}

export default CartWidget;
