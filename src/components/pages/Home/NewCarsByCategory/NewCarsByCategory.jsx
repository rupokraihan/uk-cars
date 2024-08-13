/* eslint-disable comma-dangle */
/* eslint-disable object-curly-newline */
/* eslint-disable jsx-quotes */
/* eslint-disable eol-last */
import React from 'react';
import { Link } from 'react-router-dom';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ImageZoom from '../../../layouts/shared/ImageZoomHoverEffect';
import mercedesImg4 from './assets/Mercedes-4.png';
import mercedesImg5 from './assets/Mercedes-5.png';
import mercedesImg6 from './assets/Mercedes-6.png';
import mercedesImg7 from './assets/Mercedes-7.png';
import mercedesImg8 from './assets/Mercedes-8.png';
import audiImg1 from './assets/audi-1.png';
import audiImg2 from './assets/audi-2.png';
import audiImg3 from './assets/audi-3.png';
import audiImg4 from './assets/audi-4.png';
import audiImg5 from './assets/audi-5.png';
import audiImg6 from './assets/audi-6.png';
import audiImg7 from './assets/audi-7.png';
import audiImg8 from './assets/audi-8.png';
import carImg1 from './assets/car-image-1.png';
import carImg2 from './assets/car-image-2.png';
import carImg3 from './assets/car-image-3.png';
import carImg4 from './assets/car-image-4.png';
import carImg5 from './assets/car-image-5.png';
import carImg6 from './assets/car-image-6.png';
import carImg7 from './assets/car-image-7.png';
import carImg8 from './assets/car-image-8.png';
import carLogo1 from './assets/car-logo-1.png';
import carLogo2 from './assets/car-logo-2.png';
import carLogo3 from './assets/car-logo-3.png';
import carLogo4 from './assets/car-logo-4.png';
import carLogo5 from './assets/car-logo-5.png';
import carLogo6 from './assets/car-logo-6.png';
import carLogo7 from './assets/car-logo-7.png';
import carLogo8 from './assets/car-logo-8.png';
import carLogo9 from './assets/car-logo-9.png';
import fordImg1 from './assets/ford-1.png';
import fordImg2 from './assets/ford-2.png';
import fordImg3 from './assets/ford-3.png';
import fordImg4 from './assets/ford-4.png';
import fordImg5 from './assets/ford-5.png';
import fordImg6 from './assets/ford-6.png';
import fordImg7 from './assets/ford-7.png';
import fordImg8 from './assets/ford-8.png';
import hyundaiImg1 from './assets/hyundai-1.png';
import hyundaiImg2 from './assets/hyundai-2.png';
import hyundaiImg3 from './assets/hyundai-3.png';
import hyundaiImg4 from './assets/hyundai-4.png';
import hyundaiImg5 from './assets/hyundai-5.png';
import hyundaiImg6 from './assets/hyundai-6.png';
import hyundaiImg7 from './assets/hyundai-7.png';
import hyundaiImg8 from './assets/hyundai-8.png';
import mercedesImg1 from './assets/mercedes-1.png';
import mercedesImg2 from './assets/mercedes-2.png';
import mercedesImg3 from './assets/mercedes-3.png';
import nissanImg1 from './assets/nissan-1.png';
import nissanImg2 from './assets/nissan-2.png';
import nissanImg3 from './assets/nissan-3.png';
import nissanImg4 from './assets/nissan-4.png';
import nissanImg5 from './assets/nissan-5.png';
import nissanImg6 from './assets/nissan-6.png';
import nissanImg7 from './assets/nissan-7.png';
import nissanImg8 from './assets/nissan-8.png';
import skodaImg1 from './assets/skoda-1.png';
import skodaImg2 from './assets/skoda-2.png';
import skodaImg3 from './assets/skoda-3.png';
import skodaImg4 from './assets/skoda-4.png';
import skodaImg5 from './assets/skoda-5.png';
import skodaImg6 from './assets/skoda-6.png';
import skodaImg7 from './assets/skoda-7.png';
import skodaImg8 from './assets/skoda-8.png';
import toyataImg1 from './assets/toyata-1.png';
import toyataImg2 from './assets/toyata-2.png';
import toyataImg3 from './assets/toyata-3.png';
import toyataImg4 from './assets/toyata-4.png';
import toyataImg5 from './assets/toyata-5.png';
import toyataImg6 from './assets/toyata-6.png';
import toyataImg7 from './assets/toyata-7.png';
import toyataImg8 from './assets/toyata-8.png';
import volkswagenImg1 from './assets/volkswagen-1.png';
import volkswagenImg2 from './assets/volkswagen-2.png';
import volkswagenImg3 from './assets/volkswagen-3.png';
import volkswagenImg4 from './assets/volkswagen-4.png';
import volkswagenImg5 from './assets/volkswagen-5.png';
import volkswagenImg6 from './assets/volkswagen-6.png';
import volkswagenImg7 from './assets/volkswagen-7.png';
import volkswagenImg8 from './assets/volkswagen-8.png';

