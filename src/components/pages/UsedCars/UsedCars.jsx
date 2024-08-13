/* eslint-disable import/order */
import React from 'react';
import carImg1 from './assets/used-car-1.png';
import carImg2 from './assets/used-car-2.png';
import carImg3 from './assets/used-car-3.png';
import carImg4 from './assets/used-car-4.png';
import carImg5 from './assets/used-car-5.png';
import carImg6 from './assets/used-car-6.png';
import carImg7 from './assets/used-car-7.png';
import carImg8 from './assets/used-car-8.png';
import banner from './assets/banner.png';
import { Link } from 'react-router-dom';
import ImageZoom from '../../layouts/shared/ImageZoomHoverEffect';
import { Helmet } from 'react-helmet';

export const usedCars = [
    { id: 1, image: carImg1, carName: 'Citroen C 3', price: '£4,500', details: '2019 | 1.5 BlueHDi Active Euro 6', color: 'White' },
    { id: 2, image: carImg2, carName: 'Vauxhall Mokka', price: '£6,500', details: '2015 | 1.6i Exclusiv 2WD Euro 6', color: 'White' },
    { id: 3, image: carImg3, carName: 'Fiat 500', price: '£6,500', details: '2018 | 1.2 Lounge Euro 6', color: 'Black' },
    { id: 4, image: carImg4, carName: 'Hyundai I10', price: '£6,700', details: '2019 | 1.0 SE Euro 6 5dr', color: 'White' },
    { id: 5, image: carImg5, carName: 'Peugeot 308 SW', price: '£7,100', details: '2014 | 1.4 HDi VTR+ Euro 5 5dr', color: 'White' },
    { id: 6, image: carImg6, carName: 'Vauxhall Corsa', price: '£7,200', details: '2017 | 1.4i Turbo Limited Edition', color: 'Silver' },
    { id: 7, image: carImg7, carName: 'Vauxhall ADAM', price: '£7,200', details: '2015 | 1.2i GLAM Euro 6 3dr', color: 'White' },
    { id: 8, image: carImg8, carName: 'MINI Paceman', price: '£7,400', details: '2015 | 1.6 Cooper Euro 5', color: 'Red' }
];
const UsedCars = () => {
  return (
      <div data-aos="fade-zoom-in" className="pt-28">
          <Helmet>
              <title>Duaa Cars | Used Cars</title>
              <meta
                  name="keywords"
                  content="Cars for Sale, Used Cars, New Vehicles, Auto Marketplace, Car Dealership, Vehicle Listings, Automotive Classifieds, Buy Cars Online, Sell Your Car, Second-hand Vehicles, Car Trading, Automobile Sales, Affordable Cars, Luxury Cars, Online Auto Sales, Reliable Vehicles, Best Car Deals, Auto Financing, Trade-In Options, Vehicle Inspection"
              />
          </Helmet>
          <img className="w-full h-72 md:h-full" src={banner} alt="bannerImage" />
          <section data-aos="fade-down" className="container px-5 mx-auto bg-white shadow-2xl shadow-slate-400 mt-12 py-10 mb-16">
              <h1 className="text-2xl font-bold tracking-wider mb-6 ml-6">
                  Cars Near <span className="text-primary">you</span>
              </h1>
              <div className=" grid md:grid-cols-4">
                  {usedCars.map((car) => (
                      // eslint-disable-next-line jsx-quotes
                      <section key={car.id} className="md:px-5 ">
                          <div className="w-full border rounded-lg shadow-xl pb-5 hover:-translate-y-1 duration-300 transition-all ease-out mb-10">
                              <ImageZoom>
                                  <img className="w-full rounded-t-md duration-500 transition-all ease-linear hover:scale-110 " src={car.image} alt={car.carName} />
                              </ImageZoom>
                              <h2 className="text-left px-5 text-lg font-semibold tracking-wider mt-4">{car.carName}</h2>
                              <p className="text-left px-5 text-md font-medium tracking-wider">{car.price}</p>
                              <div className="px-5 mt-4">
                                  <Link to={`/used-cars/${car.id}`}>
                                      <button className="border border-primary w-full  py-2 rounded-lg text-sm font-semibold tracking-wider text-primary hover:bg-primary hover:text-white transition  duration-500 ease-in-out transform hover:scale-95">
                                          Check the Offer
                                      </button>
                                  </Link>
                              </div>
                          </div>
                      </section>
                  ))}
              </div>
          </section>
      </div>
  );
};

export default UsedCars;
