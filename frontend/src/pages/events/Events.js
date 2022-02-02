import axios from 'axios';
import { useEffect, useState } from 'react';
import './Events.css';
import Event from './event/Event.js'

function Events() {

    const [events, setEvents] = useState(null)

    useEffect(() => {
        axios.get('http://10.14.200.195:1337/api/events?populate=*').then(r => {
            setEvents(r.data.data)
        })
    }, [])

    if (!events) return null

    return (
        <div id="events" style={{ marginTop: '50px' }}>
            {/* <Button>Hello</Button> */}
            <h1>Events</h1>
            <div className='event-list flex column'>
                {
                    events.map((e) => 
                        <Event event={e} key={ e.id }></Event>
                    )
                }
            </div>
        </div>
    );
}

export default Events;
