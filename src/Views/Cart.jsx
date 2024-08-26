import { React, useContext, useState } from 'react'
import { Context } from '../../Context/Context'
import CartItem from '../components/CartItem'
import Header from '../components/Header'

export default function Cart() {
  const [buttonText, setButtonText] = useState('Place order')
  const { cartItems, emptyCart } = useContext(Context)
  const totalCost = 5.99 * cartItems.length
  const totalDisplayCost = totalCost.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
  })
  const cartItemElements = cartItems.map((item) => {
    return <CartItem key={item.id} item={item} />
  })

  function placeOrder() {
    setButtonText('Ordering...')
    setTimeout(() => {
      setButtonText('Place order')
      emptyCart()
    }, 3000)
  }

  return (
    <div>
      <Header />
      <h1 className="cartTitle">Check out</h1>
      <div>{cartItemElements}</div>
      <p className="totalCost">Total Cost: {totalDisplayCost}</p>
      {cartItems.length > 0 ? (
        <button className="orderBtn" onClick={placeOrder}>
          {buttonText}
        </button>
      ) : (
        <p className="noItems">You have no items in your cart.</p>
      )}
    </div>
  )
}
