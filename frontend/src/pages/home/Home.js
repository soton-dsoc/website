import './Home.css';
import React from 'react';
import { ReactComponent as DiscordLogo } from './discord-logo.svg'

function Home() {
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

            <div className='home-block home-block-cta'>
                <div className='flex column align-center justify-center'>
                    <div className='home-button home-button-join'>
                        Join us
                        <DiscordLogo style={{ height: '20px', marginLeft: '5px' }}></DiscordLogo>
                    </div>


                    {/* <div className='home-button home-button-whatson' style={{ position: 'relative', padding: '5px', background: 'linear-gradient(90deg, #0066FF, #9000A8)'}}>
                        <div className='flex align-center justify-center' style={{ paddingTop: '5px', paddingBottom: '5px', width: '100%', backgroundColor: 'black'}}>
                            <span>What's on</span>
                        </div>
                    </div> */}


                    <a className='home-button-whatson' style={{ display: 'grid' }} href='#events'>
                        <div style={{ gridArea: '1 / 1 / 4 / 2', backgroundColor: '#0066FF', borderTopLeftRadius: '5px', borderBottomLeftRadius: '5px' }}></div>
                        <div style={{ gridArea: '1 / 2 / 2 / 3', background: 'linear-gradient(90deg, #0066FF, #9000A8)' }}></div>

                        <div style={{ gridArea: '2 / 2 / 3 / 3', padding: '5px 0', textAlign: 'center', backgroundColor: 'rgba(0,0,0,0.2)' }}>
                            What's on
                        </div>

                        <div style={{ gridArea: '1 / 3 / 4 / 4', backgroundColor: '#9000A8', borderTopRightRadius: '5px', borderBottomRightRadius: '5px' }}></div>
                        <div style={{ gridArea: '3 / 2 / 4 / 3', background: 'linear-gradient(90deg, #0066FF, #9000A8)' }}></div>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Home;
