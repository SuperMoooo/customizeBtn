import { Switch } from '@mui/material';
import React from 'react';

function ShadowColor({ shadowColor, setShadowColor, shadowOn, setShadowOn }) {
    return (
        <div
            className="flex items-center justify-around text-center p-6 *:cursor-pointer"
            style={{
                background: shadowColor,
            }}
        >
            <label
                htmlFor="colorShadow"
                className="w-full h-full flex items-center justify-center mix-blend-difference "
            >
                Shadow Color
            </label>
            <input
                type="color"
                className="opacity-0 absolute"
                id="colorShadow"
                value={shadowColor}
                onChange={(e) => setShadowColor(e.target.value)}
            />
            <Switch
                checked={shadowOn}
                onChange={(e) => setShadowOn((prev) => !prev)}
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

export default ShadowColor;
