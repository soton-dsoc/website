import React from 'react';
import { MantineProvider } from '@mantine/core';

import Home from '../components/home/Home.js'
import Events from '../components/events/Events.js'
import About from '../components/about/About.js'

export default function MainPage() {
    return (
        <React.StrictMode>
            <MantineProvider theme={{
                colorScheme: 'dark',
                fontFamily: 'Roboto Mono',
                headings: {
                    fontFamily: 'Roboto Mono'
                }
            }}>
                <div className='body-wrapper'>
                    <Home></Home>
                    <div style={{ maxWidth: '100%', padding: '0 8vw' }}>
                        <About></About>
                        <Events></Events>
                    </div>
                </div>
            </MantineProvider>
        </React.StrictMode>
    )
}