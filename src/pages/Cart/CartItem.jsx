import { FOOD_IMG_URL } from "../../assets/img/images"
import { MdDeleteForever } from "react-icons/md"
import { removeItem
    
 } from "../../utils/cartSlice"
const CartItem = ({ id, resName, imageId, name, price, quantity, dispatch }) => (
    <div className="flex justify-between items-center my-4 p-2">
        <div className="w-[500px] flex">
            <img src={FOOD_IMG_URL + imageId} className="w-20 h-20 object-cover" />
            <div className="ml-5">
                <p className="font-bold">{name}</p>
                <p className="text-gray-700 text-sm">{resName}</p>
            </div>
        </div>
        <div>৳ {price}</div>
        <div>{quantity}</div>
        <div>৳ {price * quantity}</div>
        <div>
            <MdDeleteForever
                className="text-red-600 text-2xl cursor-pointer"
                onClick={() => dispatch(removeItem(id))}
            />
        </div>
    </div>
)

export default CartItem