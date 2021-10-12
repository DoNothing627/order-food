import { useReducer } from "react";
import CartContext from "./cart-context";

const deafultCartState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {
    if (action.type === "ADD") {
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;

        const isExistedIndex = state.items.findIndex((item) => item.id === action.item.id);
        const itemExisted = state.items[isExistedIndex];

        let updatedItem

        if (itemExisted) {
            const newItem = {
                ...itemExisted,
                amount: itemExisted.amount + action.item.amount
            }
            updatedItem = [...state.items]
            updatedItem[isExistedIndex] = newItem
        } else {
            updatedItem = state.items.concat(action.item);
        }

        return {
            items: updatedItem,
            totalAmount: updatedTotalAmount
        };
    }

    if (action.type === 'REMOVE') {
        const isExistedIndex = state.items.findIndex((item) => item.id === action.id);
        const itemExisted = state.items[isExistedIndex];
        const updatedTotalAmount = state.totalAmount - itemExisted.price;
        let updatedItem
        const newItem = {
            ...itemExisted,
            amount: itemExisted.amount - 1
        }

        if (newItem.amount === 0) {
            updatedItem = state.items.filter(item => item.id != action.id)
        } else {
            updatedItem = [...state.items]
            updatedItem[isExistedIndex] = newItem
        }

        return {
            items: updatedItem,
            totalAmount: updatedTotalAmount
        };
    }

    return deafultCartState;
}

const CartProvider = props => {
    const [cart, dispatch] = useReducer(cartReducer, deafultCartState);

    const addItemToCartHandle = item => {
        dispatch({ type: "ADD", item: item });
    }

    const removeItemToCartHandle = id => {
        dispatch({ type: "REMOVE", id: id });
    }

    const cartContext = {
        items: cart.items,
        totalAmount: cart.totalAmount,
        addItem: addItemToCartHandle,
        removeItem: removeItemToCartHandle
    }

    return (<CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>);
};

export default CartProvider;

// import { useReducer } from 'react';

// import CartContext from './cart-context';

// const defaultCartState = {
//     items: [],
//     totalAmount: 0
// };

// const cartReducer = (state, action) => {
//     if (action.type === 'ADD') {
//         console.log(state.items)
//         const updatedItems = state.items.concat(action.item);
//         const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
//         return {
//             items: updatedItems,
//             totalAmount: updatedTotalAmount
//         };
//     }
//     return defaultCartState;
// };

// const CartProvider = (props) => {
//     const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

//     const addItemToCartHandler = (item) => {
//         dispatchCartAction({ type: 'ADD', item: item });
//     };

//     const removeItemFromCartHandler = (id) => {
//         dispatchCartAction({ type: 'REMOVE', id: id });
//     };

//     const cartContext = {
//         items: cartState.items,
//         totalAmount: cartState.totalAmount,
//         addItem: addItemToCartHandler,
//         removeItem: removeItemFromCartHandler,
//     };

//     return (
//         <CartContext.Provider value={cartContext}>
//             {props.children}
//         </CartContext.Provider>
//     );
// };

// export default CartProvider;