/* eslint-disable eol-last */
import React from 'react';
import line from './assets/line.png';
import Booking from './Booking';
import { Helmet } from 'react-helmet';
import GoogleMap from './GoogleMap';

const Contact = () => {
    return (
        <div className="py-28">
            <Helmet>
                <title>Duaa Cars | Contact</title>
                <meta
                    name="keywords"
                    content="Cars for Sale, Used Cars, New Vehicles, Auto Marketplace, Car Dealership, Vehicle Listings, Automotive Classifieds, Buy Cars Online, Sell Your Car, Second-hand Vehicles, Car Trading, Automobile Sales, Affordable Cars, Luxury Cars, Online Auto Sales, Reliable Vehicles, Best Car Deals, Auto Financing, Trade-In Options, Vehicle Inspection"
                />
            </Helmet>
            <Booking />
            <section data-aos="fade-zoom-in" className="bg-white container mx-auto my-10">
                <h1 className="text-3xl font-bold tracking-wider pt-4 pl-4">
                    Contact <span className="text-primary">Us</span>
                </h1>
                <div className="grid md:grid-cols-11 justify-items-center gap-4 py-8 px-8">
                    <div className="border-2 border-primary shadow-2xl rounded-lg w-full py-14 text-center col-span-3">
                        <h1 className="text-2xl tracking-widest font-bold mb-8">Phone Number</h1>
                        <a className="text-2xl tracking-widest font-bold text-primary" href="">
                            +44 7984 373759
                        </a>
                    </div>
                    <div className="col-span-1">
                        <img className="h-full hidden md:block" src={line} alt="line" />
                    </div>
                    <div className="border-2 border-primary shadow-2xl rounded-lg w-full py-14 text-center col-span-3">
                        <h1 className="text-2xl tracking-widest font-bold mb-8">Email</h1>
                        <a className="text-2xl tracking-widest font-bold text-primary" href="">
                            Info@duaa.co.uk
                        </a>
                    </div>
                    <div className="col-span-1">
                        <img className="h-full hidden md:block" src={line} alt="line" />
                    </div>
                    <div className="border-2 border-primary shadow-2xl rounded-lg w-full py-14 text-center col-span-3">
                        <h1 className="text-2xl tracking-widest font-bold mb-8">Address</h1>
                        <p className="text-2xl tracking-widest font-bold text-primary px-10">30 Uphall Road, Ilford IG1 2JF, United Kingdom</p>
                    </div>
                </div>
            </section>
            <GoogleMap />
        </div>
    );
};

export default Contact;
