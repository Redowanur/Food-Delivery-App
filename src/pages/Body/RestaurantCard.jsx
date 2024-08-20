import { FOOD_IMG_URL, STAR_ICON } from '../../assets/img/images'

const RestaurantCard = ({name, cloudinaryImageId, avgRating, cuisines}) => (
    <div className="max-w-85 h-[400px] rounded-xl my-4 md:my-0 bg-orange-100 shadow-md p-3">
        <div className="h-[60%]">
            <img src={FOOD_IMG_URL+cloudinaryImageId} className="h-full w-full object-cover rounded-xl" alt="Project Image" />
        </div>
        <div className="flex flex-col gap-1 rounded-b-xl h-[40%] mt-1">
            <h1 className="text-xl font-bold">{name}</h1>
            <div className='flex items-center'><img src={STAR_ICON} className='w-4'/><h1 className="font-semibold mx-2">{avgRating}</h1></div>
            <p className="text-slate-600">{cuisines.join(', ')}</p>
        </div>
    </div>
)

export default RestaurantCard;