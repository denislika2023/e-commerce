import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'
import './cart-icon.styles.jsx'
import { IconContainer,ShoppingIcon,ItemCount } from './cart-icon.styles.jsx'

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext)

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen)

  return (
    <IconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount>{cartCount}</ItemCount>
    </IconContainer>
  )
}

export default CartIcon
