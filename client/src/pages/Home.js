import React from 'react';
import Navbar from '../components/Navbar';
import image1 from '../Images/posters/imageOne.jpeg';
import image2 from '../Images/posters/imageTwo.jpeg';

import HomePartOne from './subpages/HomePartOne';

const Home = () => {
    return (
        <>
            <Navbar />
            <HomePartOne />
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <img src={image1} alt="img" style={{ maxWidth: "100%", maxHeight: "100%" }} />
            </div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <img src={image2} alt="img" style={{ maxWidth: "100%", maxHeight: "100%" }} />
            </div>
        </>
    );
}

export default Home;
