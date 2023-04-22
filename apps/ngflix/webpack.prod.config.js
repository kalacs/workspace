const { withModuleFederation } = require('@nrwl/angular/module-federation');
const config = require('./module-federation.config');
module.exports = withModuleFederation({
  ...config,
  /*
   * Remote overrides for production.
   * Each entry is a pair of a unique name and the URL where it is deployed.
   *
   * e.g.
   * remotes: [
   *   ['details', 'https://workspace-ten-sage.vercel.app/'],
   *   ['account', 'https://ngflix-account.vercel.app/'],
   * ]
   */
});
