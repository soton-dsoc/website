import React, { useEffect } from 'react';
import './Calendar.css'
import { atcb_init } from 'add-to-calendar-button';
import moment from 'moment';

const AddToCalendar = (props) => { // https://github.com/jekuer/add-to-calendar-button

    useEffect(() => atcb_init());

    let start = moment(props.event.startdate).format('MM-DD-YYYYTHH:MM')
    let end = moment(props.event.enddate).format('MM-DD-YYYYTHH:MM')

    console.log(start, end)

    const event = {
        name: props.event.title,
        description: "Decentralised Society",
        startDate: start,
        endDate: end,
        location: "Somewhere over the rainbow"
    }

    const defaultConfig = {
        event: {
            "@context": "https://schema.org",
            "@type": "Event",
            ...event
        },
        label: "Add to Calendar",
        options: [
            "Apple",
            "Google",
        ],
        timeZone: "Europe/London",
        timeZoneOffset: "+00:00",
        iCalFileName: "dSoc-event"
    }

    return (
        <div className='atcb'>
            <script type="application/ld+json">
                {JSON.stringify(defaultConfig)}
            </script>
        </div>
    );
}

export default AddToCalendar;