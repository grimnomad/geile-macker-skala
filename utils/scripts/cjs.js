const bundle = require('./bundle');

bundle({
  outdir: 'dist/cjs',
  format: 'cjs',
  target: ['esnext']
}).catch(() => process.exit(1));
