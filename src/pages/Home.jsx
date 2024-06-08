import { useState } from 'react';
import SideBar from '../components/SideBar';

export default function Home() {
    const [bgPageColor, setBgPageColor] = useState('#1a1a1a');
    return (
        <main
            style={{ background: bgPageColor }}
            className="flex flex-row items-center justify-center w-full h-full"
        >
            <SideBar />
            <article className="flex flex-col items-center justify-center w-full h-full flex-1 space-y-8">
                <h1 className="text-6xl uppercase font-thin tracking-widest text-white">
                    Welcome
                </h1>
                <h2 className="text-3xl uppercase font-thin tracking-widest text-white">
                    Click, Customize, Copy
                </h2>
            </article>
        </main>
    );
}
