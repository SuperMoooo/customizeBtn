import { Switch } from '@mui/material';
import React from 'react';

function HoverColor({ hoverColor, setHoverColor, hoverOn, setHoverOn }) {
    return (
        <div
            className="flex items-center justify-center text-center p-6 *:cursor-pointer"
            style={{
                background: hoverColor,
            }}
        >
            <label
                htmlFor="hoverColor"
                className="w-full h-full flex items-center justify-center mix-blend-difference text-2xl"
            >
                Hover Color
            </label>
            <input
                type="color"
                className="opacity-0 absolute"
                id="hoverColor"
                value={hoverColor}
                onChange={(e) => setHoverColor(e.target.value)}
            />
            <Switch
                checked={hoverOn}
                onChange={(e) => setHoverOn((prev) => !prev)}
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

export default HoverColor;
