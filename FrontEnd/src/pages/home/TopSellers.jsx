import React, { useEffect, useState } from 'react'
import { BookCard } from '../books/BookCard';

import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css/navigation';


const categories = ["All Books","Business","Fiction","Horror","Adventure"]

export const TopSellers = () => {

    const [book, setBooks] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("Choose a genre");

    useEffect(()=>{
        fetch("Books.json")
    .then(res=> res.json())
    .then((data)=>setBooks(data))
    },[])

    const filteredBoooks = selectedCategory ==="Choose a genre"? book: book.filter(book => book.category === selectedCategory.toLocaleLowerCase())
    console.log(filteredBoooks);
  return (
    <div className='py-10'>
        <h2 className='text-3xl font-semibold mb-6'>Top Sellers</h2>
        {/* filter*/}
        <div className='mb-8 flex items-center'>
            <select onChange={(e)=> setSelectedCategory(e.target.value)}
                 name="category" id="category" className='border bg-[#eaeaea] border-gray-300 rounded-md px-4 py-2 focus:outline-none'>
                {
                    categories.map((category,index)=>(
                        <option key={index} value={category}>
                            {category}
                        </option>
                    ))
                }
            </select>
        </div>
        <Swiper 
        navigation={true}
        slidesPerView={1}
        spaceBetween={30}
        
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1180:{
            slidesPerView: 3,
            spaceBetween: 50,
          }
        }}
        modules={[Pagination,Navigation]}
        className="mySwiper"
      >
         {
            filteredBoooks.length > 0 && filteredBoooks.map((book,index) => (
                <SwiperSlide key={index}
                ><BookCard  book ={book}/></SwiperSlide>
            ))
        }
        
       
      </Swiper>
        


    </div>
  )
}
