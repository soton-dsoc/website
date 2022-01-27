module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '76f9295b8bc999ef23d05c59845e4b69'),
  },
});
