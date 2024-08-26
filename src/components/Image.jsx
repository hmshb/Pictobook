import { React, useState, useContext } from 'react'
import { Context } from '../../Context/Context'
import PropTypes from 'prop-types'

export default function Image({ className, img }) {
  const { toggleFavorite, addToCart, cartItems, removeFromCart } = useContext(Context)
  const [hover, setHover] = useState(false)

  function heartIcon() {
    if (img.isFavorite) {
      return <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(img.id)}></i>
    } else if (hover) {
      return <i className="ri-heart-line favorite" onClick={() => toggleFavorite(img.id)}></i>
    }
  }

  function cartIcon() {
    const cartItem = cartItems.some((item) => item.id === img.id)
    if (cartItem) {
      return <i className="ri-shopping-cart-fill cart" onClick={() => removeFromCart(img.id)}></i>
    } else if (hover) {
      return <i className="ri-add-circle-line cart icon" onClick={() => addToCart(img)}></i>
    }
  }

  return (
    <div
      className={`${className} imageContainer`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}>
      <img src={img.url} className="imageGrid" />
      {heartIcon()}
      {cartIcon()}
    </div>
  )
}

Image.PropTypes = {
  className: PropTypes.string,
  img: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool
  })
}
