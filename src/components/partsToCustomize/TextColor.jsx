import React from 'react';

function TextColor({ textColor, setTextColor }) {
    return (
        <div
            className="flex items-center justify-center text-center *:cursor-pointer"
            style={{
                background: textColor,
            }}
        >
            <label
                htmlFor="colorText"
                className="w-full h-full flex items-center justify-center mix-blend-difference "
            >
                Text Color
            </label>
            <input
                type="color"
                className="opacity-0 absolute"
                id="colorText"
                value={textColor}
                onChange={(e) => setTextColor(e.target.value)}
            />
        </div>
    );
}

export default TextColor;