const carData = {
    bmw: [
        { id: 1, image: carImg1, carName: 'BMW 3 Seriess', price: '£57000' },
        { id: 2, image: carImg2, carName: 'BMW 5 Series', price: '£95000' },
        { id: 3, image: carImg3, carName: 'BMW X5', price: '£150000' },
        { id: 4, image: carImg4, carName: 'BMW X1', price: '£145000' },
        { id: 5, image: carImg5, carName: 'BMW X3', price: '£137000' },
        { id: 6, image: carImg6, carName: 'BMW 7 Series', price: '£175000' },
        { id: 7, image: carImg7, carName: 'BMW X7', price: '£220000' },
        { id: 8, image: carImg8, carName: 'BMW XM', price: '£134000' }
    ],
    mercedes: [
        { id: 9, image: mercedesImg1, carName: 'Mercedes G-class', price: '£131,335' },
        { id: 10, image: mercedesImg2, carName: 'Mercedes E-class', price: '£55,290' },
        { id: 11, image: mercedesImg3, carName: 'Mercedes C-class', price: '£59,025' },
        { id: 12, image: mercedesImg4, carName: 'Mercedes AMG', price: '£108,750' },
        { id: 13, image: mercedesImg5, carName: 'Mercedes A-class', price: '£28,700' },
        { id: 14, image: mercedesImg6, carName: 'Mercedes GLC', price: '£52,880' },
        { id: 15, image: mercedesImg7, carName: 'Mercedes S-class', price: '£93,920' },
        { id: 16, image: mercedesImg8, carName: 'Mercedes SL', price: '£179,465' }
    ],
    toyata: [
        { id: 17, image: toyataImg1, carName: 'Toyata Camry', price: '£26,090' },
        { id: 18, image: toyataImg2, carName: 'Toyata Fortuner', price: '£47,970' },
        { id: 19, image: toyataImg3, carName: 'Toyata Vellfire', price: '£10,800' },
        { id: 20, image: toyataImg4, carName: 'Toyata Rumion', price: '£8,495' },
        { id: 21, image: toyataImg5, carName: 'Toyata Glanza', price: '£7,399' },
        { id: 22, image: toyataImg6, carName: 'Toyata RAV4', price: '£52,880' },
        { id: 23, image: toyataImg7, carName: 'Toyata Corolla', price: '£35,160' },
        { id: 24, image: toyataImg8, carName: 'Toyata Agyo X', price: '£21,050' }
    ],
    skoda: [
        { id: 25, image: skodaImg1, carName: 'Skoda Karoq', price: '£41,095' },
        { id: 26, image: skodaImg2, carName: 'Skoda Enyaq', price: '£53,120' },
        { id: 27, image: skodaImg3, carName: 'Skoda Kodiaq', price: '£49,335' },
        { id: 28, image: skodaImg4, carName: 'Skoda Superb', price: '£31,325' },
        { id: 29, image: skodaImg5, carName: 'Skoda Coupe Enyaq', price: '£43,279' },
        { id: 30, image: skodaImg6, carName: 'Skoda Octavia', price: '£32,200' },
        { id: 31, image: skodaImg7, carName: 'Skoda Scala', price: '£28,415' },
        { id: 32, image: skodaImg8, carName: 'Skoda Yeti', price: '£21,050' }
    ],
    hyundai: [
        { id: 33, image: hyundaiImg1, carName: 'Hyundai Ioniq', price: '£65,995' },
        { id: 34, image: hyundaiImg2, carName: 'Hyundai i20 N', price: '£51,680' },
        { id: 35, image: hyundaiImg3, carName: 'Hyundai i30 N', price: '£44,630' },
        { id: 36, image: hyundaiImg4, carName: 'Hyundai Bayon', price: '£35,925' },
        { id: 37, image: hyundaiImg5, carName: 'Hyundai Kona', price: '£35,925' },
        { id: 38, image: hyundaiImg6, carName: 'Hyundai Tucson', price: '£44,630' },
        { id: 39, image: hyundaiImg7, carName: 'Hyundai Santa FE', price: '£51,680' },
        { id: 40, image: hyundaiImg8, carName: 'Hyundai Nexo', price: '£65,995' }
    ],
    audi: [
        { id: 41, image: audiImg1, carName: 'Audi A3', price: '£50,930' },
        { id: 42, image: audiImg2, carName: 'Audi Q5', price: '£42,697' },
        { id: 43, image: audiImg3, carName: 'Audi Q8', price: '£76,295' },
        { id: 44, image: audiImg4, carName: 'Audi R8', price: '£170,840' },
        { id: 45, image: audiImg5, carName: 'Audi A8', price: '£77,060' },
        { id: 46, image: audiImg6, carName: 'Audi Q8 e-tron', price: '£116,250' },
        { id: 47, image: audiImg7, carName: 'Audi Q3', price: '£49,780' },
        { id: 48, image: audiImg8, carName: 'Audi RS Q8', price: '£130,205' }
    ],
    nissan: [
        { id: 49, image: nissanImg1, carName: 'Nissan Juke', price: '£31,110' },
        { id: 50, image: nissanImg2, carName: 'Nissan Ariya', price: '£59,025' },
        { id: 51, image: nissanImg3, carName: 'Nissan Leaf', price: '£31,995' },
        { id: 52, image: nissanImg4, carName: 'Nissan Micra', price: '£21,690' },
        { id: 53, image: nissanImg5, carName: 'Nissan X-Trail', price: '£47,980' },
        { id: 54, image: nissanImg6, carName: 'Nissan Pulsar', price: '£21,280' },
        { id: 55, image: nissanImg7, carName: 'Nissan Qashqai', price: '£41,655' },
        { id: 56, image: nissanImg8, carName: 'Nissan Navara ', price: '£43,335' }
    ],
    volkswagen: [
        { id: 57, image: volkswagenImg1, carName: 'Volkswagen Golf', price: '£36,800' },
        { id: 58, image: volkswagenImg2, carName: 'Volkswagen Tiguan', price: '£37,870' },
        { id: 59, image: volkswagenImg3, carName: 'Volkswagen T-cross', price: '£31,585' },
        { id: 60, image: volkswagenImg4, carName: 'Volkswagen Passat', price: '£47,300' },
        { id: 61, image: volkswagenImg5, carName: 'Volkswagen Arteon', price: '£59,405' },
        { id: 62, image: volkswagenImg6, carName: 'Volkswagen Up', price: '£17,245' },
        { id: 63, image: volkswagenImg7, carName: 'Volkswagen Polo', price: '£25,505' },
        { id: 64, image: volkswagenImg8, carName: 'Volkswagen Jetta', price: '£10,498' }
    ],
    ford: [
        { id: 65, image: fordImg1, carName: 'Ford Mustang', price: '£62,315' },
        { id: 66, image: fordImg2, carName: 'Ford Touneo Custom', price: '£53,581' },
        { id: 67, image: fordImg3, carName: 'Ford Fiesta ST', price: '£27,000' },
        { id: 68, image: fordImg4, carName: 'Ford Pump ST', price: '£33,110' },
        { id: 69, image: fordImg5, carName: 'Ford Focus ST', price: '£40,650' },
        { id: 70, image: fordImg6, carName: 'Ford Octavia', price: '£32,200' },
        { id: 71, image: fordImg7, carName: 'Ford Tourneo Connect', price: '£28,415' },
        { id: 72, image: fordImg8, carName: 'Ford Mondeo', price: '£25,495' }
    ]
};

