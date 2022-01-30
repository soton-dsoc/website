import './App.css';
import Navbar from './navbar/Navbar.js'
import Home from './pages/home/Home.js'
import Events from './pages/events/Events.js'
import About from './pages/about/About.js'
import Footer from './footer/Footer.js'
import EventModal from './modal/event/Event.js'


function App() {
    return (
        <div className="App">
            
            <Navbar></Navbar>
            <Home></Home>
            <About></About>
            <Events></Events>
            <Footer></Footer>
            <EventModal></EventModal>

        </div>
    );
}

export default App;
