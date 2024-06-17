import React, { useState } from 'react';

function TextColor({ textColor, setTextColor }) {
    const [tempColor, setTempColor] = useState(textColor);

    const handleColorChange = (e) => {
        setTempColor(e.target.value);
    };

    const handleColorComplete = () => {
        setTextColor(tempColor);
    };

    return (
        <div
            className="flex items-center justify-center text-center *:cursor-pointer relative"
            style={{
                background: textColor,
            }}
        >
            <label
                htmlFor="colorText"
                className="w-full h-full flex items-center justify-center text-white "
            >
                Text Color
            </label>

            <input
                type="color"
                className="opacity-0 absolute"
                id="colorText"
                value={tempColor}
                onChange={handleColorChange}
                onBlur={handleColorComplete}
            />
        </div>
    );
}

export default TextColor;
