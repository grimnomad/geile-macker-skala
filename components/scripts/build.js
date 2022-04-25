const bundle = require('./bundle');

bundle({ minify: true }).catch(() => process.exit(1));
