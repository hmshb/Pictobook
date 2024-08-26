import { React, useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../Context/Context'

export default function Header() {
  const { cartItems } = useContext(Context)
  const cartClassName = cartItems.length > 0 ? 'ri-shopping-cart-fill' : 'ri-shopping-cart-line'

  return (
    <nav className="navBar">
      <h1>
        <Link to="/photos" className="linkStyle">
          Pictobook
        </Link>
      </h1>
      <div>
        <a href="https://wa.me/923249962290" className="clickToChat">
          <i class="ri-whatsapp-fill ri-2x"></i>
        </a>
        <Link to="/cart" className="linkStyle">
          <i className={` ${cartClassName} ri-fw ri-2x`}></i>
          <span className="cartNumbering">{cartItems.length > 0 ? cartItems.length : ''}</span>
        </Link>
      </div>
    </nav>
  )
}
