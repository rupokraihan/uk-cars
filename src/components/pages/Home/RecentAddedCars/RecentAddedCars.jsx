/* eslint-disable object-curly-newline */
/* eslint-disable eol-last */
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Navigation } from 'swiper/modules';

import carImg1 from './assets/car-image-1.png';
import carImg2 from './assets/car-image-2.png';
import carImg3 from './assets/car-image-3.png';
import carImg4 from './assets/car-image-4.png';
import carImg5 from './assets/car-image-5.png';
import carImg6 from './assets/car-image-6.png';
import carImg7 from './assets/car-image-7.png';
import carImg8 from './assets/car-image-8.png';
import { Link } from 'react-router-dom';
import ImageZoom from '../../../layouts/shared/ImageZoomHoverEffect';

export const recentAllCars = [
    { id: 1, image: carImg1, carName: 'Toyota Auris', price: '£17000' },
    { id: 2, image: carImg2, carName: 'Opel Zafira', price: '£20000' },
    { id: 3, image: carImg3, carName: 'BMW 3 Series ', price: '£57000' },
    { id: 4, image: carImg4, carName: 'Opel Agila', price: '£15200' },
    { id: 5, image: carImg5, carName: 'BMW XM', price: '£150,270' },
    { id: 6, image: carImg6, carName: 'BMW X1', price: '£49000' },
    { id: 7, image: carImg7, carName: 'BMW 5 Series', price: '£145,000' },
    { id: 8, image: carImg8, carName: 'BMW 7 Series', price: '£175,000' }
];

const RecentAddedCars = () => {
    return (
        <section className="container bg-white px-5 mx-auto pt-10 my-8 shadow-2xl">
            <h1 className="pl-5 text-2xl font-bold tracking-wide mb-6">
                Recent Added <span className="text-primary">Cars</span>
            </h1>
            <Swiper
                rewind={false}
                navigation={true}
                modules={[Navigation]}
                breakpoints={{
                    '@0.00': {
                        slidesPerView: 1,
                        spaceBetween: 10
                    },
                    '@0.75': {
                        slidesPerView: 2,
                        spaceBetween: 20
                    },
                    '@1.00': {
                        slidesPerView: 3,
                        spaceBetween: 40
                    },
                    '@1.50': {
                        slidesPerView: 4,
                        spaceBetween: 10
                    }
                }}
                className="mySwipe">
                {recentAllCars.map((car) => (
                    // eslint-disable-next-line jsx-quotes
                    <SwiperSlide key={car.id} className="md:px-5">
                        <div className="w-full border rounded-lg shadow-xl shadow-slate-300 pb-5 hover:-translate-y-1 duration-300 transition-all ease-out mb-10">
                            <ImageZoom width="100%" height="100%">
                                <img className="w-full rounded-t-md duration-500 transition-all ease-linear hover:scale-110 " src={car.image} alt={car.carName} />
                            </ImageZoom>
                            <h2 className="text-left px-5 text-xl font-bold tracking-wider mt-4">{car.carName}</h2>
                            <p className="text-left px-5 text-lg font-medium tracking-wider">{car.price}</p>
                            <div className="px-5 mt-4">
                                <Link to={`/recent-cars-details/${car.id}`}>
                                    <button className="border border-primary w-full  py-2 rounded-lg text-sm font-semibold tracking-wider text-primary hover:bg-primary hover:text-white transition  duration-500 ease-in-out transform hover:scale-95">
                                        Check the Offer
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default RecentAddedCars;
