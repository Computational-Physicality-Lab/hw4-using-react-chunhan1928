import shirts from "../shared/shirts"
import no_shirt from "../shared/no_shirt";
import { useParams } from "react-router-dom"
import { useState } from "react";
import './product.css'

export default function Product() {
    const [side, setSide] = useState('front')
    const [color, setColor] = useState('white')
    const { id } = useParams();
    const shirt = shirts.filter(shirt => shirt.name === id)[0] || no_shirt
    const image = shirt['colors'][color][side] || shirt['default'][side] || shirt['default']['front'] || ''

    return (
        <div id="content">
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
                        <span>Side:</span>
                        <button onClick={() => { setSide('front') }}>Front</button>
                        <button onClick={() => { setSide('back') }}>Back</button>
                    </nav>
                    <nav id="shirt-color-nav">
                        <span>Color:</span>
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
                </div>
            </div>
        </div>
    )
}