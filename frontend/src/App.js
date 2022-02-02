import './App.css';
import Navbar from './navbar/Navbar.js'
import Home from './pages/home/Home.js'
import Events from './pages/events/Events.js'
import About from './pages/about/About.js'
import Footer from './footer/Footer.js'
import EventModal from './modal/event/Event.js'
// import { Button, Modal } from '@mantine/core';
import { useState } from 'react';
import smoothScrollPolyfillsMin from 'smooth-scroll';

window._scroll = new smoothScrollPolyfillsMin('a[href*="#"]')


function App() {
    // const [opened, setOpened] = useState(false);


    return (
        <div className="App">

            <Navbar></Navbar>
            <div className='body-wrapper'>
                <Home></Home>
                <div style={{ maxWidth: '100%', padding: '0 8vw' }}>
                    <About></About>
                    <Events></Events>
                </div>
            </div>


            {/* <Footer></Footer> */}
        </div>
    );
}

export default App;
