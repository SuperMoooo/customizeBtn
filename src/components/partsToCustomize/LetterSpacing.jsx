import { Slider } from '@mui/material';
import React from 'react';

function LetterSpacing({ LetterSpacing, setLetterSpacing, textColor }) {
    return (
        <div
            className="flex items-center justify-center text-center p-6 *:flex-1"
            style={{ color: textColor }}
        >
            <label
                htmlFor="width"
                className="w-full h-full flex items-center justify-center  "
            >
                Letter Spacing
            </label>
            <Slider
                aria-label="Custom marks"
                defaultValue={LetterSpacing}
                step={1}
                valueLabelDisplay="auto"
                onChange={(e, value) => setLetterSpacing(value)}
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

export default LetterSpacing;
