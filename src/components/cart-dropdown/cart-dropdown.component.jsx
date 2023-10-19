import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import {CartDropdownContainer} from './cart-dropdown.styles';
import Button from '../button/button.component';
import { CartContext } from '../../contexts/cart.context';
import CartItem from '../cart-item/cart-item.component';

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckOutHandler = () => {
        navigate('/checkout');
    }
    return  (
        <CartDropdownContainer>
            <div className='cart-items'>
                { cartItems.map(item => <CartItem key={item.id} cartItem={item}/>)}
            </div>
                <Button onClick={goToCheckOutHandler}> Go To Checkout</Button>
        </CartDropdownContainer>
    )
};

export default CartDropdown;