const NewCarsByCategory = () => {
    const carLogos = [carLogo1, carLogo9, carLogo2, carLogo3, carLogo4, carLogo5, carLogo6, carLogo7, carLogo8];
    const [selectedTabIndex, setSelectedTabIndex] = React.useState(0);

    return (
        <section data-aos="fade-down" className="container bg-white px-5 mx-auto pt-10 my-8 shadow-2xl">
            <h1 className="pl-5 text-2xl font-bold tracking-wide mb-6">
                New Cars by <span className="text-primary">Category</span>
            </h1>
            <Tabs
                selectedTabClassName="bg-[#FFB26A]  rounded-md shadow-xl" // Apply background color for the selected tab
                selectedIndex={selectedTabIndex}
                onSelect={(index) => setSelectedTabIndex(index)}>
                <TabList className="md:flex justify-center items-center gap-10 hidden">
                    {Object.keys(carData).map((brand, index) => (
                        <Tab key={brand} className="w-28 h-20 mb-8 shadow-2xl shadow-gray-500 rounded-md cursor-pointer">
                            <img src={carLogos[index]} alt={brand} className="h-12 mb-2 w-16 mx-auto" />
                            <span className="flex justify-center text-sm font-bold tracking-wide">{brand.toUpperCase()}</span>
                        </Tab>
                    ))}
                </TabList>

                {Object.entries(carData).map(([brand, cars], index) => (
                    <TabPanel key={brand}>
                        <div className="grid md:grid-cols-4 gap-4">
                            {cars.map((car) => (
                                <div
                                    key={car.id}
                                    className={`border rounded-lg shadow-xl pb-5 hover:-translate-y-1 duration-300 transition-all ease-out mb-10 ${selectedTabIndex === index ? 'bg-stone-100' : ''}`}>
                                    <ImageZoom>
                                        <img className="w-full rounded-t-md duration-500 transition-all ease-linear hover:scale-110" src={car.image} alt={car.carName} />
                                    </ImageZoom>
                                    <h2 className="text-left px-5 text-xl font-bold tracking-wider mt-4">{car.carName}</h2>
                                    <p className="text-left px-5 text-lg font-medium tracking-wider">{car.price}</p>
                                    <div className="px-5 mt-4">
                                        <button className="border border-primary w-full py-2 rounded-lg text-sm font-semibold tracking-wider text-primary hover:bg-primary hover:text-white transition duration-500 ease-in-out transform hover:scale-95">
                                            <Link to={`/details/${brand}/${car.id}`}>Check the Details</Link>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </TabPanel>
                ))}
            </Tabs>
        </section>
    );
};

export default NewCarsByCategory;
