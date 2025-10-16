import React, { useEffect, useState } from 'react'
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
const ImageCarousel = () => {
  // state 
  const [currentIndex, setCurrentIndex] = useState(0);

  // array of images 
  const images = [
    "https://cdn.pixabay.com/photo/2020/07/08/04/12/work-5382501_1280.jpg",
    "https://cdn.pixabay.com/photo/2016/11/23/14/37/blur-1853262_1280.jpg",
    "https://cdn.pixabay.com/photo/2017/01/17/03/57/desktop-1985856_1280.jpg",
    "https://cdn.pixabay.com/photo/2020/10/08/02/41/desktop-5636733_1280.jpg"
  ];

  // nextHandler  it makes loop 
  const nextHandler = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex == images.length - 1 ? 0 : prevIndex + 1
    )
  }

  // prevHandler  create loop 
  const prevHandler = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex == 0 ? images.length - 1 : prevIndex - 1
    )
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      nextHandler();
    }, 3000);
    return () => clearTimeout(timer);
  })
  return (
    <div
      className='
     w-[400px] h-[250px]
     relative overflow-hidden rounded-2xl shadow-2xl
     backdrop-blur-2xl
      md:w-[600px] md:h-[400px]
     '
    >
      {/* image */}
      <img
        src={images[currentIndex]}
        className='w-full
        h-full
        transition-all
        duration-700
        object-cover
        '
      />



      {/* button position:  absolute */}
      {/* prev  btn*/}
      <button onClick={prevHandler} className='absolute top-1/2 left-5  bg-amber-50 gray-400 hover:bg-blue-500 cursor-pointer opacity-30 hover:text-white hover:shadow-2xl hover:shadow-500 p-4 rounded-full '>
        <GrPrevious />
      </button>
      {/*next  btn */}
      <button onClick={nextHandler} className='absolute top-1/2 right-5  bg-amber-50 hover:bg-blue-500 cursor-pointer hover:text-white hover:shadow-2xl opacity-30 hover:shadow-500 p-4 rounded-full '>
        <GrNext />
      </button>

    </div>
  )
}

export default ImageCarousel
