// Contains all the custom types we want to use for our application
import Classics from './assets/images/categories/classics.jpg';
import Fantasy from './assets/images/categories/fantasy.jpg';
import Mystery from './assets/images/categories/mystery.jpg';
import Romance from './assets/images/categories/romance.jpg';
export interface BookItem {
  bookId: number;
  title: string;
  author: string;
  price: number;
  isPublic: boolean;
  categoryId:number;
}

export interface CategoryItem {
  categoryId: number;
  name: string;
}
export const categoryImages: Record<string, any> = {
  classics: Classics,
  fantasy : Fantasy,
  mystery : Mystery,
  romance : Romance
};
// export const categoryList = [
//   { categoryId: 1001, name: "Classics" },
//   { categoryId: 1002, name: "Fantasy" },
//   { categoryId: 1003, name: "Mystery" },
//   { categoryId: 1004, name: "Romance" },
// ];

export interface CatProp{
  catList:CategoryItem[];
}

export interface CategoryBookProp{
  bookList_category:BookItem[];
}



export const bookList = [
  {
    bookId: 1001,
    title: "And Then There Were None",
    author: "Agatha Chistie",
    price: 1000,
    isPublic: true,
  },
  {
    bookId: 1002,
    title: "Halloween Party",
    author: "Agatha Chistie",
    price: 995,
    isPublic: false,
  },
  {
    bookId: 1003,
    title: "The Murder of Roger Ackroyd",
    author: "Agatha Chistie",
    price: 2005,
    isPublic: true,
  },
  {
    bookId: 1004,
    title: "The Murder on the Links",
    author: "Agatha Chistie",
    price: 1095,
    isPublic: true,
  },
];

//this interface represents the items(books) in our shopping cart
export class ShoppingCartItem {
  id:number;
  book: BookItem;
  quantity: number;

  constructor(theBook: BookItem) {
    this.id = theBook.bookId;
    this.book = theBook;
    this.quantity = 1;
  }
}
// this is used by the reducer. You can define it on the CartReducer
export const initialCartState:ShoppingCartItem[] =  [];


export const months: string[] = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const years = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
export interface CustomerForm {
  name: string;
  address: string;
  phone: string;
  email: string;
  ccNumber: string;
  ccExpiryMonth: number;
  ccExpiryYear: number;
}

export interface Order {
  orderId: number;
  amount: number;
  dateCreated: number;
  confirmationNumber: number;
  customerId: number;
}

// export interface OrderDetails {
//   order: Order;
//   customer: CustomerForm;
//   books: BookItem[];
// }

export interface ServerErrorResponse {
  reason: string;
  message: string;
  fieldName: string;
  error: boolean;
}

export interface CustomerForm {
  name: string;
  address: string;
  phone: string;
  email: string;
  ccNumber: string;
  ccExpiryMonth: number;
  ccExpiryYear: number;
}

export interface Order {
  orderId: number;
  amount: number;
  dateCreated: number;
  confirmationNumber: number;
  customerId: number;
}

// export interface OrderDetails {
//   order: Order;
//   customer: CustomerForm;
//   books: BookItem[];
// }

export interface ServerErrorResponse {
  reason: string;
  message: string;
  fieldName: string;
  error: boolean;
}


export interface Order {
  orderId: number;
  amount: number;
  dateCreated: number;
  confirmationNumber: number;
  customerId: number;
}

export interface LineItem {
  bookId: number;
  orderId: number;
  quantity: number;
}
export interface Customer {
  customerName: string;
  address: string;
  phone: string;
  email: string;
  ccNumber: string;
  ccExpDate: number;
}

export interface OrderDetails {
  order: Order;
  customer: Customer;
  books: BookItem[];
  lineItems: LineItem[];
}