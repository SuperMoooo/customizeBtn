import { Slider } from '@mui/material';
import React from 'react';

function ShadowOffset({ shadowOffset, setShadowOffset, textColor }) {
    return (
        <div
            className="flex items-center justify-center text-center p-6 *:flex-1"
            style={{ color: textColor }}
        >
            <label
                htmlFor="shadowOffset"
                className="w-full h-full flex items-center justify-center "
            >
                Shadow Offset
            </label>
            <Slider
                aria-label="Custom marks"
                defaultValue={shadowOffset}
                step={1}
                valueLabelDisplay="auto"
                onChange={(e, value) => setShadowOffset(value)}
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

export default ShadowOffset;
