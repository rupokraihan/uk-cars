/* eslint-disable eol-last */
import React from 'react';
import carImg1 from './assets/new-car-1.png';
import carImg2 from './assets/new-car-2.png';
import carImg3 from './assets/new-car-3.png';
import carImg4 from './assets/new-car-4.png';
import carImg5 from './assets/new-car-5.png';
import carImg6 from './assets/new-car-6.png';
import carImg7 from './assets/new-car-7.png';
import carImg8 from './assets/new-car-8.png';
import banner from './assets/new-car-banner.png';
import { Link } from 'react-router-dom';
import ImageZoom from '../../layouts/shared/ImageZoomHoverEffect';
import { Helmet } from 'react-helmet';

export const newCars = [
    { id: 1, image: carImg1, carName: 'Audi A1', price: '£17,585', details: '1.0 TFSI 30 Black Edition Sportback', color: 'Blue' },
    { id: 2, image: carImg2, carName: 'BMW M2', price: '£63,325', details: '2024', color: 'White' },
    { id: 3, image: carImg3, carName: 'BMW 3 Series', price: '£39,350', details: '2024', color: 'Black' },
    { id: 4, image: carImg4, carName: 'Ford Mustang Convertible', price: '£39,905', details: '2024', color: 'Dark red' },
    { id: 5, image: carImg5, carName: 'Ford Focus', price: '£23,310', details: '2024', color: 'Cherrish red' },
    { id: 6, image: carImg6, carName: 'Mercedes-Benz AMG GT', price: '£96,795', details: '2024', color: 'Silver' },
    { id: 7, image: carImg7, carName: 'Mercedes-Benz G Class', price: '£93,965', details: '2024', color: 'Green' },
    { id: 8, image: carImg8, carName: 'Audi A4', price: '£32,185', details: '2024', color: 'Blue' }
];

const NewCars = () => {
  return (
      <div data-aos="fade-zoom-in" className="pt-28">
          <Helmet>
              <title>Duaa Cars | New Cars</title>
              <meta
                  name="keywords"
                  content="Cars for Sale, Used Cars, New Vehicles, Auto Marketplace, Car Dealership, Vehicle Listings, Automotive Classifieds, Buy Cars Online, Sell Your Car, Second-hand Vehicles, Car Trading, Automobile Sales, Affordable Cars, Luxury Cars, Online Auto Sales, Reliable Vehicles, Best Car Deals, Auto Financing, Trade-In Options, Vehicle Inspection"
              />
          </Helmet>

          <img className="w-full h-72 md:h-full" src={banner} alt="bannerImage" />
          <section data-aos="fade-down" className="container px-5 mx-auto bg-white shadow-2xl shadow-slate-400 mb-16  mt-12 py-10">
              <h1 className="text-2xl font-bold tracking-wider mb-6 ml-6">
                  New Launch <span className="text-primary">Cars</span>{' '}
              </h1>
              <div className="grid md:grid-cols-4">
                  {newCars.map((car) => (
                      // eslint-disable-next-line jsx-quotes
                      <section key={car.id} className="md:px-5 ">
                          <div className="w-full border rounded-lg shadow-xl pb-5 hover:-translate-y-1 duration-300 transition-all ease-out mb-10">
                              <ImageZoom>
                                  <img className="w-full rounded-t-md duration-500 transition-all ease-linear hover:scale-110 " src={car.image} alt={car.carName} />
                              </ImageZoom>
                              <h2 className="text-left px-5 text-lg font-semibold tracking-wider mt-4">{car.carName}</h2>
                              <p className="text-left px-5 text-md font-medium tracking-wider">{car.price}</p>
                              <div className="px-5 mt-4">
                                  <Link to={`/new-cars/${car.id}`}>
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

export default NewCars;