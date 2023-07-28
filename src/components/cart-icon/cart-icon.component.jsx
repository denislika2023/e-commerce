import { useDispatch, useSelector } from 'react-redux';
import {
  selectCartCount,
  selectIsCartOpen
} from '../../store/cart/cart.selector.js';
import { setIsCartOpen } from '../../store/cart/cart.action.js';
import './cart-icon.styles.jsx';
import { IconContainer, ShoppingIcon, ItemCount } from './cart-icon.styles.jsx';

const CartIcon = () => {

  const dispatch = useDispatch();

  const cartCount = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectIsCartOpen);

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <IconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount>{cartCount}</ItemCount> 
    </IconContainer>
  );
};

export default CartIcon;
