import   '../types';
import '../assets/css/CategoryBookList.css';
import CategoryBookListItem from './CategoryBookListItem';
import CategoryNav from './CategoryNav';
import  "../types";
import {BookItem} from "../types";
// import {bookList,BookItem} from "../types";
import {useState,useEffect} from "react";
import axios from "axios";
import {json, useParams} from "react-router-dom";


function CategoryBookList() {

    const {id} = useParams();
    localStorage.setItem('categoryId', JSON.stringify(id));

    const [books_category, setBooks_category] = useState<BookItem[]>([]);
    useEffect(() => {
        axios.get(`/TaeeshBookstoreReactTransact/api/categories/name/${id}/books`)
            .then((result) => setBooks_category(result.data ))
            .catch(console.error);
    },[id]);





  return (
      // <><CategoryNav/>
      <div className="book-lists-wrapper">
          <ul className="book-lists">
              {books_category.map((book:BookItem) => (
                  <CategoryBookListItem  bookId={book.bookId} isPublic={book.isPublic} price={book.price} title={book.title} author={book.author} categoryId ={book.categoryId}/>))}
          </ul>
      </div>

)
}

export default CategoryBookList;
