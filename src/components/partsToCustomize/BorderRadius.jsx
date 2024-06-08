import { Slider } from '@mui/material';
import React from 'react';

function BorderRadius({ borderRadius, setBorderRadius }) {
    return (
        <div className="flex items-center justify-center text-center p-6 *:flex-1">
            <label
                htmlFor="borderRadius"
                className="w-full h-full flex items-center justify-center mix-blend-difference text-2xl"
            >
                Border Radius
            </label>
            <Slider
                aria-label="Custom marks"
                defaultValue={borderRadius}
                step={1}
                valueLabelDisplay="auto"
                onChange={(e, value) => setBorderRadius(value)}
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

export default BorderRadius;
