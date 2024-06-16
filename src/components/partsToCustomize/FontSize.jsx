import React from 'react';
import { Slider } from '@mui/material';
function FontSize({ fontSize, setFontSize }) {
    return (
        <div className="flex items-center justify-center text-center p-6 *:flex-1">
            <label
                htmlFor="fontSize"
                className="w-full h-full flex items-center justify-center mix-blend-difference "
            >
                Font Size
            </label>
            <Slider
                aria-label="Custom marks"
                defaultValue={fontSize}
                step={1}
                valueLabelDisplay="auto"
                onChange={(e, value) => setFontSize(value)}
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

export default FontSize;
