import { Slider } from '@mui/material';
import React from 'react';

function Height({ height, setHeight, textColor }) {
    return (
        <div
            className="flex items-center justify-center text-center p-6 *:flex-1"
            style={{ color: textColor }}
        >
            <label
                htmlFor="height"
                className="w-full h-full flex items-center justify-center  "
            >
                Height
            </label>
            <Slider
                aria-label="Custom marks"
                defaultValue={height}
                step={1}
                valueLabelDisplay="auto"
                onChange={(e, value) => setHeight(value)}
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

export default Height;
