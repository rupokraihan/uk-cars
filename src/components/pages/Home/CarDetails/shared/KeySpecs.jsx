/* eslint-disable eol-last */
import React from 'react';
import img1 from '../assets/key-specs-01.png';
import img2 from '../assets/key-specs-02.png';
import img3 from '../assets/key-specs-03.png';
import img4 from '../assets/key-specs-04.png';
import img5 from '../assets/key-specs-05.png';

const KeySpecs = ({ modelName,carName }) => {
    return (
        <div className="my-10 bg-white py-5 px-14 shadow-2xl">
            <h1 className="mb-4 text-3xl font-bold tracking-wider text-gray-900">Key Specs of {modelName}{carName} </h1>
            <section className=" grid grid-cols-3 md:grid-cols-5 md:justify-items-center gap-4 justify-center items-center">
                <div>
                    <img className="h-12 w-12 mx-auto" src={img1} alt="key-specs-img" />
                    <p className="text-xl font-bold tracking-wider text-center mt-2">Engine</p>
                    <p className="text-lg font-medium tracking-wider text-center mb-2">1998</p>
                </div>
                <div>
                    <img className="h-12 w-12 mx-auto" src={img2} alt="key-specs-img" />
                    <p className="text-xl font-bold tracking-wider text-center mt-2">Engine</p>
                    <p className="text-lg font-medium tracking-wider text-center mb-2">1998</p>
                </div>
                <div>
                    <img className="h-12 w-12 mx-auto" src={img3} alt="key-specs-img" />
                    <p className="text-xl font-bold tracking-wider text-center mt-2">Engine</p>
                    <p className="text-lg font-medium tracking-wider text-center mb-2">1998</p>
                </div>
                <div>
                    <img className="h-12 w-12 mx-auto" src={img4} alt="key-specs-img" />
                    <p className="text-xl font-bold tracking-wider text-center mt-2">Engine</p>
                    <p className="text-lg font-medium tracking-wider text-center mb-2">1998</p>
                </div>
                <div>
                    <img className="h-12 w-12 mx-auto" src={img5} alt="key-specs-img" />
                    <p className="text-xl font-bold tracking-wider text-center mt-2">Engine</p>
                    <p className="text-lg font-medium tracking-wider text-center mb-2">1998</p>
                </div>
            </section>
        </div>
    );
};

export default KeySpecs;