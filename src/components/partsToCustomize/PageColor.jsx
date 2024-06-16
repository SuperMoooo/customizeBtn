import React from 'react';

function PageColor({ bgPageColor, setBgPageColor }) {
    return (
        <div
            className="flex items-center justify-center text-center p-6 *:flex-1 *:cursor-pointer"
            style={{
                background: bgPageColor,
            }}
        >
            <label
                htmlFor="colorBgPage"
                className="w-full h-full flex items-center justify-center mix-blend-difference "
            >
                Page Color
            </label>
            <input
                type="color"
                className="opacity-0 absolute"
                id="colorBgPage"
                value={bgPageColor}
                onChange={(e) => setBgPageColor(e.target.value)}
            />
        </div>
    );
}

export default PageColor;
