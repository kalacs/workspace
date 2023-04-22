const { withModuleFederation } = require('@nrwl/angular/module-federation');
const config = require('./module-federation.config');
module.exports = withModuleFederation({
  ...config,
  remotes: [
    ['details', 'https://workspace-ten-sage.vercel.app/'],
    ['account', 'https://ngflix-account.vercel.app/'],
  ],
});
