/* eslint-disable eol-last */
import React from 'react';
import line from './assets/line.png';

const Contact = () => {
    return (
        <section data-aos="fade-up" className="bg-white container mx-auto my-10">
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
    );
};

export default Contact;
