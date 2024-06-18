import { useState } from 'react';
import Button from '../components/Button';
import BtnCopyCode from '../components/BtnCopyCode';
import ModifyAppearance from '../components/ModifyAppearance';

export default function HomePage() {
    const [textColor, setTextColor] = useState('#6a20ab');
    const [bgColor, setBgColor] = useState('#3A3A3A');
    const [borderColor, setBorderColor] = useState('#3A3A3A');
    const [borderWidth, setBorderWidth] = useState(1);
    const [borderRadius, setBorderRadius] = useState(4);
    const [borderStyle, setBorderStyle] = useState('solid');
    const [bgPageColor, setBgPageColor] = useState('#1a1a1a');
    const [textWeight, setTextWeight] = useState(30);
    const [fontSize, setFontSize] = useState(20);
    const [shadowColor, setShadowColor] = useState('#3A3A3A');
    const [bgOn, setBgOn] = useState(true);
    const [borderOn, setBorderOn] = useState(true);
    const [shadowOn, setShadowOn] = useState(true);
    const [width, setWidth] = useState(10);
    const [height, setHeight] = useState(5);
    const [shadowBlur, setShadowBlur] = useState(3);
    const [shadowOffset, setShadowOffset] = useState(1);
    const [letterSpacing, setLetterSpacing] = useState(0);
    const [hoverColor, setHoverColor] = useState('#ff0000');
    const [hoverOn, setHoverOn] = useState(true);

    const [cssCode, setCssCode] = useState('');
    const [tailwindCode, setTailwindCode] = useState('');
    const [inlineCode, setInlineCode] = useState('');

    return (
        <main
            style={{ background: bgPageColor }}
            className="flex flex-col items-center justify-center w-full h-full md:h-dvh p-6 flex-1 relative"
        >
            <article className="flex-1 md:flex-row flex-col justify-center flex items-center *:flex-1 w-full h-full">
                <BtnCopyCode
                    cssCode={cssCode}
                    tailwindCode={tailwindCode}
                    inlineCode={inlineCode}
                />
                <Button
                    textColor={textColor}
                    bgColor={bgColor}
                    borderColor={borderColor}
                    textWeight={textWeight}
                    bgOn={bgOn}
                    borderOn={borderOn}
                    shadowOn={shadowOn}
                    fontSize={fontSize}
                    width={width}
                    height={height}
                    borderWidth={borderWidth}
                    shadowColor={shadowColor}
                    borderRadius={borderRadius}
                    borderStyle={borderStyle}
                    shadowBlur={shadowBlur}
                    shadowOffset={shadowOffset}
                    letterSpacing={letterSpacing}
                    hoverColor={hoverColor}
                    hoverOn={hoverOn}
                    setCssCode={setCssCode}
                    setTailwindCode={setTailwindCode}
                    setInlineCode={setInlineCode}
                />
            </article>

            <ModifyAppearance
                bgPageColor={bgPageColor}
                textColor={textColor}
                bgColor={bgColor}
                borderColor={borderColor}
                setBgColor={setBgColor}
                setTextColor={setTextColor}
                setBorderColor={setBorderColor}
                setBgPageColor={setBgPageColor}
                textWeight={textWeight}
                bgOn={bgOn}
                borderOn={borderOn}
                shadowOn={shadowOn}
                setTextWeight={setTextWeight}
                setBgOn={setBgOn}
                setBorderOn={setBorderOn}
                setShadowOn={setShadowOn}
                fontSize={fontSize}
                width={width}
                height={height}
                borderWidth={borderWidth}
                setBorderWidth={setBorderWidth}
                setWidth={setWidth}
                setHeight={setHeight}
                setFontSize={setFontSize}
                shadowColor={shadowColor}
                setShadowColor={setShadowColor}
                borderRadius={borderRadius}
                setBorderRadius={setBorderRadius}
                borderStyle={borderStyle}
                setBorderStyle={setBorderStyle}
                shadowOffset={shadowOffset}
                setShadowOffset={setShadowOffset}
                shadowBlur={shadowBlur}
                setShadowBlur={setShadowBlur}
                letterSpacing={letterSpacing}
                setLetterSpacing={setLetterSpacing}
                hoverColor={hoverColor}
                setHoverColor={setHoverColor}
                hoverOn={hoverOn}
                setHoverOn={setHoverOn}
            />
        </main>
    );
}
