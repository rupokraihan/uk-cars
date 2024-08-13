// RecentCarsDetails.jsx
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import KeySpecs from '../CarDetails/shared/KeySpecs';
import RecentAddedCars from './RecentAddedCars';
import RightSide from '../../../layouts/shared/RightSide';
import Contact from '../Contact/Contact';

const RecentCarsDetails = ({recentAllCars}) => {
    const { id } = useParams();

    console.log('ID:', id);
    console.log('CarData:', recentAllCars);

    if (!recentAllCars) {
        return <div>Car data not available</div>;
    }

    // Find the car details based on the provided carData
    const recentCarDetails = Object.values(recentAllCars)
        .flat()
        .find((car) => car.id === parseInt(id, 10));

    console.log('recentCarDetails:', recentCarDetails);

    if (!recentCarDetails) {
        return <div>Car details not found</div>;
    }

    return (
        <div className="container mx-auto pt-24">
            <section className="mt-10 py-10 px-5 md:px-28 grid md:grid-cols-2 justify-center gap-6 md:gap-20 bg-white shadow-2xl">
                <div className="col-span-1">
                    <img className="w-full rounded-xl h-80" src={recentCarDetails.image} alt={recentCarDetails.carName} />
                </div>
                <div className="md:col-span-1 ">
                    <h2 className="text-3xl font-bold tracking-wider mb-4">{recentCarDetails.carName}</h2>
                    <div className="flex gap-0.5 text-yellow-400">
                        <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>

                        <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>

                        <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>

                        <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>

                        <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                    </div>
                    <p className="text-3xl font-bold tracking-wider my-4">{recentCarDetails.price}</p>
                    <Link to="/contact">
                        <button className="border border-primary bg-primary py-3 px-20 rounded-lg text-sm font-semibold tracking-wider text-white hover:bg-red-500 hover:text-white transition duration-500 ease-in-out transform hover:scale-95">
                            Contact for Bookingg
                        </button>
                    </Link>
                </div>
            </section>
            <div className="grid md:grid-cols-4 gap-10">
                <div className="md:col-span-3">
                    <KeySpecs carName={recentCarDetails.carName} />
                    <div className="hidden md:block">
                        <RecentAddedCars />
                    </div>
                </div>
                <div className="md:col-span-1">
                    <RightSide />
                </div>
            </div>
            <Contact />
        </div>
    );
};

export default RecentCarsDetails;
