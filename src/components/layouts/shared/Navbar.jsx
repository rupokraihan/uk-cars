/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-quotes */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable spaced-comment */
/* eslint-disable func-names */
/* eslint-disable react/no-this-in-sfc */
/* eslint-disable react/jsx-closing-bracket-location */
import React, { useLayoutEffect, useState } from 'react';
import { AiFillMail } from 'react-icons/ai';
import { FaBars, FaTimes } from 'react-icons/fa';
// import { FaFacebookF, FaLocationDot, FaPhoneVolume, FaYoutube } from 'react-icons/fa6';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/DuaaCars-logo.png';
import { FaPhone } from 'react-icons/fa6';

const Navbar = () => {
    useLayoutEffect(() => {
        let theEnd = 0;
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', function () {
            const scrollTop = window.pageXOffset || this.document.documentElement.scrollTop;
            if (scrollTop > theEnd) {
                navbar.style.top = '-100px';
            } else {
                navbar.style.top = '0px';
            }
            theEnd = scrollTop;
        });
    }, []);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <nav>
            <div className="text-lg bg-gray-100 pt-2 pb-3  mx-auto  w-full shadow-2xl fixed z-10" id="navbar">
                <section className="relative">
                    <div className="px-4 lg:px-24 mx-auto  flex items-center justify-between">
                        <div className="flex items-center gap-4 ">
                            {/*Website logo */}
                            <Link to="/">
                                <img className="h-[40px] w-[80px]" src={logo} alt="Logo" />
                            </Link>
                        </div>
                        <div className="relative text-gray-700 hidden md:block">
                            <input
                                type="search"
                                name="serch"
                                placeholder="Search Cars eg: BMW , Audi"
                                className="bg-white shadow-2xl border h-10 px-6 w-96 pr-10 rounded-full text-sm focus:outline-none placeholder:text-gray-500 placeholder:font-bold placeholder:tracking-wider"
                            />
                            <Link to="/new-cars" type="submit" className="absolute right-0 top-0 mt-3 mr-4">
                                <svg
                                    className="h-4 w-4 fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    version="1.1"
                                    id="Capa_1"
                                    x="0px"
                                    y="0px"
                                    viewBox="0 0 56.966 56.966"
                                    style={{ enableBackground: 'new 0 0 56.966 56.966' }}
                                    xmlSpace="preserve"
                                    width="512px"
                                    height="512px">
                                    <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                                </svg>
                            </Link>
                        </div>

                        <div>
                            <a href="tel:+447984373759" className="bg-black text-white px-4 text-md py-2 rounded-full flex justify-center items-center gap-1 font-bold tracking-wider">
                                <span>
                                    <FaPhone />
                                </span>
                                Call
                            </a>
                        </div>
                    </div>
                    <hr className="h-px my-3 bg-gray-500 border-0 dark:bg-gray-700" />
                    <div className="">
                        <ul className="items-center text-black text-ellipsis hidden space-x-8 lg:flex justify-center">
                            <li>
                                <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'default')}>
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/new-cars" className={({ isActive }) => (isActive ? 'active' : 'default')}>
                                    New Car
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/used-cars" className={({ isActive }) => (isActive ? 'active' : 'default')}>
                                    Used Car
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/sell-car" className={({ isActive }) => (isActive ? 'active' : 'default')}>
                                    Sell Car
                                </NavLink>
                            </li>
                            {/* <li>
                                <NavLink to="/exchange-car" className={({ isActive }) => (isActive ? 'active' : 'default')}>
                                    Exchange Car
                                </NavLink>
                            </li> */}
                            {/* <li>
                                <NavLink to="/finance-car" className={({ isActive }) => (isActive ? 'active' : 'default')}>
                                    Finance Car
                                </NavLink>
                            </li> */}
                            <li>
                                <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : 'default')}>
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                    {/* Mobile Navbar Section */}
                    <div className="lg:hidden">
                        {/* Dropdown Open Button */}
                        <button aria-label="Open Menu" title="Open Menu" className="text-black focus:outline-none" onClick={() => setIsMenuOpen(true)}>
                            <FaBars className="w-8" />
                        </button>
                        {isMenuOpen && (
                            <div className="absolute top-0 left-0 w-full z-10">
                                <div className=" bg-[#ffffff] border rounded shadow-sm pb-8">
                                    {/* Logo & Button section */}
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex gap-2">
                                            <Link to="/" className="inline-flex items-center">
                                                <img className="h-[40px] w-[80px]" src={logo} alt="fliqaIndiaLogo" />
                                            </Link>
                                        </div>
                                        {/* Dropdown menu close button */}
                                        <div>
                                            <button type="button" className="text-black  focus:outline-none" onClick={() => setIsMenuOpen(false)}>
                                                <FaTimes className="w-8 h-8 mt-4 mr-3" />
                                            </button>
                                        </div>
                                    </div>
                                    {/* Mobile Nav Items Section */}
                                    <nav>
                                        <ul className="space-y-2">
                                            <li>
                                                <Link
                                                    to="/"
                                                    className="block
                             px-4 font-semibold  text-black hover:text-[#1c3b47]">
                                                    Home
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="/new-cars"
                                                    className="block
                             px-4 font-semibold  text-black hover:text-[#1c3b47]">
                                                    New Car
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="/used-cars"
                                                    className="block
                             px-4 font-semibold  text-black hover:text-[#1c3b47]">
                                                    Used Car
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="/sell-car"
                                                    className="block
                             px-4 font-semibold  text-black hover:text-[#1c3b47]">
                                                    Sell Car
                                                </Link>
                                            </li>

                                            <li>
                                                <Link
                                                    to="/contact"
                                                    className="block
                             px-4 font-semibold  text-black hover:text-[#1c3b47]">
                                                    Contact
                                                </Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        )}
                    </div>
                </section>
            </div>
        </nav>
    );
};

export default Navbar;
