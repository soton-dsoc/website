`use strict`

module.exports = {
    async sendEmail(ctx) {
        console.log("start sending email")
        await strapi.plugins['email'].services.email.send({
            to: 'german.nikolishin@icloud.com', // Change to your recipient
            from: 'no-reply@soton-dsoc.org', // Change to your verified sender
            subject: 'Sending with SendGrid is Fun',
            text: 'and easy to do anywhere, even with Node.js',
            html: '<strong>and easy to do anywhere, even with Node.js</strong>',
        });
        return ctx.body = 'ok';
    }
};