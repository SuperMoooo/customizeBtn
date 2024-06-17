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
        <section
            style={{ background: bgPageColor }}
            className="grid *:text-sm rounded md:grid-cols-5 lg:grid-cols-8 grid-cols-3 gap-4  justify-items-center  *:rounded  items-center justify-center  w-full *:tracking-widest  *:border *:border-[#4b4b4b] *:shadow *:flex-1 *:w-40 *:h-20 *:flex *:items-center *:justify-center *:flex-col  *:space-y-2"
        >
            <TextColor textColor={textColor} setTextColor={setTextColor} />
            <FontSize
                fontSize={fontSize}
                setFontSize={setFontSize}
                textColor={textColor}
            />
            <TextWeight
                textWeight={textWeight}
                setTextWeight={setTextWeight}
                textColor={textColor}
            />
            <LetterSpacing
                letterSpacing={letterSpacing}
                setLetterSpacing={setLetterSpacing}
                textColor={textColor}
            />
            <BackgroundColor
                bgColor={bgColor}
                setBgColor={setBgColor}
                bgOn={bgOn}
                setBgOn={setBgOn}
                textColor={textColor}
            />
            <BorderColor
                borderColor={borderColor}
                setBorderColor={setBorderColor}
                borderOn={borderOn}
                setBorderOn={setBorderOn}
                textColor={textColor}
            />
            <PageColor
                bgPageColor={bgPageColor}
                setBgPageColor={setBgPageColor}
                textColor={textColor}
            />
            <HoverColor
                hoverColor={hoverColor}
                setHoverColor={setHoverColor}
                hoverOn={hoverOn}
                setHoverOn={setHoverOn}
                textColor={textColor}
            />

            <ShadowColor
                shadowColor={shadowColor}
                setShadowColor={setShadowColor}
                shadowOn={shadowOn}
                setShadowOn={setShadowOn}
                textColor={textColor}
            />
            <ShadowOffset
                shadowOffset={shadowOffset}
                setShadowOffset={setShadowOffset}
                textColor={textColor}
            />
            <ShadowBlur
                shadowBlur={shadowBlur}
                setShadowBlur={setShadowBlur}
                textColor={textColor}
            />
            <BorderSize
                borderWidth={borderWidth}
                setBorderWidth={setBorderWidth}
                textColor={textColor}
            />

            <BorderRadius
                borderRadius={borderRadius}
                setBorderRadius={setBorderRadius}
                textColor={textColor}
            />
            <BorderStyle
                borderStyle={borderStyle}
                setBorderStyle={setBorderStyle}
                textColor={textColor}
            />
            <Width width={width} setWidth={setWidth} textColor={textColor} />

            <Height
                height={height}
                setHeight={setHeight}
                textColor={textColor}
            />
        </section>
    );
}
