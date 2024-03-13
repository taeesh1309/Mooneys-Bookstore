// Create a new reducer with state "orderDetails" with a default value of empty object,
// and actions: "CLEAR' and "UPDATE', that clears and sets the state respectively.
// Clearing sets the state to empty object, and setting sets it to a specified value (you'll need a parameter).
// Take a look at the CartReducer we defined in P6.


import {OrderDetails} from "../types";

export const orderDetailTypes = {
    CLEAR: 'CLEAR',
    UPDATE: 'UPDATE'
}

type AppActions = {
    type: 'CLEAR' | 'UPDATE';
    item: OrderDetails;
}

export const orderDetailReducer = (state:OrderDetails, action:AppActions) => {
    const localStorageKey = 'orderDetails';
    switch (action.type) {
        case orderDetailTypes.CLEAR:
            localStorage.setItem(localStorageKey, JSON.stringify({}));
            return {};
        case orderDetailTypes.UPDATE:
            //update the order details in local storage
            localStorage.setItem(localStorageKey, JSON.stringify(action.item));
            return action.item;
        default:
            return state;
    }
}