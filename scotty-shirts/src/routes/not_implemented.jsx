import scottyImg from '../assets/images/scotty.png'
import './not_implemented.css'

export default function NotImplemented() {
    return (
        <div id="content">
            <img id="not-implemented-img" src={scottyImg} alt="scotty.png" />
            <p>Oops, this page does not existed yet... How about a shirt from the last page?</p>
        </div>
    )
}