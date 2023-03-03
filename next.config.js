const withPlugins = require("next-compose-plugins");

module.exports = withPlugins([], {
  images: {
    domains: ["localhost", "csi-backend.herokuapp.com"],
  },
});
