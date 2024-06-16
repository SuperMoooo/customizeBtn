import { Slider } from '@mui/material';
import React from 'react';

function Width({ width, setWidth }) {
    return (
        <div className="flex items-center justify-center text-center p-6 *:flex-1">
            <label
                htmlFor="width"
                className="w-full h-full flex items-center justify-center mix-blend-difference "
            >
                Width
            </label>
            <Slider
                aria-label="Custom marks"
                defaultValue={width}
                step={1}
                valueLabelDisplay="auto"
                onChange={(e, value) => setWidth(value)}
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

export default Width;
