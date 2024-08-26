import { React, useContext } from 'react'
import { Context } from '../../Context/Context'

export default function CartItem({ item }) {
  const { removeFromCart } = useContext(Context)
  return (
    <div className="cartItem">
      <img src={item.url} width="150px" />
      <div>
        <i className="ri-delete-bin-line deleteBin" onClick={() => removeFromCart(item)}></i>
        <h2>$5.99</h2>
      </div>
    </div>
  )
}
