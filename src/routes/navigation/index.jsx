import { Fragment, useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
// import { UserContext } from '../../contexts/user.context';
import { selectCurrentUser } from '../../store/user/user.selector';
import { CartContext } from '../../contexts/cart.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from './styles';

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  // const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  const signOutHandler = async () => {
    await signOutUser();
    // setCurrentUser(null);
  };

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to='/'>
          <CrwnLogo className='logo' />
        </LogoContainer>
        <NavLinks>
          <NavLink to='/shop'>
            SHOP
          </NavLink>
          {currentUser ? (
            <NavLink as='span' onClick={signOutHandler}>
              {' '}
              SIGN OUT{' '}
            </NavLink>
          ) : (
            <NavLink to='/auth'>
              SIGN IN
            </NavLink>
          )}
        <CartIcon/>
        </NavLinks>
        {isCartOpen && <CartDropdown/>}
        {/* <CartDropdown/> */}
      </NavigationContainer>
      <Outlet />
    </Fragment>
	);
}

export default Navigation;