import { Link } from "react-router-dom"
import logo from "../assets/images/logo.png"
import cart from "../assets/images/cart.png"
import './header.css'

export default function Header({ cartShirtsNum }) {
    return (
        <header>
            <div id="header-title">
                <Link to="/"><img src={logo} alt="logo.png" /></Link>
                <h1>Scotty Shirt U Illustrate (SSUI)</h1>
                <Link id='header-title-cart' to='cart'>
                    <img src={cart} alt="cart" />
                    <div>{cartShirtsNum}</div>
                </Link>
            </div>
            <nav id="header-nav">
                <ul>
                    <li><Link to="/products">T-SHIRT</Link></li>
                    <li><Link to="/not-implemented">CREATE FROM IMAGE</Link></li>
                    <li><Link to="/not-implemented">CREATE OUR OWN</Link></li>
                    <li><Link to="/not-implemented">ABOUT US</Link></li>
                    <li><Link to="/not-implemented">LOGIN</Link></li>
                </ul>
            </nav>
        </header>
    )
}