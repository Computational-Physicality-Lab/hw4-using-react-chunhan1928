import shirts from "../shared/shirts"
import no_shirt from "../shared/no_shirt"
import { arrayRange, findValidImage } from "../utils"
import { Link } from "react-router-dom"
import './cart.css'

export default function Cart({ cartItems, handleRemoveFromCart, handleChangeQuantity }) {
    const subTotal = calcSubTotal(shirts, cartItems)
    const estShipping = 6.95
    const cartShirtsNum = cartItems.reduce(
        (accumulator, item) => {
            return accumulator + Number(item.quantity)
        }, 0)
    return (
        <div id='cart-content'>
            <h2>My Cart ({cartShirtsNum})</h2>
            <div id="cart-detail">
                <div id="cart-items">
                    {cartItems == 0 ?
                        <h3>Your Cart Is Empty</h3> :
                        cartItems.map(item =>
                            <CartItem item={item} key={item.id}
                                handleRemoveFromCart={handleRemoveFromCart}
                                handleChangeQuantity={handleChangeQuantity} />)
                    }
                </div>
                <div id="cart-utils">
                    <div id="cart-invoice">
                        <h3>Order Summary</h3>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Subtotal</td>
                                    <td>$ {subTotal}</td>
                                </tr>
                                <tr>
                                    <td>Est. Shipping</td>
                                    <td>$ {estShipping}</td>
                                </tr>
                                <tr>
                                    <td>Total</td>
                                    <td>$ {(subTotal + estShipping).toFixed(2)}</td>
                                </tr>
                            </tbody>
                        </table>
                        <Link to="/not-implemented"><button>Sign in and CheckOut</button></Link>
                    </div>
                    <Link to="/products"><button id="cart-continueShopping">Contiue Shopping</button></Link>
                </div>


            </div>
        </div>
    )
}

function CartItem({ item, handleRemoveFromCart, handleChangeQuantity }) {
    const shirt = shirts.filter(shirt => shirt.name === item.name)[0] || no_shirt
    const shirtImage = findValidImage(shirt, item.color, item.side)

    return (
        <div className="cartItem">
            <h3>{item.name}</h3>
            <div className="cartItem-data">
                <Link to={`/products/${item.name}`}><img src={shirtImage} alt="" /></Link>
                <div className="cartItem-detail">
                    <div className="cartItem-quantity">
                        <label>Quantity: </label>
                        <select
                            defaultValue={item.quantity}
                            onChange={(e) => { handleChangeQuantity(item.id, e.target.value) }}>
                            {arrayRange(1, 20, 1).map(num =>
                                <option key={num}>{num}</option>
                            )}
                        </select>
                    </div>
                    <div className="cartItem-color">
                        <label>Color: </label>
                        <span>{item.color}</span>
                    </div>
                    <div className="cartItem-size">
                        <label>Size: </label>
                        <span>{item.size}</span>
                    </div>
                    <div className="cartItem-price">
                        <label>Price(each): </label>
                        <span>{shirt.price}</span>
                    </div>
                    <button
                        className="cartItem-remove"
                        onClick={() => { handleRemoveFromCart(item.id) }}>
                        Remove
                    </button>
                </div>
            </div>
        </div>
    )
}

function calcSubTotal(shirts, cartItems) {
    let subTotal = 0
    for (let item of cartItems) {
        let shirt = shirts.filter((shirt) => shirt.name == item.name)[0]
        let singlePrice = Number(shirt.price.split('$').join(''))
        let itemShirtNum = Number(item.quantity)
        subTotal += (singlePrice * itemShirtNum)
    }
    return Number(subTotal.toFixed(2))
}