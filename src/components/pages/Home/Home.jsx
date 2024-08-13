/* eslint-disable eol-last */
import React from 'react';
import Header from './Header/Header';
import ReasonsToBuy from './ReasonsToBuy/ReasonsToBuy';
import RecentAddedCars from './RecentAddedCars/RecentAddedCars';
import NewCarsByCategory from './NewCarsByCategory/NewCarsByCategory';
import SellingCars from './SellingCars/SellingCars';
import Reviews from './Reviews/Reviews';
import Contact from './Contact/Contact';
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
      <div data-aos="fade-zoom-in">
          <Helmet>
              <title>Duaa Cars | Home</title>
              <meta
                  name="keywords"
                  content="Cars for Sale, Used Cars, New Vehicles, Auto Marketplace, Car Dealership, Vehicle Listings, Automotive Classifieds, Buy Cars Online, Sell Your Car, Second-hand Vehicles, Car Trading, Automobile Sales, Affordable Cars, Luxury Cars, Online Auto Sales, Reliable Vehicles, Best Car Deals, Auto Financing, Trade-In Options, Vehicle Inspection"
              />
          </Helmet>
          <Header />
          <ReasonsToBuy />
          <RecentAddedCars />
          <NewCarsByCategory />
          <SellingCars />
          <Reviews />
          <Contact />
      </div>
  );
};

export default Home;