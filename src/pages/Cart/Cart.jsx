import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { clearCart } from "../../utils/cartSlice"
import CartItem from "./CartItem"

const Cart = () => {
    const cartItems = useSelector(store => store.cart.items)
    let [subTotal, setSubTotal] = useState(0)
    const dispatch = useDispatch()

    return (
        <div className="mt-28 flex justify-center h-[400px] mb-10">
            <div className="w-[1300px] shadow-md h-fit p-4 rounded-xl">
                <div className="flex justify-around items-center pr-28">
                    <p className="font-bold w-[500px] flex justify-center">Item</p>
                    <p className="font-bold">Price</p>
                    <p className="font-bold">Quantity</p>
                    <p className="font-bold">Total Price</p>
                </div>
                {cartItems.map(item => {
                    return (
                        <CartItem {...item} key={item.id} dispatch={dispatch} />
                    )
                })}
                <div className="bg-orange-400 h-[1px] mx-2"></div>
                <div className="my-4 flex justify-end items-center mr-48">
                    <p className="font-bold">Amount to pay: ৳ {subTotal}</p>
                </div>
                <div className="flex justify-evenly items-center">
                    <button
                        className="bg-orange-500 px-5 py-2 rounded-xl"
                        onClick={() => dispatch(clearCart())}
                    >Clear Cart</button>
                    <button className="bg-orange-500 px-5 py-2 rounded-xl">Confirm Order</button>
                </div>
            </div>
        </div>
    )
}

export default Cart
