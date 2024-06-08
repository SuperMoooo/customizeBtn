import { useState } from 'react';
import SideBar from '../components/SideBar';
import ModifyAppearance from '../components/ModifyAppearance';
import Button from '../components/Button';
import ModalWithCopyCode from '../components/ModalWithCopyCode';

export default function Buttons() {
    const [textColor, setTextColor] = useState('#ffffff');
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
    const [openModal, setOpenModal] = useState(false);

    return (
        <main className="flex flex-row" style={{ background: bgPageColor }}>
            <SideBar />
            <article className="flex flex-col items-center justify-center w-full h-dhv p-6 flex-1 relative">
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
                    setOpenModal={setOpenModal}
                    setCssCode={setCssCode}
                    setTailwindCode={setTailwindCode}
                    setInlineCode={setInlineCode}
                />
                <ModalWithCopyCode
                    cssCode={cssCode}
                    tailwindCode={tailwindCode}
                    inlineCode={inlineCode}
                    openModal={openModal}
                    bgPageColor={bgPageColor}
                    borderColor={borderColor}
                    setOpenModal={setOpenModal}
                />
            </article>
        </main>
    );
}
