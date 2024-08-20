import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { RESTAURANT_DETAILS } from '../../config';
import ItemCard from './ItemCard';
import { FaSearch } from 'react-icons/fa';

const RestaurantDetails = () => {
    const { id } = useParams();
    const [name, setName] = useState('');
    const [category, setCategory] = useState([]);
    const [openIndex, setOpenIndex] = useState(1);

    useEffect(() => {
        getData();
    }, []);

    async function getData() {
        try {
            const response = await fetch(RESTAURANT_DETAILS + id);
            const json = await response.json();
            setName(json?.data?.cards[0]?.card?.card?.text || '');
            setCategory(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || []);
            // console.log(category)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    return (
        <>
            <div className='bg-stone-900 mt-20 h-32 w-full flex items-center fixed top-0 z-10'>
                <div className='w-[1300px] justify-center flex gap-5'>
                    <div className='w-[600px] h-24'>
                        <p className='text-white text-3xl font-semibold tracking-wide'>{name}</p>
                        <div className='flex absolute bottom-5'>
                            <div className='h-10 w-10 bg-white flex justify-center items-center'><FaSearch /></div>
                            <input
                                className='pr-3 py-2 focus:outline-none placeholder:text-gray-600 placeholder:font-bold placeholder:tracking-wide'
                                placeholder='Search for dishes...'
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className='mx-auto mt-64 mb-10 w-[1300px] flex'>
                <div className='w-[20%] h-[650px] border-r-2 border-gray-200 pt-10 sticky top-64'>
                    {category.slice(1, -2).map((cardData, index) => {
                        const title = cardData?.card?.card?.title;
                        if (title && title !== 'Top Picks') {
                            return (
                                <div
                                    key={index}
                                    className={`text-right ${index === openIndex? 'border-r-4 border-orange-500 text-orange-500 font-bold': ''} my-3 pr-4 cursor-pointer`}
                                    onClick={() => setOpenIndex(index)}
                                >
                                    {title}
                                </div>
                            );
                        }
                        return null;
                    })}
                </div>
                <div className='h-full w-[80%] px-4'>
                    {category.slice(1, -2).map((cardData, index) => {
                        if (index === openIndex) {
                            return (
                                <div className=''>
                                    {(cardData?.card?.card?.itemCards
                                        ? cardData?.card?.card?.itemCards
                                        : cardData?.card?.card?.categories
                                    ).map((item, itemIndex) =>
                                        item.itemCards
                                            ? item.itemCards.map((item2) => (
                                                <ItemCard {...item2.card.info} key={item2.card.info.id} />
                                            ))
                                            : <ItemCard {...item.card.info} key={itemIndex} />
                                    )}
                                </div>
                            )
                        }
                    })}
                </div>
            </div>

        </>
    );
};

export default RestaurantDetails;
