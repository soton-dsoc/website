import './Home.css';
import { Button, Center, Grid, Group, Title, Text, Container } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import React from 'react';
import { useMantineTheme } from '@mantine/core';
import { ReactComponent as DiscordLogo } from './discord-logo.svg'
import styled from 'styled-components';

const Shit = styled.div`
    background-color: white;
`

function Home() {
    const mediaQuery = useMediaQuery('(min-width: 992px)');
    const theme = useMantineTheme();

    console.log(theme.colors)

    return (
        // <Container padding={mediaQuery ? 100 : 30} fluid>
        //     <Grid style={{ height: '100vh' }} align="center">
        //         <Grid.Col lg={6} md={12} align="center" justify="center" style={{ textAlign: 'left', overflowY: 'hidden' }}>
        //             <div id='subtitle'>
        //                 We are the
        //             </div>
        //             <div id='title'>
        //                 Decentralised <br></br>
        //                 Society
        //             </div>
        //             <Shit>

        //             </Shit>
        //         </Grid.Col>

        //         <Grid.Col lg={6} md={12} align="center">
        //             {/* <Button variant='gradient' gradient={{ from: 'grape', to: 'dark'}}>Join us</Button> */}
        //             <Container padding={250}>
        //                 <Group direction='column' grow>
        //                     <Button className="round-corners" leftIcon={<DiscordLogo width={20} />} variant='gradient' style={{background: 'linear-gradient(90deg, #9000A8, #0066FF)'}}>Join us</Button>
        //                     <Button className="round-corners" variant='gradient' style={{ background: 'linear-gradient(red, blue)' }}>What's on</Button>
        //                 </Group>
        //             </Container>
        //         </Grid.Col>
        //     </Grid>
        // </Container>

        <div className='home'>
            <div className='home-block home-block-title'>
                <div>
                    <div id="subtitle">
                        We are the
                    </div>
                    <div id="title">
                        Decentralised <br></br>
                        Society
                    </div>
                </div>
            </div>

            <div className='home-block'>
                <div className='flex column align-center justify-center'>
                    <div className='home-button home-button-join'>
                        Join us
                        <DiscordLogo style={{ height: '20px' }}></DiscordLogo>
                    </div>


                    <div className='home-button home-button-whatson' style={{ position: 'relative', padding: '5px', background: 'linear-gradient(90deg, #0066FF, #9000A8)'}}>
                        <div className='flex align-center justify-center' style={{ paddingTop: '5px', paddingBottom: '5px', width: '100%', backgroundColor: 'black'}}>
                            <span>What's on</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
