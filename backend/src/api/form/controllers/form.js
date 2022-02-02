'use strict';

/**
 *  form controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::form.form', ({ strapi }) => ({
    async create(ctx) {
        // const response = await super.create(ctx);
        let entry = {};
        try {
            entry = await strapi.entityService.create('api::form.form', ctx.request.body,);
        } catch {
            ctx.response.status = 400;
            ctx.response.message = "Form is in invalid format. Check if id of the event is valid";
            return ctx.response;
        }
        if (entry != null) {
            const event = entry.event;
            console.log(event);
            let date = new Date(event.startDatetime).toLocaleString('en-GB', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'});
            let time = new Date(event.startDatetime).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit'});
            console.log(date, time);
            await strapi.plugins['email'].services.email.send({
                to: entry.email, // Change to your recipient
                from: 'no-reply@soton-dsoc.org', // Change to your verified sender
                subject: event.title + ' confirmation',
                html: 
                `<h3>Hey ${entry.name}!</h3>` +
                `<div>` +
                `<p>Thank you for signing up for <strong>${event.title}</strong>!</p>` +
                `<p>We look forward seeing you in <strong>${event.location}</strong> on <strong>${date}</strong> at <strong>${time}</strong></p>` +
                `<br><br>` +
                `<p>Keep posted for other events on the website https://soton-dsoc.org and social media</p>` +
                `<img src="https://github.com/soton-dsoc/brand-assets/raw/main/logos/PNG/soton-dSoc-full-black.png" width="100">` +
                `</div>`,
            });
            console.log('email sent');
            ctx.response.status = 201;
            ctx.response.message = "Response has been saved, email has been sent.";
            return ctx.response;
        }
        ctx.response.status = 400;
        ctx.response.message = "Form is in invalid format. Check the fields.";
        return ctx.response;
    }
}));
