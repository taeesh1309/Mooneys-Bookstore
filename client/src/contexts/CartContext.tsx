import {createContext, Dispatch, useReducer} from "react";
import {cartReducer, } from "../reducers/CartReducer";
import { ShoppingCartItem} from "../types";

const initialCartState:ShoppingCartItem[] =  []
export const CartStore = createContext<{
    cart: ShoppingCartItem[];
    dispatch: Dispatch<any>;
}>({
    cart: initialCartState,
    dispatch: () => null
});

CartStore.displayName = 'CartContext';

// the rest of the code comes here
// @ts-ignore
function CartContext ({ children })  {
    const storagekey = 'cart';
    const [cart, dispatch] = useReducer(cartReducer as React.Reducer<ShoppingCartItem[], any>, initialCartState
        , (initialState) => {
            try {
                const storedCart = JSON.parse(localStorage.getItem(storagekey) || '[]');
                return storedCart as ShoppingCartItem[] || initialState;
            } catch (e) {
                return initialState;
            }
        }
    );
    return (
        <CartStore.Provider value={{ cart, dispatch }}>{children}</CartStore.Provider>
    );
}


export default CartContext;