import CartTable from "./CartTable";
import '../assets/css/Cart.css';
import {useContext} from "react";
import {CartStore} from "../contexts/CartContext";
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// import {faChevronLeft} from "@fortawesome/free-solid-svg-icons/faChevronLeft";
// import {faChevronRight} from "@fortawesome/free-solid-svg-icons/faChevronRight";
import {CartTypes} from "../reducers/CartReducer";
import {Link, useNavigate} from "react-router-dom";
import categoryContext, {Category} from "../contexts/CategoryContext";



function Cart() {
    const cart = useContext(CartStore);

    const  {dispatch} = useContext(CartStore);
    const category = JSON.parse(localStorage.getItem('categoryId') || '{}');
    const clearCart = (bookId:any,book:any) => {
        dispatch({ type: CartTypes.CLEAR, item:book, id: bookId });
    };




    //check how many items inside the cart have quantity greater than 0
    const cartItemsCount = cart.cart.filter((cartItem) => cartItem.quantity > 0).length;

    // const cartTotal = cart.cart.reduce((total, cartItem) => {
    //     return total + cartItem.quantity * cartItem.book.price;
    // }, 0);

    // handle cartTotal for price being undefined
    const cartTotal = cart.cart.reduce((total, cartItem) => {
        // Check if cartItem.book is defined before accessing price
        if (cartItem.book && cartItem.book.price) {
            return total + cartItem.quantity * cartItem.book.price;
        }
        // If cartItem.book or cartItem.book.price is undefined, return total without adding anything
        return total;
    }, 0);



    const totalQuantity = cart.cart.reduce((total, cartItem) => {
        return total + cartItem.quantity;
    }, 0);


    const navigate = useNavigate();
    return (
        <div>
            {cartItemsCount !== 0 &&
                <Link to="/checkout">
                    <button className="primary-button-checkout">Proceed to checkout</button>
                </Link>
            }


            {/*{cart.cart.map((cartItem) => (*/}
            {/*    // Only render the <li> if cartItem.quantity is greater than zero*/}
            {/*    cartItem.quantity > 0 && (*/}
            {/*        <button className="primary-button-checkout">Proceed to checkout</button>*/}
            {/*    )*/}
            {/*))}*/}
            <button className="secondary-button-continue" onClick={() => navigate('/categories/'+category)}
            >Continue Shopping</button>

            {cart.cart.map((cartItem) => (
                // Only render the <li> if cartItem.quantity is greater than zero
                cartItem.quantity > 0 && (
                    <button onClick={() =>clearCart(cartItem.id, cartItem.book)} className="tertiary-button-clear">Clear Cart</button>
                )
            ))}


            <h1 className="page-title">Cart Page</h1>
            {/*<div className="cart-total"> Total: ${cartTotal.toFixed(2)}</div>*/}
            {/*<div className="cart-quantity"> Total Items: {totalQuantity}</div>*/}
            {cartItemsCount !== 0 && (
                <div>
                    <div className="cart-total">Total: ${cartTotal.toFixed(2)}</div>
                    <div className="cart-quantity">Total Items: {totalQuantity}</div>
                </div>
            )}


            {cartItemsCount !== 0 ? (
                <CartTable />
            ) : (
                <p className="default-message">Your cart is empty</p>
            )}




        </div>
            )
            }
            export default Cart;