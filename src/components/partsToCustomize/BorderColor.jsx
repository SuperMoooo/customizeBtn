import { Switch } from '@mui/material';
import React, { useState } from 'react';

function BorderColor({
    borderColor,
    setBorderColor,
    borderOn,
    setBorderOn,
    textColor,
}) {
    const [tempColor, setTempColor] = useState(borderColor);

    const handleColorChange = (e) => {
        setTempColor(e.target.value);
    };

    const handleColorComplete = () => {
        setBorderColor(tempColor);
    };
    return (
        <div
            className="flex items-center justify-center text-center p-6 *:cursor-pointer"
            style={{
                background: borderColor,
                color: textColor,
            }}
        >
            <label
                htmlFor="colorBorder"
                className="w-full h-full flex items-center justify-center  "
            >
                Border Color
            </label>
            <input
                type="color"
                className="opacity-0 absolute"
                id="colorBorder"
                value={borderColor}
                onChange={handleColorChange}
                onBlur={handleColorComplete}
            />
            <Switch
                checked={borderOn}
                onChange={(e) => setBorderOn((prev) => !prev)}
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

export default BorderColor;
