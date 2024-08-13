import React from 'react';
import banner from './assets/sell-car-banner.png';
import usedCar from './assets/used-car.jpg';
import { FaPlus } from 'react-icons/fa6';
import { showAlert } from '../../layouts/shared/showAlert';
import ImageZoom from '../../layouts/shared/ImageZoomHoverEffect';
import { Helmet } from 'react-helmet';

const SellCar = () => {
  return (
      <div data-aos="fade-zoom-in" className="pt-28">
          <Helmet>
              <title>Duaa Cars | Sell Cars</title>
              <meta
                  name="keywords"
                  content="Cars for Sale, Used Cars, New Vehicles, Auto Marketplace, Car Dealership, Vehicle Listings, Automotive Classifieds, Buy Cars Online, Sell Your Car, Second-hand Vehicles, Car Trading, Automobile Sales, Affordable Cars, Luxury Cars, Online Auto Sales, Reliable Vehicles, Best Car Deals, Auto Financing, Trade-In Options, Vehicle Inspection"
              />
          </Helmet>
          <img className="w-full h-72 md:h-full" src={banner} alt="bannerImage" />
          <div data-aos="fade-down" className="container bg-white px-5 mx-auto py-20 mt-8 mb-16 shadow-2xl shadow-slate-400">
              <h1 className="md:pl-5 text-3xl font-bold tracking-wider mb-2">
                  Selling your Cars at <span className="text-primary">best Pricing</span>
              </h1>
              <p className="md:pl-5 text-lg font-medium tracking-wider mb-4">Get a free, instant valuation for your car. All you need is your vehicle registration and mileage.</p>

              <section className="grid md:grid-cols-2 justify-center items-center gap-10 md:max-w-6xl mx-auto">
                  <div className="md:col-span-1">
                      <ImageZoom>
                          <img className="w-full duration-500 transition-all ease-linear hover:scale-110" src={usedCar} alt="used-car-image" />
                      </ImageZoom>
                  </div>
                  <div className=" md:col-span-1">
                      <div className="flex gap-4 items-center mb-10">
                          <h2 className="text-xl font-semibold tracking-wide">
                              Upload Car <br /> Images
                          </h2>
                          {[...Array(4).keys()].map((index) => (
                              <div key={index} className="relative">
                                  <label htmlFor={`fileInput${index}`}>
                                      <FaPlus className="p-2 text-5xl text-primary bg-[#D9D9D9] border rounded-full cursor-pointer" />
                                  </label>
                                  <input type="file" id={`fileInput${index}`} className="hidden" onChange={(event) => handleFileChange(event, index)} />
                              </div>
                          ))}
                      </div>
                      <div className="md:flex gap-10 md:mb-4">
                          <div className="flex justify-center">
                              <select id="vehicle-types" name="vehicle-types" className="text-md border-2 text-gray-700 font-semibold px-4 py-2 w-60 border-gray-500 md:mb-0 mb-2 ">
                                  <option value="">All Vehicle Types</option>
                                  <option value="BMW">BMW</option>
                                  <option value="Mercedes">Mercedes</option>
                                  <option value="Toyota">Toyota</option>
                                  <option value="Skoda">Skoda</option>
                                  <option value="Hyundai">Hyundai</option>
                                  <option value="Audi">Audi</option>
                                  <option value="Nissan">Nissan</option>
                                  <option value="Volkswagen">Volkswagen</option>
                                  <option value="Ford">Ford</option>
                              </select>
                          </div>

                          <div className="flex justify-center">
                              <select id="car-model" name="car-model" className="text-md border-2 text-gray-700 font-semibold px-4 py-2 w-60 border-gray-500 md:mb-0 mb-2">
                                  <option value="">Model</option>
                                  <option value="Model1">Model 1</option>
                                  <option value="Model2">Model 2</option>
                                  <option value="Model3">Model 3</option>
                                  {/* Add more model options as needed */}
                              </select>
                          </div>
                      </div>

                      <div className="md:flex gap-10 md:mb-4">
                          <div className="flex justify-center">
                              <input
                                  type="text"
                                  id="register-number"
                                  name="register-number"
                                  className="text-md border-2 text-gray-700 font-semibold px-4 py-2 w-60 border-gray-500 md:mb-0 mb-2 placeholder:text-gray-700 "
                                  placeholder="Register Number"
                              />
                          </div>

                          <div className="flex justify-center">
                              <input
                                  type="text"
                                  id="manufacturing-year"
                                  name="manufacturing-year"
                                  className="text-md border-2 text-gray-700 font-semibold px-4 py-2 w-60 border-gray-500 md:mb-0 mb-2 placeholder:text-gray-700 "
                                  placeholder="Year"
                              />
                          </div>
                      </div>

                      <div className="md:flex gap-10 md:mb-4">
                          <div className="flex justify-center">
                              <input
                                  type="text"
                                  id="mobile-number"
                                  name="mobile-number"
                                  className="text-md border-2 text-gray-700 font-semibold px-4 py-2 w-60 border-gray-500 md:mb-0 mb-2 placeholder:text-gray-700 "
                                  placeholder=" Mobile Number"
                              />
                          </div>

                          <div className="flex justify-center">
                              <input
                                  type="email"
                                  id="email-id"
                                  name="email-id"
                                  className="text-md border-2 text-gray-700 font-semibold px-4 py-2 w-60 border-gray-500 md:mb-0 mb-2 placeholder:text-gray-700 "
                                  placeholder="Email Id"
                              />
                          </div>
                      </div>

                      <div className="mt-8 flex justify-center">
                          <button
                              onClick={showAlert}
                              className="border border-primary bg-primary py-2 px-8 rounded-lg text-sm font-semibold tracking-wider text-white hover:bg-red-500 hover:text-white transition duration-500 ease-in-out transform hover:scale-95">
                              Get Offer
                          </button>
                      </div>
                  </div>
              </section>
          </div>
      </div>
  );
};

export default SellCar;
