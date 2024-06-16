import React from 'react';

function BorderStyle({ borderStyle, setBorderStyle, textColor }) {
    return (
        <div
            className="flex flex-row items-center justify-center *:font-thin   p-6 *:flex-1"
            style={{ color: textColor }}
        >
            <label htmlFor="borderStyle">Border Style</label>
            <select
                id="borderStyle"
                defaultValue={borderStyle}
                onChange={(e) => setBorderStyle(e.target.value)}
                className="bg-transparent *:bg-[#4b4b4b] outline-none border-[0.5px] border-[#4b4b4b] cursor-pointer flex items-center justify-center"
            >
                <option value="solid">Solid</option>
                <option value="inset">Inset</option>
                <option value="outset">Outset</option>
                <option value="dotted">Dotted</option>
                <option value="dashed">Dashed</option>
            </select>
        </div>
    );
}

export default BorderStyle;
