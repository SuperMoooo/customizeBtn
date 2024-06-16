import React, { useState } from 'react';
import NavBar from '../components/Navbar';

export default function Sliders() {
    const [bgPageColor, setBgPageColor] = useState('#1a1a1a');
    return (
        <main className="flex flex-row" style={{ background: bgPageColor }}>
            <NavBar />
        </main>
    );
}
