import { Link } from "react-router-dom"
import './footer.css'

export default function Footer() {
    return (
        <footer>
            <nav id="footer-nav">
                <ul>
                    <li><Link to={`/not-implemented`}>Contact Us</Link></li>
                    <li><Link to={`/not-implemented`}>Site Map</Link></li>
                    <li><Link to={`/not-implemented`}>Privacy Policy</Link></li>
                    <li><Link to={`/not-implemented`}>Career</Link></li>
                    <li><Link to={`/not-implemented`}>Reviews</Link></li>
                </ul>
            </nav>
            <div id="credit">Desinged by Chun-Han Chen</div>
        </footer>
    )
}