
import HomeCategoryList from './HomeCategoryList';
import '../assets/css/global.css';
import '../assets/css/Home.css'
import { FunctionComponent } from "react";
import {Link} from "react-router-dom";



function Home() {
    return (

        <div className="welcome-page">
            <div className="desktop-1">
                <div className="middle" />
                <div className="add-to-cart-button">
                    <div className="button-contained">
                        <img className="icon" alt="" src="/icon.svg" />
                        <b className="label"> Cart</b>
                        <img className="icon" alt="" src="/iconright.svg" />
                    </div>
                    <img className="vector-icon" alt="" src="/vector.svg" />
                </div>
                <div className="avatar">
                    <img
                        className="avatar-indicator"
                        alt=""
                        src="/avatar--indicator.svg"
                    />
                    <div className="text">
                        <div className="subtitle">Taeesh Azal Assadi</div>
                        <div className="body">Logged in</div>
                    </div>
                </div>
                <div className="discover-mooneys-where-container">
                    <p className="discover-mooneys">{`Discover Mooney's: `}</p>
                    <p className="discover-mooneys">Where Every Page Welcomes!</p>
                </div>
                <div className="use-code-container">
                    <p className="discover-mooneys">Use Code : BLACKFRIDAY</p>
                    <p className="discover-mooneys"> For flat 30% off</p>
                </div>
                <div className="the-maid-is-container">
                    <p className="discover-mooneys">{`The Maid is now `}</p>
                    <p className="discover-mooneys"> 10% off</p>
                </div>
                <div className="ny-times-best-seller">NY Times best-seller</div>
                <img className="image-1-icon" alt="" src={require('../assets/images/Welcome/neverlie.png')}/>
                <img className="image-2-icon" alt="" src={require('../assets/images/Welcome/agoodgirlsguidetomurder.png')} />
                <img className="image-3-icon" alt="" src={require('../assets/images/Welcome/themaid.png')}/>
                <div className="welcome-to-mooneys">
                    Welcome to Mooney's your literary haven! We're delighted to have you
                    here, where the magic of books comes to life. Whether you're an avid
                    reader, a casual book lover, or just looking for your next great read,
                    Mooney's has something special waiting for you on our shelves. Explore
                    the world of literature, get lost in captivating stories, and embark
                    on new adventures between the pages. Our friendly staff is here to
                    assist you in finding the perfect book to accompany you on your
                    journey. So, relax, browse, and let the joy of reading begin at
                    Mooney's Bookstore!
                </div>
                <Link to="/categories/Romance">
                <button className="primary-button">BUY NOW</button>
                </Link>
            </div>
        </div>
    )
}

export default Home;
