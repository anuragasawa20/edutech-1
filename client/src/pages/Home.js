import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import HomePartOne from './subpages/HomePartOne';
import HomePartTwo from './subpages/HomePartTwo';
import HomePartThree from './subpages/HomePartThree';
import HomePageFour from './subpages/HomePageFour';
import HomePageFive from './subpages/HomePageFive';
import HomePageSix from './subpages/HomePageSix';
import Footer from '../components/Footer';

const Home = () => {
    const [images, setImages] = useState([]);

    // Function to handle adding images from the admin panel
    const handleAddImage = (imageUrl) => {
        setImages([...images, imageUrl]);
    };

    return (
        <>
            <Navbar />
            <HomePartOne />
            <HomePartTwo />
            <HomePartThree />
            <HomePageFour />
            <HomePageFive />
            <HomePageSix />
            {images.map((imageUrl, index) => (
                <div
                    key={index}
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <img src={imageUrl} alt="img" style={{ maxWidth: '100%', maxHeight: '100%' }} />
                </div>
            ))}
            <Footer />
        </>
    );
};

export default Home;
