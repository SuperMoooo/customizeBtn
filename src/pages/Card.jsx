import { useState } from 'react';
import NavBar from '../components/Navbar';
import ModifyAppearance from '../components/ModifyAppearance';

export default function Cards() {
    const [textColor, setTextColor] = useState('#fff');
    const [bgColor, setBgColor] = useState('#3A3A3A');
    const [borderColor, setBorderColor] = useState('#3A3A3A');
    const [bgPageColor, setBgPageColor] = useState('#1a1a1a');
    return (
        <main className="flex flex-row" style={{ background: bgPageColor }}>
            <NavBar />
            <article className="flex flex-col items-center justify-center w-full h-full p-6 flex-1">
                <ModifyAppearance
                    bgPageColor={bgPageColor}
                    textColor={textColor}
                    bgColor={bgColor}
                    borderColor={borderColor}
                    setBgColor={setBgColor}
                    setTextColor={setTextColor}
                    setBorderColor={setBorderColor}
                    setBgPageColor={setBgPageColor}
                />
            </article>
        </main>
    );
}
