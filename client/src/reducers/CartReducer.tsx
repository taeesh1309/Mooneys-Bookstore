import {ShoppingCartItem, BookItem} from "../types";
import {Dispatch, ReducerAction} from "react";


export const CartTypes = {
    ADD: 'ADD',
    REMOVE: 'REMOVE',
    CLEAR:'CLEAR'
};

type AppActions = {
    id:number;
    type: 'ADD' | 'REMOVE'  | 'CLEAR';
    item: BookItem;
}
export const cartReducer = (state:ShoppingCartItem[], action:AppActions) => {
    switch (action.type) {
        case CartTypes.ADD:
            /*
                The following only added the item in the cart for the first time with quantity 1.
                You have to handle the increment of the quantity if the item
                is already in the cart
              */

            //check if item index is not equal to -1

            // state = [];

            console.log("state", state)


            const existingItem = state.find((item) => item.id === action.id);

            if(existingItem){

                // console.log("item already in cart")

                const newState =
                    state.map((item) =>
                        item.book.bookId === action.item.bookId
                        ? {...item, quantity: item.quantity + 1 , book: action.item}
                        : item
                    );
                localStorage.setItem('cart', JSON.stringify(newState));
                return newState;
            } //TODO

            localStorage.setItem('cart', JSON.stringify(state));
            return [
                ...state,
                {id: action.id, quantity: 1, book: action.item}
            ];
        case CartTypes.REMOVE:
            /*
               will be defiend in Project 7
             */
            const itemIndex= state.findIndex((item) => item.id === action.id);
            if(itemIndex !== -1){

                // console.log("item already in cart")

                //item is already in the cart increase its quantity
                const newState =
                    [
                        ...state.slice(0, itemIndex),
                        {...state[itemIndex], quantity: state[itemIndex].quantity - 1 , book: action.item},
                        ...state.slice(itemIndex + 1)
                    ]

                // TODO


                localStorage.setItem('cart', JSON.stringify(newState));
                return newState;
            }


            return state;
        case CartTypes.CLEAR:

            localStorage.setItem('cart', JSON.stringify([]));
            return [];
        default:
            throw new Error(`Invalid action type ${action.type}`);
    }
};