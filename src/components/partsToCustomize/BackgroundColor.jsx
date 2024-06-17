import { Switch } from '@mui/material';
import React, { useState } from 'react';

function BackgroundColor({ bgColor, setBgColor, bgOn, setBgOn, textColor }) {
    const [tempColor, setTempColor] = useState(bgColor);

    const handleColorChange = (e) => {
        setTempColor(e.target.value);
    };

    const handleColorComplete = () => {
        setBgColor(tempColor);
    };
    return (
        <div
            className="flex items-center justify-center text-center p-6 *:cursor-pointer"
            style={{
                background: bgColor,
                color: textColor,
            }}
        >
            <label
                htmlFor="colorBg"
                className="w-full h-full flex items-center justify-center "
            >
                Bg Color
            </label>
            <input
                type="color"
                className="opacity-0 absolute"
                id="colorBg"
                value={bgColor}
                onChange={handleColorChange}
                onBlur={handleColorComplete}
            />
            <Switch
                checked={bgOn}
                onChange={(e) => setBgOn((prev) => !prev)}
                sx={{
                    color: '#4b4b4b',
                    '& .MuiSwitch-switchBase.Mui-checked': {
                        color: 'white',
                    },
                    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                        backgroundColor: 'white',
                    },
                }}
            />
        </div>
    );
}

export default BackgroundColor;
