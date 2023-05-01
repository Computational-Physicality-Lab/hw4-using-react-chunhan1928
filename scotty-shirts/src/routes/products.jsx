import { Link } from "react-router-dom"
import shirts from "../shared/shirts"
import "./products.css"

export default function Products() {
    let products = shirts.map(shirt =>
        <Product
            name={shirt.name || "No Name"}
            colors={shirt.colors || {}}
            defaultImages={shirt.default || {}}
            key={shirt.name} />
    )
    return (
        <div id="products-content">
            <h2>Our T-Shirts</h2>
            <div id="products-menu">
                {products}
            </div>
        </div>
    )
}

function Product({ name, colors, defaultImages }) {
    let images = findFisrtValidImages(colors, defaultImages)
    let colorCount = Object.keys(colors).length
    return (
        <div className="product">
            <img src={images.front} alt={name} />
            <h3>{name}</h3>
            <p>Available in {colorCount} colors</p>
            <Link to={`/product/${name}`}><button>See Page</button></Link>
        </div>
    )

    function findFisrtValidImages(colors = {}, defaultImages = {}) {
        let images = defaultImages
        for (let key of Object.keys(colors)) {
            if (colors[key]["front"] && colors[key]["back"]) {
                images = colors[key]
                break
            }
        }
        return images
    }
}