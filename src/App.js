import { useState } from 'react';
import './App.css';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';

function App() {
  const [cart, setCart] = useState(0);

  const openCart = () => {
    setCart(1);
  }

  const closeCart = () => {
    setCart(0);
  }

  return (<CartProvider>
    {cart && <Cart onCloseCart={closeCart} />}
    <Header onOpenCart={openCart} />
    <main>
      <Meals />
    </main>
  </CartProvider>);
}

export default App;
