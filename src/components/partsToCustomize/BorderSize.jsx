import React from 'react';
import { Slider } from '@mui/material';
function BorderSize({ borderWidth, setBorderWidth, textColor }) {
    return (
        <div
            className="flex items-center justify-center text-center p-6 *:flex-1"
            style={{ color: textColor }}
        >
            <label
                htmlFor="borderSize"
                className="w-full h-full flex items-center justify-center  "
            >
                Border Size
            </label>
            <Slider
                aria-label="Custom marks"
                defaultValue={borderWidth}
                step={1}
                valueLabelDisplay="auto"
                onChange={(e, value) => setBorderWidth(value)}
                sx={{
                    color: '#4b4b4b',
                    width: '50%',
                    height: '10px',
                    mt: 0.5,
                }}
            />
        </div>
    );
}

export default BorderSize;
