'use strict'

module.exports = {
    routes: [
        {
            method: 'GET',
            path: '/events/sendemail',
            handler: 'event-custom.sendEmail',
            config: {
                auth: false,
            },
        },
    ],
};