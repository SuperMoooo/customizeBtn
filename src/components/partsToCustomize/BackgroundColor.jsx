import { Switch } from '@mui/material';
import React from 'react';

function BackgroundColor({ bgColor, setBgColor, bgOn, setBgOn }) {
    return (
        <div
            className="flex items-center justify-center text-center p-6 *:cursor-pointer"
            style={{
                background: bgColor,
            }}
        >
            <label
                htmlFor="colorBg"
                className="w-full h-full flex items-center justify-center mix-blend-difference "
            >
                Bg Color
            </label>
            <input
                type="color"
                className="opacity-0 absolute"
                id="colorBg"
                value={bgColor}
                onChange={(e) => setBgColor(e.target.value)}
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
