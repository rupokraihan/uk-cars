/* eslint-disable eol-last */
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import car from './assets/car.png';
import Swal from 'sweetalert2';

const Booking = () => {
     const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_yn2w508', 'template_t7b28x9', form.current, '1R-T2KM4KxgEqgkGy')
            .then((result) => {
                console.log(result.text);
                // Show success sweet alert
                Swal.fire({
                    icon: 'success',
                    title: 'Message Sent Successfully!',
                    text: 'We will get back to you soon.'
                });
            })
            .catch((error) => {
                console.error('Email.js Error:', error);
                // Show error sweet alert
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong! Please try again later.'
                });
            });
    };

    return (
        <div data-aos="fade-down" className="grid md:grid-cols-2 gap-20 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900">
            <div>
                <img className="w-full" src={car} alt="carImage" />
            </div>
            <div className="mx-20">
                <h1 className="text-white mt-20 text-3xl text-center tracking-wider mb-2 font-bold">Contact For Booking</h1>
                <p className="text-white text-lg text-center font-medium tracking-wider">
                    For booking and press inquiries please contact our Teams by filling the form or calling the number: +44 7984 373759
                </p>
                <div>
                    <div className="pt-10 flex justify-center">
                        <form ref={form} onSubmit={sendEmail} className="mb-12 ">
                            <div>
                                <input
                                    type="text"
                                    name="user_name"
                                    className="w-full md:w-96 bg-transparent px-6 py-3 font-bold font-mono text-xl rounded-md border border-gray-300 focus:outline-none focus:ring-gray-400 focus:border-gray-500 placeholder-gray-400 text-white mb-4"
                                    placeholder="NAME"
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    name="user_email"
                                    className="w-full md:w-96 bg-transparent px-6 py-3 font-bold font-mono text-xl rounded-md border border-gray-300 focus:outline-none focus:ring-gray-400 focus:border-gray-500 placeholder-gray-400 text-white mb-4"
                                    placeholder="EMAIL"
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    name="user_phone"
                                    className="w-full md:w-96 bg-transparent px-6 py-3 font-bold font-mono text-xl rounded-md border border-gray-300 focus:outline-none focus:ring-gray-400 focus:border-gray-500 placeholder-gray-400 text-white mb-4"
                                    placeholder="MOBILE"
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    className="w-full md:w-96 bg-transparent px-6 py-3 font-bold font-mono text-xl rounded-md border border-gray-300 focus:outline-none focus:ring-gray-400 focus:border-gray-500 placeholder-gray-400 text-white mb-4"
                                    placeholder="SUBJECT"
                                />
                            </div>
                            <div>
                                <textarea
                                    type="text"
                                    name="message"
                                    className="w-full md:w-96 bg-transparent px-6 py-3 font-bold font-mono text-xl rounded-md border border-gray-300 focus:outline-none focus:ring-gray-400 focus:border-gray-500 placeholder-gray-400 text-white mb-4"
                                    placeholder="MESSAGE"
                                />
                            </div>
                            <div className="flex justify-center">
                                <button
                                    type="submit"
                                    value="Send"
                                    className="inline-flex items-center h-12 px-6 mb-3 font-bold text-white tracking-widest  transition duration-200 rounded shadow-md  md:mb-0 bg-primary hover:bg-gray-300 mt-4">
                                    SEND MESSAGE
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;
