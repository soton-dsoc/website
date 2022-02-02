import './Event.css'

import { createRef, useEffect, useState } from 'react';

import arrow from './arrow.svg'
import eventImage from './event-image.png'
import { marked } from 'marked';

import Form from './form/Form.js'
import AddToCalendar from './calendar/Calendar';

function Event(props) {

    const [open, setOpen] = useState(true)

    let date = new Date(props.event.attributes.datetime)
    let time = date.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })

    let weekday = date.toLocaleDateString('en-GB', { weekday: 'long' })
    let day = date.toLocaleDateString('en-GB', { day: '2-digit' })
    let month = date.toLocaleDateString('en-GB', { month: 'short' })

    const body = marked.parse(props.event.attributes.body)
    const bodyElement = createRef()

    useEffect(() => {
        bodyElement.current.innerHTML = body
    })

    return (
        <div className='event' style={{ position: 'relative', background: 'linear-gradient(90deg, #222222, #464747' }}>
            <div className='event-snackbar flex row align-center justify-between' onClick={() => setOpen(!open)} style={{ background: props.event.attributes.background }}>
                <div className='event-snackbar-body'>
                    <div className='event-title'>
                        { props.event.attributes.title }
                    </div>
                    <div className='event-subtitle'>
                        { month } { day } ({ weekday }) @ { time }
                    </div>
                </div>

                <div className='event-snackbar-toggle'>
                    <img src={arrow} style={{ transform: open ? 'rotate(90deg)' : null }}></img>
                </div>
            </div>

            <div className='event-body-wrapper' style={open ? { maxHeight: '2000px' } : { maxHeight: 0, padding: 0 }}>

                <div className='event-body flex'>
                    <div className='body-left' style={{ flex: 7 }}>
                        <div ref={bodyElement} className='event-abstract event-container'>

                        </div>

                        <div className='event-images event-container'>
                            <img src={eventImage}></img>
                        </div>
                    </div>
                    <div className='body-right event-container' style={{ flex: 3, marginLeft: '50px' }}>
                        <div className='event-date flex column' style={{ justifyContent: 'left' }}>
                            <div className='event-title'>Time & place</div>
                            <span>February 8th @ 18:00</span>
                            <span>Physics buildng 46 / 2003</span>
                            <AddToCalendar></AddToCalendar>
                        </div>

                        <div className='event-organisers'>
                            <div className='event-title'>Organisers</div>
                            <span>dSoc</span>
                        </div>

                        <div className='event-guests'>
                            <div className='event-title'>Speakers</div>
                            <span>George Giamouridis</span>
                        </div>

                        <div className='event-objectives'>
                            <div className='event-title'>Learning objectives</div>
                            <div>Understand blockchain</div>
                            <div>Interact with sample chain</div>
                            <div>Understand how web3 works</div>
                            <div>Interact with real life decentralised application (dApp) to purchase NFT </div>
                        </div>
                    </div>
                </div>

                <div className='event-register'>
                    <div className='event-button'>Register</div>
                </div>

                <div>
                    <Form />
                </div>
            </div>
        </div>
    )
}

export default Event