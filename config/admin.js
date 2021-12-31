module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '5802fc9b1b37381b6d374aadfeb616a4'),
  },
});
