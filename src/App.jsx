import Aos from 'aos';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import LoadingSpinner from './components/layouts/shared/LoadingSpinner';
import Navbar from './components/layouts/shared/Navbar';
import Footer from './components/layouts/shared/Footer';
import GoogleAnalytics from './components/Context/GoogleAnalytics';

const App = () => {
    useEffect(() => {
        Aos.init({
            duration: 1000,
            easing: 'ease-in-sine',
            delay: 400,
        });
    }, []);

    const [isLoading, setIsLoading] = useState(document.readyState !== 'complete');

    useLayoutEffect(() => {
        const handlePageLoad = () => {
            setIsLoading(false);
            Aos.refresh();
        };

        if (!isLoading) {
            handlePageLoad();
        } else {
            window.addEventListener('load', handlePageLoad);
        }

        return () => {
            window.removeEventListener('load', handlePageLoad);
        };
    }, [isLoading]);
    if (isLoading) {
        return (
            <div>
                <LoadingSpinner />
            </div>
        );
    }
    return (
        <div className='bg-gray-100'>
            <GoogleAnalytics />
            <Navbar />
            <Outlet />
            <ScrollRestoration />
            <Footer />
        </div>
    );
};

export default App;