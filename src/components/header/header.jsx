import React from 'react';
import './header.scss';
import {Link} from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.jsx';
import CartDropdown from '../cart-dropdown/cart-dropdown.jsx';

const Header = ({currentUser, hidden}) => (
    <div className='header'>
        <Link className="logo-container" to="/">
            <Logo className='logo'/>
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/shop'>
                CONTACT
            </Link>
            {
                currentUser ? 
                <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                :
                <Link className='option' to='/login'>SIGN IN</Link>
            }
            <CartIcon></CartIcon>
        </div>
        {hidden ? null : <CartDropdown/>}
        
    </div>
)

//more advanced way to destructure
const mapStateToProps = ({user: { currentUser }, cart: { hidden }}) => ({
    currentUser,
    hidden
})
export default connect(mapStateToProps)(Header);