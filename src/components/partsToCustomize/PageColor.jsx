import React, { useState } from 'react';

function PageColor({ bgPageColor, setBgPageColor, textColor }) {
    const [tempColor, setTempColor] = useState(bgPageColor);

    const handleColorChange = (e) => {
        setTempColor(e.target.value);
    };

    const handleColorComplete = () => {
        setBgPageColor(tempColor);
    };
    return (
        <div
            className="flex items-center justify-center text-center p-6 *:flex-1 *:cursor-pointer"
            style={{
                background: bgPageColor,
                color: textColor,
            }}
        >
            <label
                htmlFor="colorBgPage"
                className="w-full h-full flex items-center justify-center "
            >
                Page Color
            </label>
            <input
                type="color"
                className="opacity-0 absolute"
                id="colorBgPage"
                value={bgPageColor}
                onChange={handleColorChange}
                onBlur={handleColorComplete}
            />
        </div>
    );
}

export default PageColor;
