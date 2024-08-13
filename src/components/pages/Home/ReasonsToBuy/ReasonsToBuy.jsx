/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
/* eslint-disable jsx-quotes */
/* eslint-disable eol-last */
import React from 'react';
import img1 from './assets/image-1.png';
import img2 from './assets/image-2.png';
import img3 from './assets/image-3.png';
import img4 from './assets/image-4.png';
import img5 from './assets/image-5.png';
import img6 from './assets/image-6.png';

const ReasonsToBuy = () => {
    return (
        <section data-aos="fade-up" className="bg-primary py-12">
            <h1 className="text-center text-3xl font-bold text-white tracking-wider mb-3">"Driving Dreams, Delivering Quality – Duaa Cars, Where Every Ride Counts!"</h1>
            <p className="text-center text-xl font-semibold text-white tracking-wider mb-8">Just a few reasons why to buy your next car from Duaa cars</p>
            <div className="grid md:grid-cols-3 gap-8 container px-5 mx-auto">
                {/* card-1 */}
                <div className="w-full border border-gray-400 shadow-2xl bg-slate-100 rounded-md px-10 py-6  hover:-translate-y-1 duration-300 transition-all ease-out">
                    <img className="mx-auto mb-4" src={img1} alt="ReasonsToBuy-img" />
                    <h2 className="text-center text-xl font-bold tracking-wider mb-3">Diverse Inventory</h2>
                    <p className="text-center text-md font-medium tracking-wide">Duaa Cars offers a wide range of old and new vehicles, providing choices that cater to every need and budget.</p>
                </div>
                {/* card-2 */}
                <div className="w-full border border-gray-400 shadow-2xl bg-slate-100 rounded-md px-10 py-6  hover:-translate-y-1 duration-300 transition-all ease-out">
                    <img className="mx-auto mb-4" src={img2} alt="ReasonsToBuy-img" />
                    <h2 className="text-center text-xl font-bold tracking-wider mb-3">Quality Assurance</h2>
                    <p className="text-center text-md font-medium tracking-wide">
                        Our rigorous inspection and certification process ensure that every car meets top-quality standards, giving customers peace of mind with their purchase.
                    </p>
                </div>
                {/* card-3 */}
                <div className="w-full border border-gray-400 shadow-2xl bg-slate-100 rounded-md px-10 py-6  hover:-translate-y-1 duration-300 transition-all ease-out">
                    <img className="mx-auto mb-4" src={img3} alt="ReasonsToBuy-img" />
                    <h2 className="text-center text-xl font-bold tracking-wider mb-3">Transparent Transactions</h2>
                    <p className="text-center text-md font-medium tracking-wide">
                        Our pricing is competitive, and we provide all necessary details about the vehicles, empowering customers to make informed decisions.
                    </p>
                </div>
                {/* card-4 */}
                <div className="w-full border border-gray-400 shadow-2xl bg-slate-100 rounded-md px-10 py-6  hover:-translate-y-1 duration-300 transition-all ease-out">
                    <img className="mx-auto mb-4" src={img4} alt="ReasonsToBuy-img" />
                    <h2 className="text-center text-xl font-bold tracking-wider mb-3">Customer-Centric Service</h2>
                    <p className="text-center text-md font-medium tracking-wide">
                        Our team is dedicated to providing exceptional service, guiding customers through the buying or selling process with care and professionalism.
                    </p>
                </div>
                {/* card-5 */}
                <div className="w-full border border-gray-400 shadow-2xl bg-slate-100 rounded-md px-10 py-6  hover:-translate-y-1 duration-300 transition-all ease-out">
                    <img className="mx-auto mb-4" src={img5} alt="ReasonsToBuy-img" />
                    <h2 className="text-center text-xl font-bold tracking-wider mb-3">Trade-Ins and Financing</h2>
                    <p className="text-center text-md font-medium tracking-wide">
                        We offer flexible options including trade-ins and various financing solutions, ensuring that everyone can find their perfect ride without financial stress.
                    </p>
                </div>
                {/* card-6 */}
                <div className="w-full border border-gray-400 shadow-2xl bg-slate-100 rounded-md px-10 py-6  hover:-translate-y-1 duration-300 transition-all ease-out">
                    <img className="mx-auto mb-4" src={img6} alt="ReasonsToBuy-img" />
                    <h2 className="text-center text-xl font-bold tracking-wider mb-3">Legacy of Trust</h2>
                    <p className="text-center text-md font-medium tracking-wide">
                        With a solid reputation for reliability and trustworthiness, Duaa Cars has become a go-to destination for car enthusiasts and buyers seeking quality vehicles.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ReasonsToBuy;
