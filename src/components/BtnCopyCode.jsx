import { Box } from '@mui/material';
import React, { useState } from 'react';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

function BtnCopyCode({ cssCode, tailwindCode, inlineCode }) {
    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
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
        <div className="flex-1 flex-col items-center justify-start mt-28 w-full h-full flex *:mix-blend-difference ">
            <TabContext value={value}>
                <Box
                    sx={{
                        borderBottom: 1,
                        border: '2px solid #3A3A3A',
                        mixBlendMode: 'difference',
                        width: '100%',
                    }}
                >
                    <TabList
                        onChange={handleChange}
                        aria-label="Style Codes"
                        variant="fullWidth"
                        indicatorColor="secondary"
                        textColor="inherit"
                    >
                        <Tab
                            label="CSS"
                            value="1"
                            sx={{
                                color: '#ffffff',
                            }}
                            autoFocus={true}
                        />
                        <Tab
                            label="Tailwind"
                            value="2"
                            sx={{
                                color: '#ffffff',
                            }}
                        />
                        <Tab
                            label="Inline"
                            value="3"
                            sx={{
                                color: '#ffffff',
                            }}
                        />
                    </TabList>
                </Box>
                <TabPanel
                    value="1"
                    sx={{
                        color: '#ffffff',
                        textAlign: 'center',
                        border: '2px solid #3A3A3A',
                        width: '100%',
                    }}
                >
                    {convertNewlinesToBreaks(cssCode)}
                </TabPanel>
                <TabPanel
                    value="2"
                    sx={{
                        color: '#ffffff',
                        border: '2px solid #3A3A3A',
                        width: '100%',
                        textAlign: 'center',
                    }}
                >
                    {convertNewlinesToBreaks(tailwindCode)}
                </TabPanel>
                <TabPanel
                    value="3"
                    sx={{
                        color: '#ffffff',
                        textAlign: 'center',
                        border: '2px solid #3A3A3A',
                        width: '100%',
                    }}
                >
                    {convertNewlinesToBreaks(inlineCode)}
                </TabPanel>
            </TabContext>
        </div>
    );
}

export default BtnCopyCode;
