/* eslint-disable eol-last */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import banner from './assets/car-banner.png';

const Header = () => {
    const navigate = useNavigate();
    const [selectedOption, setSelectedOption] = useState('new-car');

    const handleSearch = () => {
        if (selectedOption === 'new-car') {
            navigate('/new-cars');
        } else if (selectedOption === 'used-cars') {
            // Corrected value here
            navigate('/used-cars');
        } else {
            // Handle other cases if needed
        }
    };

    return (
        <div className="md:relative pt-28">
            <img className="w-full h-72 md:h-[70vh]  mb-6 " src={banner} alt="banner-jpg" />
            <section className="md:absolute md:top-1/2 right-32 transform md:-translate-y-1/2 max-w-2xl bg-slate-100 shadow-2xl px-10 py-8 mx-auto" style={{ width: '400px' }}>
                <h1 className="text-2xl font-bold tracking-wider mb-4">Find Your Cars</h1>
                <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                        <input
                            className="peer sr-only"
                            id="option1"
                            type="radio"
                            tabIndex="-1"
                            name="option"
                            defaultChecked
                            onChange={() => setSelectedOption('new-car')} // Corrected value here
                        />
                        <label
                            htmlFor="option1"
                            className="block w-full rounded-lg border border-gray-700 p-3 text-gray-600 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white cursor-pointer"
                            tabIndex="0">
                            <span className="text-md font-bold tracking-widest">New Car</span>
                        </label>
                    </div>

                    <div>
                        <input
                            className="peer sr-only"
                            id="option2"
                            type="radio"
                            tabIndex="-1"
                            name="option"
                            onChange={() => setSelectedOption('used-cars')} // Corrected value here
                        />
                        <label
                            htmlFor="option2"
                            className="block w-full rounded-lg border border-gray-700 p-3 text-gray-600 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white cursor-pointer"
                            tabIndex="0">
                            <span className="text-md font-bold tracking-widest">Used Car</span>
                        </label>
                    </div>
                </div>
                <div className="my-3">
                    <label className="mr-8 text-md font-bold tracking-wider">
                        <input type="radio" value="budget" name="search-type" defaultChecked />
                        By Budget
                    </label>
                </div>
                <div className="mb-4">
                    <select id="select-budget" name="select-budget" className="text-md border-2 text-gray-700 font-semibold px-4 py-1 w-full border-gray-500 cursor-pointer">
                        <option value="">Select Budget</option>
                        <option value="All Price">All Price</option>
                        <option value="No max Price">No max Price</option>
                        <option value="2000"> £2,000</option>
                        <option value="3000"> £3,000</option>
                        <option value="5000"> £5,000</option>
                        <option value="10000"> £10,000</option>
                        <option value="15000"> £15,000</option>
                        <option value="20000"> £20,000</option>
                    </select>
                </div>
                <div className="mb-6">
                    <select id="vehicle-types" name="vehicle-types" className="text-md border-2 text-gray-700 font-semibold px-4 py-1 w-full border-gray-500 cursor-pointer">
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
                <div className="">
                    <button
                        onClick={handleSearch}
                        className="btn border-0 bg-primary font-bold text-white rounded-xl w-full text-base tracking-wider hover:bg-[#9e4816] hover:border-0 transition duration-500 ease-in-out transform hover:scale-95">
                        Search
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Header;
