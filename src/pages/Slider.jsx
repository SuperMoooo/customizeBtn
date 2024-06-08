import React, { useState } from 'react';
import SideBar from '../components/SideBar';

export default function Sliders() {
    const [bgPageColor, setBgPageColor] = useState('#1a1a1a');
    return (
        <main className="flex flex-row" style={{ background: bgPageColor }}>
            <SideBar />
        </main>
    );
}
