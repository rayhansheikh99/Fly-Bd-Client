import React from 'react';
import Footer from '../Footer/Footer';
import Menu from '../Header/Menu/Menu';
import Topmenu from '../Header/Menu/Topmenu';
import Slider from '../Header/Slider/Slider';

const Home = () => {
    return (
        <div>
            <Topmenu/>
            <Menu/>
            <Slider/>
            <Footer/>
        </div>
    );
};

export default Home;