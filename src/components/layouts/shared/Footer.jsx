/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import logo1 from './assets/DuaaCars1.png';
import logo2 from './assets/DuaaCars2.png';
import logo3 from './assets/DuaaCars3.png';
import logo4 from './assets/DuaaCars4.png';
import {  FaFacebook, FaInstagram,  FaTwitter, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import { showAlert } from './showAlert';
import logo from './assets/Fliqa-India-Logo.png';

const Footer = () => {
    return (
        <div className=" bg-white text-black">
            <div className="md:grid grid-cols-4 justify-center items-center pt-6 mb-6 hidden">
                <div className="flex gap-4 justify-center items-center">
                    <img className="h-16 w-16" src={logo1} alt="logo" />
                    <div>
                        <p className="text-lg font-semibold tracking-wider">United Kingdom</p>
                        <p className="text-md font-medium tracking-wider">Largest Auto portal</p>
                    </div>
                </div>
                <div className="flex gap-4 justify-center items-center">
                    <img className="h-16 w-16" src={logo2} alt="logo" />
                    <div>
                        <p className="text-lg font-semibold tracking-wider">Car Sold</p>
                        <p className="text-md font-medium tracking-wider">Everyday</p>
                    </div>
                </div>
                <div className="flex gap-4 justify-center items-center">
                    <img className="h-16 w-16" src={logo3} alt="logo" />
                    <div>
                        <p className="text-lg font-semibold tracking-wider">Offers</p>
                        <p className="text-md font-medium tracking-wider">Stay Updated pay less</p>
                    </div>
                </div>
                <div className="flex gap-4 justify-center items-center">
                    <img className="h-16 w-16" src={logo4} alt="logo" />
                    <div>
                        <p className="text-lg font-semibold tracking-wider">Campare</p>
                        <p className="text-md font-medium tracking-wider">Decode the right car</p>
                    </div>
                </div>
            </div>
            <hr className="border border-red-300" />
            <footer className=" py-4 lg:py-4 px-8 lg:px-20 justify-between items-center">
                <div className="lg:grid grid-cols-4 justify-between gap-x-[6rem] lg:gap-x-[12rem] justify-items-center">
                    <div className="mt-6 ">
                        <p className="font-bold font-serif tracking-wider ">Our Address</p> <br />
                        <p>30 Uphall Road, Ilford IG1 2JF, United Kingdom</p>
                    </div>

                    <div className="mt-6">
                        <p className="font-bold font-serif tracking-wider">Contact Us</p>
                        <br />
                        <a href="tel:99065-80390" className="link link-hover">
                            Phone no: +44 7984 373759
                        </a>
                        <br />
                        <a href="mailto:newsonarbanglaresort@gmail.com" className="link link-hover">
                            Email: Info@duaa.co.uk
                        </a>
                    </div>

                    <div className="mt-6">
                        <p className="font-bold font-serif tracking-wider ">Useful Links</p>
                        <br />
                        <Link to="/new-cars" className="link link-hover">
                            New Car
                        </Link>
                        <br />
                        <Link to="/used-car" className="link link-hover">
                            Used Car
                        </Link>
                        <br />
                        <Link to="/sell-car" className="link link-hover">
                            Sell Car
                        </Link>
                        <br />
                        <Link to="/terms-conditions" className="link link-hover">
                            Terms & condition
                        </Link>
                        <br />
                        <Link to="/privacy-policy" className="link link-hover">
                            Privacy policy
                        </Link>
                        <br />
                    </div>
                    <div className="mt-6">
                        <p className="font-bold font-serif tracking-wider ">Media Partner</p>
                        <br />
                        <Link to="https://www.fliqaindia.com/" target='_blank' className=" mt-4">
                            <img className="w-36" src={logo} alt="logo" />
                        </Link>
                    </div>
                </div>
            </footer>
            <div className="py-4 text-sm text-center text-black font-bold tracking-widest bg-gray-300 md:flex justify-between items-center px-28 mt-6">
                <div>
                    <p>@2023 DUAA CARS LTD.</p>
                </div>
                <div className="flex gap-4 justify-center">
                    <Link to="https://www.facebook.com/duaacarsltd" target="_blank" className="link link-hover">
                        <FaFacebook className="text-3xl hover:text-[#0866FF] transition duration-500 ease-in-out transform hover:scale-110 focus:scale-95"> </FaFacebook>
                    </Link>
                    <Link to="" target="_blank" className="link link-hover">
                        <FaTwitter className="text-3xl hover:text-[#199DF0]  transition duration-500 ease-in-out transform hover:scale-110 focus:scale-95"> </FaTwitter>
                    </Link>
                    {/* <Link to="" target="_blank" className="link link-hover">
                        <FaYoutube className="text-3xl hover:text-red-500  transition duration-500 ease-in-out transform hover:scale-110 focus:scale-95"> </FaYoutube>
                    </Link> */}
                    <Link to="https://api.whatsapp.com/send?phone=%2B447984373759" target="_blank" className="link link-hover">
                        <FaWhatsapp className="text-3xl hover:text-[#29AD17]  transition duration-500 ease-in-out transform hover:scale-110 focus:scale-95"> </FaWhatsapp>
                    </Link>
                    <Link to="https://www.instagram.com/duaacarsltd" target="_blank" className="link link-hover ">
                        <FaInstagram className="text-3xl hover:text-[#B028AB]  transition duration-500 ease-in-out transform hover:scale-110 focus:scale-95"> </FaInstagram>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;