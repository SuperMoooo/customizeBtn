import React from 'react';
import TextColor from './partsToCustomize/TextColor';
import BackgroundColor from './partsToCustomize/BackgroundColor';
import BorderColor from './partsToCustomize/BorderColor';
import PageColor from './partsToCustomize/PageColor';
import FontSize from './partsToCustomize/FontSize';
import TextWeight from './partsToCustomize/TextWeight';
import BorderSize from './partsToCustomize/BorderSize';
import ShadowColor from './partsToCustomize/ShadowColor';
import Width from './partsToCustomize/Width';
import Height from './partsToCustomize/Height';
import BorderRadius from './partsToCustomize/BorderRadius';
import BorderStyle from './partsToCustomize/BorderStyle';
import ShadowOffset from './partsToCustomize/ShadowOffset';
import ShadowBlur from './partsToCustomize/ShadowBlur';
import LetterSpacing from './partsToCustomize/LetterSpacing';
import HoverColor from './partsToCustomize/HoverColor';
export default function ModifyAppearance({
    bgPageColor,
    textColor,
    bgColor,
    borderColor,
    setBgColor,
    setTextColor,
    setBorderColor,
    setBgPageColor,
    textWeight,
    bgOn,
    borderOn,
    shadowOn,
    setTextWeight,
    setBgOn,
    setBorderOn,
    setShadowOn,
    fontSize,
    width,
    height,
    borderWidth,
    setBorderWidth,
    setWidth,
    setHeight,
    setFontSize,
    shadowColor,
    setShadowColor,
    borderRadius,
    setBorderRadius,
    borderStyle,
    setBorderStyle,
    shadowOffset,
    setShadowOffset,
    shadowBlur,
    setShadowBlur,
    letterSpacing,
    setLetterSpacing,
    hoverColor,
    setHoverColor,
    hoverOn,
    setHoverOn,
}) {
    return (
        <div className="grid grid-cols-4 justify-items-center *:rounded gap-2  items-center justify-center  w-full *:tracking-widest  *:text-white *:border *:border-[#4b4b4b] *:flex-1 *:w-full *:h-20 *:flex *:items-center *:justify-center *:cursor-pointer *:space-x-4 *:shadow">
            <TextColor textColor={textColor} setTextColor={setTextColor} />

            <BackgroundColor
                bgColor={bgColor}
                setBgColor={setBgColor}
                bgOn={bgOn}
                setBgOn={setBgOn}
            />
            <BorderColor
                borderColor={borderColor}
                setBorderColor={setBorderColor}
                borderOn={borderOn}
                setBorderOn={setBorderOn}
            />
            <PageColor
                bgPageColor={bgPageColor}
                setBgPageColor={setBgPageColor}
            />
            <FontSize fontSize={fontSize} setFontSize={setFontSize} />
            <ShadowColor
                shadowColor={shadowColor}
                setShadowColor={setShadowColor}
                shadowOn={shadowOn}
                setShadowOn={setShadowOn}
            />
            <BorderSize
                borderWidth={borderWidth}
                setBorderWidth={setBorderWidth}
            />
            <HoverColor
                hoverColor={hoverColor}
                setHoverColor={setHoverColor}
                hoverOn={hoverOn}
                setHoverOn={setHoverOn}
            />

            <TextWeight textWeight={textWeight} setTextWeight={setTextWeight} />
            <ShadowOffset
                shadowOffset={shadowOffset}
                setShadowOffset={setShadowOffset}
            />

            <BorderRadius
                borderRadius={borderRadius}
                setBorderRadius={setBorderRadius}
            />
            <Width width={width} setWidth={setWidth} />

            <LetterSpacing
                letterSpacing={letterSpacing}
                setLetterSpacing={setLetterSpacing}
            />
            <ShadowBlur shadowBlur={shadowBlur} setShadowBlur={setShadowBlur} />
            <BorderStyle
                borderStyle={borderStyle}
                setBorderStyle={setBorderStyle}
            />
            <Height height={height} setHeight={setHeight} />
        </div>
    );
}
