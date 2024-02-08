import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: { cartArray: [] },
    reducers: {
        addToCart: (state, action) => {
            state.cartArray.push(action.payload);
        },
        removeCart: (state, action) => {
            let index = state.cartArray.findIndex(item => item.id === action.payload.id);
            if (index !== -1) {

                state.cartArray.splice(index, 1);
            }
        }
    }
})


export const { addToCart, removeCart } = cartSlice.actions
export default cartSlice.reducer;