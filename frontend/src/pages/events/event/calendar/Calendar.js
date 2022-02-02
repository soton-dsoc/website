import React, { useEffect } from 'react';
import './Calendar.css'
import { atcb_init } from 'add-to-calendar-button';

const AddToCalendar = () => { // https://github.com/jekuer/add-to-calendar-button

    useEffect(() => atcb_init());

    const event = {
        name: "Add the title of your event",
        description: "A nice description does not hurt",
        startDate: "02-21-2022T10:13",
        endDate: "03-24-2022T17:57",
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
            "iCal",
            "Microsoft365",
            "Outlook.com",
            "Yahoo"
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