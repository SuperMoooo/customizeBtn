import { Switch } from '@mui/material';
import React, { useState } from 'react';

function HoverColor({
    hoverColor,
    setHoverColor,
    hoverOn,
    setHoverOn,
    textColor,
}) {
    const [tempColor, setTempColor] = useState(hoverColor);

    const handleColorChange = (e) => {
        setTempColor(e.target.value);
    };

    const handleColorComplete = () => {
        setHoverColor(tempColor);
    };
    return (
        <div
            className="flex items-center justify-center text-center p-6 *:cursor-pointer"
            style={{
                background: hoverColor,
                color: textColor,
            }}
        >
            <label
                htmlFor="hoverColor"
                className="w-full h-full flex items-center justify-center "
            >
                Hover Color
            </label>
            <input
                type="color"
                className="opacity-0 absolute"
                id="hoverColor"
                value={hoverColor}
                onChange={handleColorChange}
                onBlur={handleColorComplete}
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
