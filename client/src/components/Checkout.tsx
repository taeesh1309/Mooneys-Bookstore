//
// import '../assets/css/Cart.css';
// import {Link} from "react-router-dom";
// function Checkout() {
//
//     return (
//         <div>
//             <h1 className="page-title">Checkout Page</h1>
//             <Link to="/cart">
//                 <button className="primary-button-checkout">Return to Cart</button>
//             </Link>
//         </div>
//     )
// }
// export default Checkout;

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


import  "../assets/css/checkout.css"



import { isCreditCard, isMobilePhone, isvalidEmail } from '../utils';
import {BookItem, CustomerForm, months, OrderDetails,  years} from "../types";
import {CartStore} from "../contexts/CartContext";
import {ChangeEvent, FormEvent, useContext, useState} from "react";
import { useNavigate} from "react-router-dom";
import {CartTypes} from "../reducers/CartReducer";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlusCircle} from "@fortawesome/free-solid-svg-icons/faPlusCircle";
import {faMinusCircle} from "@fortawesome/free-solid-svg-icons/faMinusCircle";
import CartTable from "./CartTable";
import axios from "axios";
import {OrderDetailStore} from "../contexts/OrderDetailsContext";






function Checkout()
{

    const getBookImageUrl = function (book: BookItem): string {
        let filename = book.title.toLowerCase();
        filename = filename.replace(/ /g, "-");
        filename = filename.replace(/'/g, "");
        filename = filename + ".png";
        try {
            return require('../assets/images/books/' + filename);
        } catch (_) {
            return require('../assets/images/books/the-iliad.png');
        }
    };

    const addBookToCart = (bookId:any,book:any) => {
        dispatch({ type: CartTypes.ADD, item:book, id: bookId });
    };
    const removeFromCart = (bookId:any,book:any) => {
        dispatch({ type: CartTypes.REMOVE, item:book, id: bookId });
    };

    /*
     * This will be used by the month and year expiration of a credit card
     *  NOTE: For example yearFrom(0) == <current_year>
    */
    function yearFrom(index: number) {
        return new Date().getFullYear() + index;
    }

    const {cart, dispatch} = useContext(CartStore);
    const navigate = useNavigate();


    // const cartTotalPrice = 0; // TO DO code that calculates the total price of your cart
    const cartTotalPrice = cart?.reduce((total, cartItem) => {
        // Check if cartItem.book is defined before accessing price
        if (cartItem.book && cartItem.book.price) {
            return total + cartItem.quantity * cartItem.book.price;
        }
        // If cartItem.book or cartItem.book.price is undefined, return total without adding anything
        return total;
    }, 0) || 0;


    // const cartQuantity = 0 ; // TO DO the code that calculates the total number of items in your cart
    const cartQuantity = cart?.reduce((total, cartItem) => {
        return total + cartItem.quantity;
    }, 0) || 0;

    const cartItemsCount = cart?.filter((cartItem) => cartItem.quantity > 0).length || 0;

    const category = JSON.parse(localStorage.getItem('categoryId') || '{}');




    const [nameError, setNameError] = useState("");

    const [addressError, setAddressError] = useState("");

    const [phoneError, setPhoneError] = useState("");

    const [emailError, setEmailError] = useState("");

    const [ccNumberError, setCCNumberError] = useState("");

    // TO DO error states for the rest of the input elements

    const [formData, setFormData] = useState({name: "",address:"", phone:"",email: "",ccNumber: "", ccExpiryMonth:0,ccExpiryYear:0});

    const [checkoutStatus, setCheckoutStatus] = useState("");

    function isValidForm()
    {
        //TO DO code that returns true is the customer form is valid, false otherwise
        const hasErrors =
            nameError ||
            addressError ||
            phoneError ||
            emailError ||
            ccNumberError;

        // Check if all fields are not empty and there are no errors
        return !!(!hasErrors && formData.name && formData.address && formData.phone && formData.email && formData.ccNumber && formData.ccExpiryMonth && formData.ccExpiryYear);
    }

    async function submitOrder(event:FormEvent) {
        event.preventDefault();
        console.log("Submit order");
        const isFormCorrect =  isValidForm();
        console.log(isFormCorrect);
        if (!isFormCorrect) {
            setCheckoutStatus("ERROR");
        } else {
            setCheckoutStatus("PENDING");
            const orders = await placeOrder({
                name: formData.name,
                address: formData.address,
                phone: formData.phone,
                email: formData.email,
                ccNumber: formData.ccNumber,
                ccExpiryMonth: formData.ccExpiryMonth,
                ccExpiryYear: formData.ccExpiryYear,
            })
            if(orders) {
                setCheckoutStatus("OK");
                navigate('/confirmation');}
            else{
                console.log("Error placing order");
            }
        }
    }

    // TO DO placeOrder function comes here. Needed for project 9 (not 8)
    const { dispatch2 } = useContext(OrderDetailStore);

    const placeOrder =  async (customerForm: CustomerForm) =>  {

        const order = { customerForm: customerForm, cart:{itemArray:cart} };

        const orders = JSON.stringify(order);
        // console.log(orders);     //you can uncomment this to see the orders JSON on the console
        const url = 'api/orders';
        const orderDetails: OrderDetails = await axios.post(url, orders,
            {headers: {
                    "Content-Type": "application/json",
                }
            })
            .then((response) => {
                dispatch({type: CartTypes.CLEAR});
                dispatch2({type: 'UPDATE', item: response.data});
                return response.data;
            })
            .catch((error)=>console.log(error));
        console.log("order deatils: ", orderDetails);
        return orderDetails;
    }

    // create a orderDetails context to save the order details from the server
    // const { orderDetails, setOrderDetails } = useContext(OrderDetailsStore);
    // setOrderDetails(orderDetails);


    function handleInputChange(event:ChangeEvent<HTMLInputElement|HTMLSelectElement>) {

        const { name, value } = event.target;

        switch (name) {
            case 'name':
                setFormData((prevFormData) => ({...prevFormData, [name]: value}));
                if (value.trim() === '') {
                    setNameError("Name is required!");
                } else if (value.length < 4 || value.length > 45) {
                    setNameError("Name must be between 4 and 45 characters long!");
                } else {
                    setNameError("");
                }
                break;
            case 'address':
                setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
                if (value.trim() === '') {
                    setAddressError("Address is required!");
                } else if (value.length < 4 || value.length > 45) {
                    setAddressError("Address must be between 4 and 45 characters long!");
                } else {
                    setAddressError("");
                }
                break;

            case 'phone':
                setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
                if (value.trim() === '') {
                    setPhoneError("Phone number is required!");
                } else if (!isMobilePhone(value)) {
                    setPhoneError("Please enter a valid phone number!");
                } else {
                    setPhoneError("");
                }
                break;

            case 'email':
                setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
                if (value.trim() === '') {
                    setEmailError("Email address is required!");
                } else if (!isvalidEmail(value)) {
                    setEmailError("Please enter a valid email address!");
                } else {
                    setEmailError("");
                }
                break;

            case 'ccNumber':
                setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
                if (value.trim() === '') {
                    setCCNumberError("Credit card number is required!");
                } else if (!isCreditCard(value)) {
                    setCCNumberError("Please enter a valid credit card number!");
                } else {
                    setCCNumberError("");
                }
                break;

            case 'ccExpiryMonth':
                setFormData((prevFormData) => ({...prevFormData, [name]:parseInt(value,10)}));
                break;
            case 'ccExpiryYear':
                setFormData((prevFormData) => ({...prevFormData, [name]: parseInt(value,10)}));
                break;
            default:
                break;
        }
    }

    // TO DO submitOrder function comes here. See the project Spec

    return (
        <section>


            {cartItemsCount !== 0 ? (
                <section className="checkout-cart-table-view">
                <section className="checkout-cart-table-view">
                    <div className="checkout-page-body">

                        <div>
                            <h1 className="page-title">Checkout</h1>
                            <form
                                className="checkout-form"
                                onSubmit ={(event)=>submitOrder(event)}
                                method="post"
                            >
                                <div>
                                    <label htmlFor="fname">Name</label>
                                    <input
                                        type="text"
                                        size={20}
                                        name="name"
                                        id="fname"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <> {nameError && <div className="error"> {nameError}</div>}</>

                                {/*  TO DO add the form elements for phone, address, email, and Credit card*/}
                                {/* Together with the error display*/}
                                <div>
                                    <label htmlFor="address">Address</label>
                                    <input
                                        type="text"
                                        size={20}
                                        name="address"
                                        id="address"
                                        value={formData.address}
                                        onChange={handleInputChange}
                                    />
                                </div>

                                <>{addressError && <div className="error">{addressError}</div>}</>

                                <div>
                                    <label htmlFor="phone">Phone</label>
                                    <input
                                        type="text"
                                        size={20}
                                        name="phone"
                                        id="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <>{phoneError && <div className="error">{phoneError}</div>}</>
                                <div>
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="text"
                                        size={20}
                                        name="email"
                                        id="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <>{emailError && <div className="error">{emailError}</div>}</>
                                <div>
                                    <label htmlFor="ccNumber">Card</label>
                                    <input
                                        type="text"
                                        size={20}
                                        name="ccNumber"
                                        id="ccNumber"
                                        value={formData.ccNumber}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <>{ccNumberError && <div className="error">{ccNumberError}</div>}</>

                                <div >
                                    <label htmlFor="ccExpiryMonth">Exp Date</label>
                                    <select style={{color:'black'}} name ="ccExpiryMonth" value ={formData.ccExpiryMonth} onChange={handleInputChange}>
                                        { months.map((month, i) => (
                                            <option  key={i}  value={i + 1}  >
                                                { month }
                                            </option>
                                        ))}
                                    </select>



                                    {/*TO DO the select input for the expiration year. Read the spec */}
                                    {/* about this*/}
                                    <select style={{color:'black'}} name ="ccExpiryYear" value ={formData.ccExpiryYear} onChange={handleInputChange}>
                                        { years.map((year, i) => (
                                            <option  key={i}  value={yearFrom(i)}  >
                                                { yearFrom(i) }
                                            </option>
                                        ))}
                                    </select>

                                </div>

                                {/* TO DO the checkout box with the total cost, tax) */}
                                {/* and the Complete Purchase button comes here*/}
                                <div className="checkout-container">
                                    <div className="checkout-column">
                                        <div className="checkout-box">
                                            <div className="checkout-box-total">
                                                <div className="checkout-box-total-title">Items
                                                    <span>({cartQuantity}):</span>
                                                </div>
                                                <div className="checkout-box-total-price">${cartTotalPrice.toFixed(2)}</div>
                                            </div>
                                            <div className="checkout-box-tax">
                                                <div className="checkout-box-tax-title">Tax :</div>
                                                <div className="checkout-box-tax-price">${(cartTotalPrice * 0.1).toFixed(2)}</div>
                                            </div>
                                            <div className="checkout-box-total">
                                                <div className="checkout-box-total-value">Total :</div>
                                                <div className="checkout-box-total-price-value">${(cartTotalPrice * 1.1).toFixed(2)}</div>
                                            </div>
                                            {/*<div className="checkout-box-button">*/}
                                            {/*    <button className="checkout-button" onClick={() => navigate('/confirmation')}>Complete Purchase</button>*/}
                                            {/*    </div>*/}


                                        </div>
                                    </div>
                                    {/*<div className="checkout-column">*/}
                                    {/*    /!*    <div className="checkout-box-tax">*!/*/}
                                    {/*    /!*        <div className="checkout-box-tax-title">Tax</div>*!/*/}
                                    {/*    /!*        <div className="checkout-box-tax-price">${(cartTotalPrice * 0.1).toFixed(2)}</div>*!/*/}
                                    {/*    /!*    </div>*!/*/}

                                    {/*    <div className="checkout-box-button">*/}
                                    {/*        /!*<button className="checkout-button" onClick={() => navigate(-1)}>Continue Shopping</button>*!/*/}
                                    {/*        <button className="checkout-button" onClick={() => navigate('/confirmation')}>Complete Purchase</button>*/}
                                    {/*    </div>*/}
                                    {/*</div>*/}
                                </div>
                                {/*<div className="checkout-button">*/}
                                {/*<button className="checkout-button" onClick={() => navigate('/confirmation')}>Complete Purchase</button>*/}
                                <input className="checkout-button" type="submit" value="Complete Purchase" />
                                {/*</div>*/}
                            </form>
                        </div>




                        <div>
                            {/*The following code displays different string based on the */}
                            {/*value of the checkoutStatus*/}
                            {/*Note the ternary operator*/}
                            {
                                checkoutStatus !== ''?
                                    <>
                                        <section className="checkoutStatusBox" >
                                            { (checkoutStatus === 'ERROR')?
                                                <div className="checkoutError" >
                                                    Error: Please complete the form and fix the problems above and try again.
                                                </div>: ( checkoutStatus === 'PENDING'?
                                                    <div>
                                                        Processing...
                                                    </div> : (checkoutStatus === 'OK'?
                                                        <div>
                                                            Order placed...
                                                        </div>:
                                                        <div>
                                                            An unexpected error occurred, please try again.
                                                        </div>))}
                                        </section>
                                    </>
                                    :<></>}
                        </div>
                    </div>







                    <div >
                        {/*This displays the information about the items in the cart*/}
                        <ul className="checkout-cart-info">
                            {
                                cart?.map((item, i) => (
                                    item.quantity > 0 && (
                                        <div className ="checkout-cart-book-item">
                                            <div className="checkout-cart-book-image"key = {i} >
                                                <img src={getBookImageUrl(item.book)} alt="title" className ="checkout-cart-info-img"
                                                     width="20%"
                                                     height="20%"
                                                />
                                            </div>
                                            <div className="checkout-cart-book-info">
                                                <div className="checkout-cart-book-title">{ item.book.title }</div>

                                                <div className="checkout-cart-book-subtotal">
                                                    {/*TO DO the total cost of this specific book displayed here*/}
                                                    <div className="checkout-cart-book-subtotal-price">${(item.quantity * item.book.price)}</div>
                                                </div>
                                                <div className="checkout-cart-book-quantity">
                                                    <button  className="checkout-icon-button inc-button"      onClick={() => addBookToCart(item.book.bookId, item.book)}>
                                                        <i className="fas fa-plus-circle"><FontAwesomeIcon icon={faPlusCircle} /></i>
                                                    </button>
                                                    <button className="checkout-num-button">{ item.quantity }</button>
                                                    <button className="checkout-icon-button dec-button"
                                                            onClick={() => removeFromCart(item.book.bookId, item.book)}
                                                    >
                                                        <i className="fas fa-minus-circle"><FontAwesomeIcon icon={faMinusCircle} /></i>
                                                    </button>
                                                </div>
                                            </div>

                                        </div>
                                    ))) }
                        </ul>
                    </div>
                </section>
                </section>
            ) : (
                <div>
                    <p className="default-message">Add an item to your cart to checkout</p>
                    <button className="secondary-button-continue-shop" onClick={() => navigate('/categories/'+category)}
                    >Continue Shopping</button>
                </div>



            )}

            </section>
    )}

export default Checkout;