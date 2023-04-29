export default function Details() {
    return (
        <div id="content">
            <h2 id="shirt-name">Shirt Name</h2>
            <div id="shirt-data">
                <img id="shirt-img" />
                <div id="shirt-detail">
                    <h3 id="shirt-price">$0.00</h3>
                    <p id="shirt-description">shirt-description</p>
                    <nav id="shirt-side-nav">
                        <span>Side:</span>
                        <button onClick="chooseColorSide(null, 'front')">Front</button>
                        <button onClick="chooseColorSide(null, 'back')">Back</button>
                    </nav>
                    <nav id="shirt-color-nav">
                        <span>Color:</span>
                    </nav>
                </div>
            </div>
        </div>
    )
}