import { useContext } from "react"
import classes from "./Cart.module.css"
import Modal from "../UI/Modal"
import CartItem from "./CartItem"
import CartContext from "../../store/cart-context"

export default function Cart(props) {
    const cartCtx = useContext(CartContext)
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`
    const hasItems = cartCtx.items.length > 0

    const onAddItem = (item) => {
        cartCtx.addItem({ ...item, amount: 1 })
    }

    const onRemoveItem = (id) => { cartCtx.removeItem(id) }


    const cartitems = <ul className={classes['cart-items']}>
        {cartCtx.items.map(item =>
            <li><CartItem
                key={item.id}
                name={item.name}
                price={item.price}
                amount={item.amount}
                onAdd={onAddItem.bind(null, item)}
                onRemove={onRemoveItem.bind(null, item.id)} /></li>)}
    </ul>

    return <>
        <Modal onCloseCart={props.onCloseCart}>
            {cartitems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onCloseCart}>Close</button>
                {hasItems && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    </>
}