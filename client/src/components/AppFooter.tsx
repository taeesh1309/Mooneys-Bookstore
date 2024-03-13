import '../assets/css/AppFooter.css'
import '../assets/css/global.css'
import {Link} from "react-router-dom";
import { FunctionComponent } from "react";


function AppFooter(){
return(
    <footer className="container">
        <div className="footer">
            <div className="background-parent">
                <div className="links">
                    <div className="all-rights-reserved">All Rights Reserved</div>
                    <div className="all-rights-reserved">Contact Us</div>
                    <div className="all-rights-reserved">Get Directions</div>
                    <div className="all-rights-reserved">Mooneys.com</div>
                    <div className="all-rights-reserved">Follow us</div>
                    <img className="fb-icon" alt="" src={require('../assets/images/footer/fb.png')} />
                    <img className="insta-icon" alt="" src={require('../assets/images/footer/insta.png')} />
                    <img className="twitter-icon" alt="" src={require('../assets/images/footer/twitter.png')} />
                </div>
            </div>
        </div>

    </footer>
)
}
export default AppFooter;
