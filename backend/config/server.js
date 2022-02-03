module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('URL', "https://backdoor.soton-dsoc.org"),
  admin: {
    url: env('URL', "https://backdoor.soton-dsoc.org") + "/admin",
  }
});
