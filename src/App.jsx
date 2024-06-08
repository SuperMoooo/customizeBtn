import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Card from './pages/Card';
import ButtonPage from './pages/ButtonPage';
import Modal from './pages/Modal';
import Slider from './pages/Slider';
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/button" element={<ButtonPage />} />
                <Route path="/card" element={<Card />} />
                <Route path="/modal" element={<Modal />} />
                <Route path="/slider" element={<Slider />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
