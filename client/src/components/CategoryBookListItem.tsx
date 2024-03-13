import '../assets/css/CategoryBookListItem.css';
import '../types'
import "../types";
import {BookItem} from "../types";
import {useContext} from "react";
import {CartStore} from "../contexts/CartContext";
import {CartTypes} from "../reducers/CartReducer";

const bookImageFileName =  (book:BookItem) => {
  let name = book.title.toLowerCase();
  name = name.replace(/ /g, "-");
  name = name.replace(/'/g, "");
  return `${name}.png`;
};

function CategoryBookListItem(props:BookItem) {


    const book = props;

    const  {dispatch} = useContext(CartStore);
    const addBookToCart = () => {
        dispatch({ type: CartTypes.ADD, item:book, id: book.bookId });
    };


return (

  <li className="book-box">
   <div className="book-image ">
       <div className = "image-container">
      <img src={require('../assets/images/books/' + bookImageFileName(props))}
        alt="book.title"
      />
       <div className="overlay">
           <p>Read <br></br>Now</p>
       </div>
       </div>
    </div>
    <div className="book-title">{props.title }</div>
    <div className="book-author">{ "by "+ props.author }</div>
    <div className="book-price">${ (props.price).toFixed(2) }</div>
      <button className="secondary-button" onClick={addBookToCart}>Add to Cart</button>
  </li>

)
}
export default CategoryBookListItem;
