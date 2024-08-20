import React, { useEffect, useState } from 'react'
import { SWIGGY_API } from '../../config'
import RestaurantCard from './RestaurantCard'
import Shimmer from './Shimmer1'
import { Link } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'

function filterRestaurant(searchText, allRestaurants){
    return allRestaurants.filter(restaurant => restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()))
}

function Body() {
    const [allRestaurants, setAllRestaurants] = useState([])
    const [filteredRestaurants, setFilteredRestaurants] = useState([])
    const [searchText, setSearchText] = useState()

    useEffect(()=>{
        getData();
    }, [])

    async function getData(){
        const data = await fetch(SWIGGY_API)
        const json = await data.json()
        setAllRestaurants(json?.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
        setFilteredRestaurants(json?.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
        // console.log(allRestaurants)
    }

    return (
        <>
            {/* Search Bar */}
            <div className='w-full h-16 mt-28 flex justify-center items-center'>
                <div className='w-[1300px] flex items-center'>
                    <input
                        type='text'
                        placeholder='Search Restaurants'
                        value={searchText}
                        className='w-[400px] h-12 px-4 rounded-l-xl focus:outline-none bg-stone-100'
                        onChange={e => setSearchText(e.target.value)}
                    />
                    <button 
                        className='bg-orange-500 h-12 px-3 rounded-r-xl'
                        onClick={() => {
                            const data = filterRestaurant(searchText, allRestaurants)
                            setFilteredRestaurants(data)
                        }}
                    ><FaSearch/></button>
                </div>
            </div>

            {/* Restaurant List */}
            <div className='flex justify-center items-center'>
                {filteredRestaurants.length === 0 ? (
                    <Shimmer />
                ) : (
                    <div className='grid grid-cols-4 gap-4 w-[1300px] my-10'>
                        {filteredRestaurants.map((restaurant) => (
                            <Link to={'/restaurant/'+restaurant.info.id} key={restaurant.info.id}>
                                <RestaurantCard {...restaurant.info} />
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </>
    )
}

export default Body