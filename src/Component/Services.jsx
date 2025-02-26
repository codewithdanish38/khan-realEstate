/* eslint-disable no-unused-vars */
import React from 'react';
import Header from "./Header";
import { useLocation } from "react-router-dom";
const Services = () => {

  const slides = [
    {
      id: 'slide1',
      title: 'Buying and Selling Houses',
      image: 'https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp',
      next: 'slide2',
      prev: 'slide4'
    },
    {
      id: 'slide2',
      title: 'Property Management',
      image: 'https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp',
      next: 'slide3',
      prev: 'slide1'
    },
    {
      id: 'slide3',
      title: 'Rental and Leasing Services',
      image: 'https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp',
      next: 'slide4',
      prev: 'slide2'
    },
    {
      id: 'slide4',
      title: 'Real Estate Consultation',
      image: 'https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp',
      next: 'slide1',
      prev: 'slide3'
    }
  ];
  const location = useLocation();
  return (
    <>
    {location.pathname === "/services" && <Header />}

    <div className="w-full text-center p-10 bg-gray-100 p-40"
      style={{
        backgroundImage:
          "url('https://png.pngtree.com/thumb_back/fh260/background/20220924/pngtree-abstract-white-gray-gradient-green-background-designed-as-text-backdrop-product-image_1465635.jpg')",
      }} >
       
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Our Services</h1>
      <div className="carousel w-full max-w-3xl mx-auto rounded-lg shadow-lg overflow-hidden">
        {slides.map((slide) => (
          <div key={slide.id} id={slide.id} className="carousel-item relative w-full">
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-4">
              <h2 className="text-2xl font-semibold">{slide.title}</h2>
            </div>
            <img src={slide.image} className="w-full h-80 object-cover" alt={slide.title} />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href={`#${slide.prev}`} className="btn btn-circle bg-white text-black">❮</a>
              <a href={`#${slide.next}`} className="btn btn-circle bg-white text-black">❯</a>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Services;
