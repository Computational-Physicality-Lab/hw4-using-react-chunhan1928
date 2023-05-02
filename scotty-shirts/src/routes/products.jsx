import { Link } from "react-router-dom"
import shirts from "../shared/shirts"
import { findValidImage } from "../utils"
import "./products.css"

export default function Products() {
    return (
        <div id="products-content">
            <h2>Our T-Shirts</h2>
            <div id="products-menu">
                {shirts.map(shirt =>
                    <Product
                        shirt={shirt}
                        key={shirt.name} />
                )}
            </div>
        </div>
    )
}

function Product({ shirt }) {
    let name = shirt.name || "No Name"
    let colors = shirt.colors || {}
    let image = findValidImage(shirt, "", "front")
    let colorCount = Object.keys(colors).length
    return (
        <div className="product">
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <p>Available in {colorCount} colors</p>
            <Link to={`${name}`}><button>See Page</button></Link>
        </div>
    )
}