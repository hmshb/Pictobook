import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Context = React.createContext()

function ContextProvider({ children }) {
  const [isFetching, setIsFetching] = useState(false)

  const [allPhotos, SetAllPhotos] = useState(() => {
    const localItems = localStorage.getItem('allPhotos')
    const parsedItems = JSON.parse(localItems)
    return parsedItems || []
  })

  const [cartItems, setCartItems] = useState(() => {
    const localItems = JSON.parse(localStorage.getItem('cartItems'))

    return localItems || []
  })

  const url =
    'https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json'

  useEffect(() => {
    setIsFetching(true)
    axios.get(url).then((res) => localStorage.setItem('allPhotos', JSON.stringify(res.data)))
    setIsFetching(false)
  }, [])

  function toggleFavorite(id) {
    const updatedPhotos = allPhotos.map((photo) => {
      if (photo.id === id) {
        return {
          ...photo,
          isFavorite: !photo.isFavorite
        }
      }
      return photo
    })
    SetAllPhotos(updatedPhotos)
  }

  function addToCart(newItem) {
    setCartItems((prevItems) => [...prevItems, newItem])
    SetAllPhotos((prevItems) => prevItems.filter((item) => item !== newItem))
  }

  function removeFromCart(item) {
    SetAllPhotos((prevItem) => [item, ...prevItem])
    setCartItems((prevItems) => prevItems.filter((prevItem) => prevItem !== item))
  }

  function emptyCart() {
    setCartItems([])
  }

  useEffect(() => {
    localStorage.setItem('allPhotos', JSON.stringify(allPhotos))
  }, [allPhotos])

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
  }, [cartItems])

  return (
    <Context.Provider
      value={{
        allPhotos,
        toggleFavorite,
        addToCart,
        cartItems,
        removeFromCart,
        emptyCart,
        isFetching
      }}>
      {children}
    </Context.Provider>
  )
}

export { Context, ContextProvider }
