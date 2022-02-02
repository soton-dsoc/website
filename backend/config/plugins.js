module.exports = ({ env }) => ({
    // ...
    email: {
        config: {
            provider: 'sendgrid',
            providerOptions: {
                apiKey: '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',
            },
            settings: {
                defaultFrom: 'no-reply@soton-dsoc.org',
                defaultReplyTo: 'no-reply@soton-dsoc.org',
                testAddress: 'no-reply@soton-dsoc.org',
            },
        },
    },
    // ...
});