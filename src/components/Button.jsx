import React, { useState } from 'react';

export default function Button({
    textColor,
    bgColor,
    borderColor,
    textWeight,
    bgOn,
    borderOn,
    shadowOn,
    fontSize,
    width,
    height,
    borderWidth,
    shadowColor,
    borderRadius,
    borderStyle,
    shadowBlur,
    shadowOffset,
    letterSpacing,
    hoverColor,
    hoverOn,
    setCssCode,
    setTailwindCode,
    setInlineCode,
}) {
    const [mouseHover, setMouseHover] = useState(false);
    const handleMouseHover = () => {
        setMouseHover(true);
    };
    const handleMouseLeave = () => {
        setMouseHover(false);
    };

    const generateCode = () => {
        setCssCode(
            `button{ \n background: ${
                bgOn ? bgColor : 'transparent'
            } \n border-color: ${
                borderOn ? borderColor : 'transparent'
            } \n color: ${textColor} \n font-size: ${fontSize}px \n font-weight: ${
                textWeight * 10
            }, \n width: ${width}rem, \n height: ${height}rem, \n border: ${borderWidth}px ${borderStyle} ${borderColor}, \n border-radius: ${borderRadius}px, \n letter-spacing: ${letterSpacing}px, \n box-shadow: 0 ${shadowOffset}px ${shadowBlur}px 0 ${shadowColor}, \n transition: all 0.3s ease-in-out \n }`
        );
        setTailwindCode(
            `className=" \n bg-[${bgOn ? bgColor : 'transparent'}]\n border-[${
                borderOn ? borderColor : 'transparent'
            }] \n text-[${textColor}] \n font-[${
                textWeight * 10
            }] \n text-[${fontSize}px] \n w-[${width}rem] \n h-[${height}rem] \n border-[${borderWidth}px] \n border-[${borderStyle}] \n rounded-[${borderRadius}px] \n shadow-[0px_${shadowOffset}px_${shadowBlur}px_0px_${shadowColor}] \n transition \n duration-300 \n ease-in-out \n hover:bg-[${
                hoverOn ? hoverColor : 'transparent'
            }] \n tracking-[${letterSpacing}px] \n "`
        );

        setInlineCode(
            `style={{ \n background: ${
                bgOn ? bgColor : 'transparent'
            }, \n borderColor: ${borderColor}, \n color: ${textColor}, \n fontSize: ${fontSize}px, \n fontWeight: ${
                textWeight * 10
            }, \n width: ${width}rem, \n height: ${height}rem, \n border: ${borderWidth}px ${borderStyle} ${borderColor}, \n borderRadius: ${borderRadius}px, \n letterSpacing: ${letterSpacing}px, \n boxShadow: 0 ${shadowOffset}px ${shadowBlur}px 0 ${shadowColor}, \n transition: all 0.3s ease-in-out \n }}`
        );
    };
    return (
        <div className="w-full h-full flex-1 flex items-center justify-center p-6 flex-col ">
            <button
                className={`uppercase `}
                onMouseOver={handleMouseHover}
                onMouseLeave={handleMouseLeave}
                style={{
                    background: bgOn ? bgColor : 'transparent',
                    borderColor: borderOn ? borderColor : 'transparent',
                    color: textColor,
                    boxShadow: shadowOn
                        ? `0 ${shadowOffset}px ${shadowBlur}px 0 ${shadowColor}`
                        : 'none',
                    width: `${width}rem`,
                    height: `${height}rem`,
                    fontSize: `${fontSize}px`,
                    borderWidth: `${borderWidth}px`,
                    borderRadius: `${borderRadius}px`,
                    borderStyle: `${borderStyle}`,
                    fontWeight: `${textWeight * 10}`,
                    letterSpacing: `${letterSpacing}px`,
                    transition: 'all 0.3s ease-in-out',
                    backgroundColor:
                        mouseHover && hoverOn
                            ? hoverColor
                            : bgOn
                            ? bgColor
                            : 'transparent',
                }}
            >
                Button
            </button>

            <div className="flex flex-row w-full mt-20">
                <div className="flex items-center justify-center flex-1 w-full">
                    <button
                        onClick={generateCode}
                        className="text-white text-xl  border-[#636363] border-2 p-4 rounded-full mix-blend-difference hover:px-16 origin-center transition-all duration-300"
                    >
                        {'Generate <>'}
                    </button>
                </div>
            </div>
        </div>
    );
}
