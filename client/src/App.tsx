import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import Home from './components/Home'
import CategoryBookList from './components/CategoryBookList';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Confirmation from './components/Confirmation';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"
import {useContext, useEffect, useState} from "react";
import axios from "axios";
import CategoryContext, {Category} from "./contexts/CategoryContext";
import {CategoryItem} from "./types";


function App() {






  // return (
  //     <Router basename="TaeeshBookstoreReact">
  //       <AppHeader />
  //       <Routes>
  //         <Route path="/" element={<Home />} />
  //         <Route path="/categories/*" element={<CategoryBookList />} />
  //         <Route path="*" element={<div>Page Not Found</div>} />
  //       </Routes>
  //
  //       <AppFooter />
  //
  //     </Router>
  // );
    return (
        <Router basename={"TaeeshBookstoreReactTransact"}>
            <AppHeader />
            <Routes>home
                <Route path="/" element={<Home />} />
                <Route path="/categories" element={<CategoryBookList />} >
                    <Route
                        path="/categories/:id"
                        element-={<CategoryBookList/>}
                        />
                    </Route>
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/confirmation" element={<Confirmation />} />


                <Route path="*" element={<div>Page Not Found</div>} />

            </Routes>


            <AppFooter />

        </Router>
    );

}

export default App;

