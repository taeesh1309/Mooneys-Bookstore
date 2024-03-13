import HeaderDropdown from './HeaderDropdown';
import '../assets/css/global.css'
import '../assets/css/AppHeader.css';
import { Link } from 'react-router-dom';
// import {categoryList} from '../types';
import {FunctionComponent, useContext} from "react";
import {CategoryItem} from "../types";
import {Category} from "../contexts/CategoryContext";
import CartContext, {CartStore} from "../contexts/CartContext";
import {CartTypes} from "../reducers/CartReducer";
function AppHeader(){

    const catList = useContext<CategoryItem[]>(Category);

    const cart = useContext(CartStore);
    console.log(cart.cart,"cart");

    const cartCount = cart.cart.reduce((total, item) => total + item.quantity, 0);

    // const cartCount = 0;




    return(

        <header className="container">
            <div className="header">
                <div className="app-bar">
                    <div className="background17">
                        <div className="surface1" />
                    </div>
                    <div className="top1">
                        <div className="left1">
                            <div className="lead-icon1">
                                <div className="icon-menu2">
                                    <div className="frame20">
                                        <div className="outline3" />
                                        <img className="icon30" alt="" src="/icon9.svg" />
                                        <div className="badge25">
                                            <div className="div25">2</div>
                                        </div>
                                        <div className="indicator18" />
                                    </div>
                                    <div className="label27">
                                        <div className="text27">Label</div>
                                    </div>
                                </div>
                            </div>
                            <img
                                className="logo-icon1"
                                alt=""
                                src="/coloronsurface-sizedense.svg"
                            />
                            <div className="app-name2"> MOONEY’S</div>
                        </div>
                        <div className="middle1">
                            <div className="search1">
                                <div className="frame21">
                                    <div className="container2">
                                        <div className="container-l-color2" />
                                        <div className="states2" />
                                    </div>
                                    <img className="primary-icon6" alt=""  />
                                    <div className="data2">
                                        <div className="prefix2">
                                            <div className="prefix-text2">EUR</div>
                                        </div>
                                        <div className="input2">
                                            <div className="input-text2">Input text</div>
                                            <div className="cursor4" />
                                        </div>
                                        <div className="placeholder2">
                                            <div className="cursor4" />
                                            <div className="prefix-text2">search...</div>
                                        </div>
                                    </div>
                                    <div className="label28">Label</div>
                                    <img
                                        className="leading-icon2"
                                        alt=""
                                        src="/leading-icon1.svg"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="right1">
                            <div className="launchpad1">
                                <img className="primary-icon7" alt="" src="/primary.svg" />
                                <b className="label29">Categories</b>
                                <img className="primary-icon7" alt="" src="/primary1.svg" />
                            </div>
                            <div className="icons1">
                                <div className="icon-launchpad2">
                                    <div className="frame20">
                                        <div className="background18" />
                                        <img className="icon30" alt="" src="/icon12.svg" />
                                        <div className="badge25">
                                            <div className="div25">2</div>
                                        </div>
                                        <div className="indicator18" />
                                    </div>
                                    <div className="label27">
                                        <div className="text27">Label</div>
                                    </div>
                                </div>
                                <div className="lead-icon1">
                                    <div className="icon-menu2">
                                        <div className="frame20">
                                            <div className="background18" />
                                            <img className="icon30" alt="" src="/leading-icon1.svg" />
                                            <div className="badge25">
                                                <div className="div25">2</div>
                                            </div>
                                            <div className="indicator18" />
                                        </div>
                                        <div className="label27">
                                            <div className="text27">Label</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="icon-launchpad2">
                                    <div className="frame20">
                                        <div className="background18" />
                                        <img className="icon30" alt="" src="/icon2.svg" />
                                        <div className="badge25">
                                            <div className="div25">2</div>
                                        </div>
                                        <div className="indicator18" />
                                    </div>
                                    <div className="label27">
                                        <div className="text27">Label</div>
                                    </div>
                                </div>
                                <div className="icon-menu2">
                                    <div className="frame20">
                                        <div className="background18" />
                                        <img className="icon30" alt="" src="/icon5.svg" />
                                        <div className="badge25">
                                            <div className="div25">2</div>
                                        </div>
                                        <div className="indicator18" />
                                    </div>
                                    <div className="label27">
                                        <div className="text27">Label</div>
                                    </div>
                                </div>
                                <div className="icon-launchpad2">
                                    <div className="frame20">
                                        <div className="background18" />
                                        <img className="icon30" alt="" src="/icon13.svg" />
                                        <div className="badge25">
                                            <div className="div25">2</div>
                                        </div>
                                        <div className="indicator18" />
                                    </div>
                                    <div className="label27">
                                        <div className="text27">Label</div>
                                    </div>
                                </div>
                                <div className="icon-menu2">
                                    <div className="frame20">
                                        <div className="background18" />
                                        <img className="icon30" alt="" src="/icon7.svg" />
                                        <div className="badge25">
                                            <div className="div25">2</div>
                                        </div>
                                        <div className="indicator18" />
                                    </div>
                                    <div className="label27">
                                        <div className="text27">Label</div>
                                    </div>
                                </div>
                                <div className="icon-menu2">
                                    <div className="frame20">
                                        <div className="background18" />
                                        <img className="icon30" alt="" src="/icon8.svg" />
                                        <div className="badge25">
                                            <div className="div25">2</div>
                                        </div>
                                        <div className="indicator18" />
                                    </div>
                                    <div className="label27">
                                        <div className="text27">Label</div>
                                    </div>
                                </div>
                            </div>
                            <div className="avatar1">
                                <img className="avatar-icon2" alt="" src="/avatar2.svg" />
                            </div>
                            <div className="buttons1">
                                <div className="button-contained3">
                                    <img className="icon38" alt="" src="/icon.svg" />
                                    <b className="label29">Sign in</b>
                                    <img className="icon38" alt="" src="/iconright2.svg" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="extended-with-tabs1">
                        <div className="border2" />
                        <div className="tabs-underlined1">
                            <div className="buttons1">
                                <div className="tab-011">
                                    <div className="content9">
                                        <img className="icon39" alt="" src="/icon14.svg" />
                                        <b className="text35">One</b>
                                        <div className="badge33">
                                            <div className="div25">8</div>
                                        </div>
                                        <img className="arrow-icon7" alt="" src="/arrow2.svg" />
                                    </div>
                                    <div className="divider7" />
                                </div>
                                <div className="tab-021">
                                    <div className="content9">
                                        <img className="icon39" alt="" src="/icon15.svg" />
                                        <b className="text35">Two</b>
                                        <div className="badge34">
                                            <div className="div25">8</div>
                                        </div>
                                        <img className="arrow-icon7" alt="" src="/arrow3.svg" />
                                    </div>
                                    <div className="divider7" />
                                </div>
                                <div className="tab-021">
                                    <div className="content9">
                                        <img className="icon39" alt="" src="/icon15.svg" />
                                        <b className="text35">Three</b>
                                        <div className="badge34">
                                            <div className="div25">8</div>
                                        </div>
                                        <img className="arrow-icon7" alt="" src="/arrow3.svg" />
                                    </div>
                                    <div className="divider7" />
                                </div>
                                <div className="tab-021">
                                    <div className="content9">
                                        <img className="icon39" alt="" src="/icon15.svg" />
                                        <b className="text35">Four</b>
                                        <div className="badge34">
                                            <div className="div25">8</div>
                                        </div>
                                        <img className="arrow-icon7" alt="" src="/arrow3.svg" />
                                    </div>
                                    <div className="divider7" />
                                </div>
                                <div className="tab-021">
                                    <div className="content9">
                                        <img className="icon39" alt="" src="/icon15.svg" />
                                        <b className="text35">Five</b>
                                        <div className="badge34">
                                            <div className="div25">8</div>
                                        </div>
                                        <img className="arrow-icon7" alt="" src="/arrow3.svg" />
                                    </div>
                                    <div className="divider7" />
                                </div>
                                <div className="tab-061">
                                    <div className="content9">
                                        <img className="icon39" alt="" src="/icon15.svg" />
                                        <b className="text35">Six</b>
                                        <div className="badge34">
                                            <div className="div25">8</div>
                                        </div>
                                        <img className="arrow-icon7" alt="" src="/arrow3.svg" />
                                    </div>
                                    <div className="divider7" />
                                </div>
                                <div className="tab-061">
                                    <div className="content9">
                                        <img className="icon39" alt="" src="/icon15.svg" />
                                        <b className="text35">Seven</b>
                                        <div className="badge34">
                                            <div className="div25">8</div>
                                        </div>
                                        <img className="arrow-icon7" alt="" src="/arrow3.svg" />
                                    </div>
                                    <div className="divider7" />
                                </div>
                                <div className="empty1">
                                    <div className="background25" />
                                </div>
                            </div>
                        </div>
                        <div className="border3" />
                    </div>
                    <div className="extended-with-title1">
                        <div className="app-name3">
                            <div className="text42">I’m a title</div>
                        </div>
                    </div>
                </div>
                <div className="logged-in-info">
                    <div className="component">
                        <img className="avatar-icon2" alt="" src={require('../assets/images/header/user.png')} />
                        <div className="text43">
                            <div className="div25">Taeesh Azal Assadi</div>
                            <div className="text27">Logged in</div>
                        </div>
                    </div>
                    <img className="profile-icon" alt="" src="/profile-icon.svg" />
                </div>
                <Link to="/cart">
                <div className="cart-button">

                    <div className="add-to-cart-button1">

                            <button className="button-contained4">
                                <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cart&nbsp;&nbsp;
                                    {cartCount === 0 ? null :
                                        <span className="card-counter">{cartCount}</span>}
                                     </b>
                                <img className="vector-icon1" alt="" src={require('../assets/images/header/cart.png')} />

                            </button>


                    </div>

                </div>
            </Link>

                <div className="search-box">

                    <div className="box">
                        <button>
                            <img className="search-icon1" alt="" src={require('../assets/images/header/Search.png')} />
                        </button>
                        <input type="text" name="" placeholder ="Search..."/>

                    </div>
                    {/*<input type="text" className="search-bar" />*/}
                    {/*<input type="submit" className="button search-button" value="Search" />*/}

                </div>
                <div className="header-dropdown">

                    <button className="categories-button">
                        <img className="primary-icon7" alt="" src={require('../assets/images/header/breadcrumb.png')} />

                        <b className="label29">Categories</b>


                    </button>




                    <ul>
                        <ul>
                            {catList.map((item) =>    <li>
                                <Link to ={`/categories/${item.name}`}>
                                    {item.name}
                                </Link>
                            </li>)}

                        </ul>
                    </ul>

                </div>

                <div className="logo-and-book-name">

                <Link to="/">
                    <div className="book-name"> MOONEY’S</div>
                </Link>
                    <Link to="/">
                    <img className="book-logo-icon" alt="" src={require('../assets/images/header/Logo.png')} />
                    </Link>
                    </div>


            </div>

        </header>
    )
}
export default AppHeader;

