/* eslint-disable import/prefer-default-export */
/* eslint-disable comma-dangle */
/* eslint-disable no-undef */
// Assuming you import createBrowserRouter from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../components/pages/Home/Home';
import CarDetails from '../components/pages/Home/CarDetails/CarDetails';
import carAllData from '../components/pages/Home/CarAllData/CarAllData';
import RecentCarsDetails from '../components/pages/Home/RecentAddedCars/RecentCarsDetails';
import UsedCars, { usedCars } from '../components/pages/UsedCars/UsedCars';
import UsedCarDetails from '../components/pages/UsedCars/UsedCarDetails';
import { recentAllCars } from '../components/pages/Home/RecentAddedCars/RecentAddedCars';
import NewCars, { newCars } from '../components/pages/NewCars/NewCars';
import NewCarDetails from '../components/pages/NewCars/NewCarDetails';
import SellCar from '../components/pages/SellCar/SellCar';
import Contact from '../components/pages/Contact/Contact';
import TermsAndConditions from '../components/pages/TermsAndPrivacy/TermsAndConditions';
import PrivacyPolicy from '../components/pages/TermsAndPrivacy/PrivacyPolicy';

// Pass carData as a prop to CarDetails
export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'details/:brand/:id',
                element: <CarDetails carAllData={carAllData} />
            },
            {
                path: 'recent-cars-details/:id',
                element: <RecentCarsDetails recentAllCars={recentAllCars} />
            },
            {
                path: 'used-cars',
                element: <UsedCars />
            },
            {
                path: 'used-cars/:id',
                element: <UsedCarDetails usedCars={usedCars} />
            },
            {
                path: 'new-cars',
                element: <NewCars />
            },
            {
                path: 'new-cars/:id',
                element: <NewCarDetails newCars={newCars} />
            },
            {
                path: 'sell-car',
                element: <SellCar />
            },
            {
                path: 'contact',
                element: <Contact />
            },
            {
                path: 'privacy-policy',
                element: <PrivacyPolicy />
            },
            {
                path: 'terms-conditions',
                element: <TermsAndConditions />
            }
        ]
    }
]);
