import { useState } from "react";
import { FOOD_IMG_URL } from '../../assets/img/images';
import { useDispatch } from "react-redux";
import { addItem } from "../../utils/cartSlice";

const ItemCard = ({ id, resName, imageId, name, price, description }) => {
    let [quantity, setQuantity] = useState(0);
    const dispatch = useDispatch()

    function handleClick(){
        dispatch(addItem({
            id: id,
            resName: resName,
            imageId: imageId, 
            name: name, 
            price: price/100, 
            quantity: quantity,
        }))
    }

    return (
        <div className='flex rounded-xl shadow-md my-5'>
            <div className='w-[30%] h-72 p-3'>
                <img src={FOOD_IMG_URL + imageId} alt={name} className='h-full w-full object-cover rounded-2xl'/>
            </div>
            <div className='p-4 w-[70%]'>
                <div>
                    <h1 className='text-2xl font-bold'>{name}</h1>
                    <p className='text-gray-700 my-4'>{description}</p>
                    <p>৳ <span className='font-bold'>{price/100 || 0}</span> Taka</p>
                </div>
                <div className='flex items-center mt-4'>
                    <div 
                        className='bg-red-400 h-7 w-7 rounded-bl-md rounded-tl-md flex justify-center items-center text-xl cursor-pointer'
                        onClick={() => quantity > 0 ? setQuantity(quantity = quantity - 1): null}
                    >-</div>
                    <div className='bg-gray-300-500 h-7 w-8 flex justify-center items-center'>{quantity}</div>
                    <div 
                        className='bg-green-400 h-7 w-7 rounded-tr-md rounded-br-md flex justify-center items-center text-xl cursor-pointer'
                        onClick={() => setQuantity(quantity = quantity + 1)}
                    >+</div>
                    <button 
                        className="bg-orange-400 px-2 py-[2px] rounded-md ml-6"
                        onClick={() => handleClick()}
                    >Add to Cart</button>
                </div>
            </div>
        </div>
    )
};

export default ItemCard