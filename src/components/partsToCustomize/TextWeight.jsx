import { Slider } from '@mui/material';
import React from 'react';

function TextWeight({ textWeight, setTextWeight, textColor }) {
    return (
        <div
            className="flex items-center justify-center text-center p-6 *:flex-1"
            style={{ color: textColor }}
        >
            <label
                htmlFor="textWeight"
                className="w-full h-full flex items-center justify-center "
            >
                Text Weight
            </label>
            <Slider
                aria-label="Custom marks"
                defaultValue={textWeight}
                step={10}
                valueLabelDisplay="auto"
                onChange={(e, value) => setTextWeight(value)}
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

export default TextWeight;
