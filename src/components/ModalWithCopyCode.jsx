import { Box } from '@mui/material';
import React, { useState } from 'react';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

function ModalWithCopyCode({
    cssCode,
    tailwindCode,
    inlineCode,
    openModal,
    bgPageColor,
    borderColor,
    setOpenModal,
}) {
    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleClose = () => {
        setOpenModal(false);
    };

    const convertNewlinesToBreaks = (text) => {
        return text.split('\n').map((line, index) => (
            <React.Fragment key={index}>
                {line}
                <br />
            </React.Fragment>
        ));
    };

    return (
        <div
            className={`absolute flex-1 flex-col items-center justify-start w-full h-dvh  ${
                openModal ? 'flex' : 'hidden'
            } *:mix-blend-difference *:z-[9999]`}
            style={{
                backgroundColor: bgPageColor,
                backdropFilter: 'blur(10px)',
                opacity: 0.8,
            }}
        >
            <TabContext value={value}>
                <Box
                    sx={{
                        borderBottom: 1,
                        borderColor: 'divider',
                        backgroundColor: bgPageColor,
                        border: `1px solid ${borderColor}`,
                        zIndex: 9999,
                        marginTop: '15%',
                        position: 'relative',
                        mixBlendMode: 'difference',
                    }}
                >
                    <div
                        onClick={handleClose}
                        className={`cursor-pointer text-white 
                             border-[1px]  absolute right-[-41px] top-[-1px] w-10 h-[50px] flex items-center justify-center text-xl *:mix-blend-difference *:z-[9999]`}
                        style={{
                            borderColor: borderColor,
                            backgroundColor: bgPageColor,
                        }}
                    >
                        X
                    </div>
                    <TabList
                        onChange={handleChange}
                        aria-label="Style Codes"
                        variant="fullWidth"
                    >
                        <Tab
                            label="CSS"
                            value="1"
                            sx={{
                                color: '#ffffff',
                                mixBlendMode: 'difference',
                            }}
                            autoFocus={true}
                        />
                        <Tab
                            label="Tailwind"
                            value="2"
                            sx={{
                                color: '#ffffff',
                                mixBlendMode: 'difference',
                            }}
                        />
                        <Tab
                            label="Inline"
                            value="3"
                            sx={{
                                color: '#ffffff',
                                mixBlendMode: 'difference',
                            }}
                        />
                    </TabList>
                </Box>
                <TabPanel
                    value="1"
                    sx={{
                        color: '#ffffff',
                        mixBlendMode: 'difference',
                        textAlign: 'center',
                    }}
                >
                    {convertNewlinesToBreaks(cssCode)}
                </TabPanel>
                <TabPanel
                    value="2"
                    sx={{
                        color: '#ffffff',
                        mixBlendMode: 'difference',
                        textAlign: 'center',
                    }}
                >
                    {convertNewlinesToBreaks(tailwindCode)}
                </TabPanel>
                <TabPanel
                    value="3"
                    sx={{
                        color: '#ffffff',
                        mixBlendMode: 'difference',
                        textAlign: 'center',
                    }}
                >
                    {convertNewlinesToBreaks(inlineCode)}
                </TabPanel>
            </TabContext>
        </div>
    );
}

export default ModalWithCopyCode;
