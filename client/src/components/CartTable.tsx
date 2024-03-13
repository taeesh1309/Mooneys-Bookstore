
import  "../assets/css/CartTable.css"
import { BookItem } from "../types";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons/faChevronLeft';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons/faChevronRight';
// import {faMinusCircle} from '@fortawesome/free-solid-svg-icons/faMinusCircle';
// import {faPlusCircle} from '@fortawesome/free-solid-svg-icons/faPlusCircle';
import {useContext} from "react";
import {CartStore} from "../contexts/CartContext";
import {CartTypes} from "../reducers/CartReducer";


const getBookImageUrl = function (book: BookItem): string {
    //
    let filename;

    if (book && book.title) {
        filename = book.title.toLowerCase();
    } else {
        // Handle the case where book or book.title is undefined
        filename = "default-filename"; // Provide a default filename or handle it based on your requirements
    }

    filename = filename.replace(/ /g, "-");
    filename = filename.replace(/'/g, "");
    filename = filename + ".png";
    try {
        return require('../assets/images/books/' + filename);
    } catch (_) {
        return require('../assets/images/books/the-iliad.png');
    }
};


function CartTable()
{
    const  {dispatch} = useContext(CartStore);

    const cart = useContext(CartStore);
    const addBookToCart = (bookId:any,book:any) => {
        dispatch({ type: CartTypes.ADD, item:book, id: bookId });
    };
    const removeFromCart = (bookId:any,book:any) => {
        dispatch({ type: CartTypes.REMOVE, item:book, id: bookId });
    };
    // cart.cart.map((cartItem) => (
    //     console.log(cartItem)
    // ));
    return (


        <div className="cart-table">
            <ul className = "cart2">



                <li className="table-heading">
                    <div className="heading-book">Book</div>
                    <div className="heading-price">Price</div>
                    <div className="heading-Quantity">Quantity</div>
                    <div className="heading-subtotal">Amount</div>
                </li>

                <li className="line-sep"></li>
                {cart.cart.map((cartItem) => (
                    // Only render the <li> if cartItem.quantity is greater than zero
                    cartItem.quantity > 0 && (
                        <li key={cartItem.id}>
                            <div className="cart-book-image">
                                <img className="cart2" src={getBookImageUrl(cartItem.book)} alt="Dune" />
                            </div>
                            <div className="cart-book-title">{cartItem.book.title}</div>
                            <div className="cart-book-price">{cartItem.book.price}</div>
                            <div className="cart-book-quantity">
                                <button onClick={() => removeFromCart(cartItem.id, cartItem.book)} className="icon-button dec-arrow-button">
                                    <i className="fas fa-chevron-left">
                                        <FontAwesomeIcon icon={faChevronLeft} />
                                    </i>
                                </button>
                                <span className="quantity">&nbsp;&nbsp;{cartItem.quantity}&nbsp;&nbsp;</span>
                                <button onClick={() => addBookToCart(cartItem.id, cartItem.book)} className="icon-button inc-arrow-button">
                                    <i className="fas fa-chevron-right">
                                        <FontAwesomeIcon icon={faChevronRight} />
                                    </i>
                                </button>
                            </div>
                            <div className="cart-book-subtotal">${cartItem.quantity*cartItem.book.price}</div>
                        </li>
                    )
                ))}

                <li className="line-sep"></li>

            </ul>
        </div>
    )
}

export default CartTable;

