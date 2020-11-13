import React from 'react';
import CustomButton from '../custom-button/custom-button.jsx';
import './cart-dropdown.scss';
import CartItem from '../cart-item/cart-item.jsx';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart-selectors';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cart-actions';

const CartDropdown = ({cartItems, history, dispatch}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.length ? (
                cartItems.map(cartItem => (
                <CartItem key={cartItem.id} item={cartItem}/>
            ))
                ) : (
                    <span className='empty-message'>YOUR CART IS EMPTY</span>
                )
        }
        </div>
        <CustomButton onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartHidden());
            }
            }>CHECKOUT</CustomButton>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));