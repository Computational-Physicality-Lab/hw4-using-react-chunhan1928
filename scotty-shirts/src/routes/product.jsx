import shirts from "../shared/shirts"
import no_shirt from "../shared/no_shirt";
import { useParams } from "react-router-dom"
import { useState } from "react";
import './product.css'

const sizeList = ['Size', 'Women’s XS', 'Women’s S', 'Women’s M', 'Women’s L', 'Women’s XL', 'Women’s 2XL',
    'Men’s XS', 'Men’s S', 'Men’s M', 'Men’s L', 'Men’s XL', 'Men’s 2XL']

export default function Product() {
    const [side, setSide] = useState('front')
    const [color, setColor] = useState('white')
    const [size, setSize] = useState('Size:')
    const [quantity, setQuantity] = useState(1)
    const { id } = useParams();
    const shirt = shirts.filter(shirt => shirt.name === id)[0] || no_shirt
    const image = shirt['colors'][color][side] || shirt['default'][side] || shirt['default']['front'] || ''
    const addToCartBtnDisabled = Boolean(!shirt.price || size === 'Size:')

    return (
        <div id="product-content">
            <h2 id="shirt-name">{shirt.name || "No Name"}</h2>
            <div id="shirt-data">
                <img id="shirt-img" src={image} />
                <div id="shirt-detail">
                    <h3 id="shirt-price">
                        {shirt.price || "No Price"}
                    </h3>
                    <p id="shirt-description">
                        {shirt.description || "No Description"}
                    </p>
                    <nav id="shirt-side-nav">
                        <label>Side: </label>
                        <button onClick={() => { setSide('front') }}>Front</button>
                        <button onClick={() => { setSide('back') }}>Back</button>
                    </nav>
                    <nav id="shirt-color-nav">
                        <label>Color: </label>
                        {Object.keys(shirt.colors).map(color =>
                            <button
                                onClick={() => { setColor(color) }}
                                key={color}
                                style={{ backgroundColor: color }}
                            >
                                {color}
                            </button>
                        )}
                    </nav>
                    <nav id="shirt-quantity-nav">
                        <label>Quantity: </label>
                        <select
                            id="shirt-quantity-nav-select"
                            defaultValue={0}
                            onChange={(e) => { setQuantity(e.target.value) }}>
                            {arrayRange(1, 20, 1).map((quantityOption) =>
                                <option key={quantityOption}>{quantityOption}</option>
                            )}
                        </select>
                    </nav>
                    <nav id="shirt-size-nav">
                        <label>Size: </label>
                        <select
                            id='shirt-size-nav-select'
                            defaultValue="Size"
                            onChange={(e) => { setSize(e.target.value) }}>
                            {sizeList.map((sizeOption) =>
                                sizeOption == 'Size:' ?
                                    <option disabled key={sizeOption}>{sizeOption}</option> :
                                    <option key={sizeOption}>{sizeOption}</option>
                            )}
                        </select>
                    </nav>
                    <button
                        id="shirt-addToCartBtn"
                        disabled={addToCartBtnDisabled}
                        onClick={() => {
                            console.log(side, color, size, quantity)
                            console.log(`addToCartBtnDisabled: ${addToCartBtnDisabled}`)
                        }}>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    )
}

function arrayRange(start, stop, step) {
    return Array.from(
        { length: (stop - start) / step + 1 },
        (value, index) => start + index * step
    );
}