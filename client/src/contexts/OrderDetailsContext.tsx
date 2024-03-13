import {OrderDetails, ShoppingCartItem} from "../types";
import {createContext, Dispatch, useReducer} from "react";
import {orderDetailReducer} from "../reducers/OrderDetailsReducer";


const initialOrderDetails: OrderDetails= {
    order: {
        orderId: 0,
        amount: 0,
        dateCreated: 0,
        confirmationNumber: 0,
        customerId: 0
    },
    customer: {



        email: '',
        phone: '',
        address: '',
        ccNumber: '',
        ccExpDate: 0,
        customerName: ''


    },
    books: [],
    lineItems: []
};


export const OrderDetailStore = createContext<{
    orderDetails: OrderDetails;
    dispatch2: Dispatch<any>;
}>({
    orderDetails: initialOrderDetails,
    dispatch2: () => null
});





// @ts-ignore
function OrderDetailsContext({ children }) {
    const storeageKey = 'orderDetails';

    const [cart, dispatch2] = useReducer(
        orderDetailReducer as unknown as React.Reducer<OrderDetails, any>,
        initialOrderDetails,
        (initialState) =>{
            try {
                const storedCart = JSON.parse(localStorage.getItem(storeageKey) || '[]');
                return storedCart as OrderDetails || initialState;
            } catch (e) {
                console.log('Error while reading fro~m localStorage', e);
                return initialState;
            }
        }
    );

    return (
        <OrderDetailStore.Provider value={{ orderDetails: cart, dispatch2 }}>
            {children}
        </OrderDetailStore.Provider>

    );
}

export default OrderDetailsContext;