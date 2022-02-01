import './App.css';
import Navbar from './navbar/Navbar.js'
import Home from './pages/home/Home.js'
import Events from './pages/events/Events.js'
import About from './pages/about/About.js'
import Footer from './footer/Footer.js'
import EventModal from './modal/event/Event.js'
import { Button, Modal } from '@mantine/core';
import { useState } from 'react';


function App() {
    const [opened, setOpened] = useState(false);
    

    return (
        <div className="App">
            
            <Navbar></Navbar>
            <Home></Home>
            
                <About></About>
                <Events></Events>

            {/* <Footer></Footer> */}
            <Modal
            size="95%"
                overlayColor='#5E5E5E'
                overflow='inside'
                padding={30}
                centered
                opened={opened}
                onClose={() => setOpened(false)}
                styles={{
                    modal: { backgroundColor: "#5E5E5E"}
                }}
                overlayColor="#000000"
                title=""
                overlayOpacity={0.90}
            >
                <EventModal />
            </Modal>
            <Button onClick={() => setOpened(true)}>Open title modal</Button>
            <Footer></Footer>
        </div>
    );
}

export default App;
