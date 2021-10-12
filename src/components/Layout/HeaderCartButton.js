import { useContext, useEffect, useState } from "react"
import classes from "./HeaderCartButton.module.css"
import CartIcon from "../Cart/CartIcon"
import CartContext from "../../store/cart-context"


function HeaderCartButton(props) {
    const [isButtonHighlighted, setIsButtonHighlighted] = useState(false)
    const cartCtx = useContext(CartContext);
    //const { items } = cartCtx
    const numberOfCartItem = cartCtx.items.reduce((curNumber, item) => curNumber + item.amount, 0)

    const bntClass = `${classes.button} ${isButtonHighlighted ? classes.bump : ''}`

    useEffect(() => {
        //if (items.length === 0) return
        setIsButtonHighlighted(true);
        const timer = setTimeout(() => {
            setIsButtonHighlighted(false)
        }, 300)
        return () => {
            clearTimeout(timer)
        }
    }, [cartCtx])

    return <>
        <button className={bntClass} onClick={props.onOpenCart}>
            <span className={classes.icon}> <CartIcon /></ span>
            <span>Cart</span>
            <span className={classes.badge}>{numberOfCartItem}</span>
            {/* <span className={classes.badge}>0</span> */}
        </button>
    </>
}

export default HeaderCartButton;
