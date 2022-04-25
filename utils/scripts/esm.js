const bundle = require('./bundle');

bundle({
  outdir: 'dist/esm',
  splitting: true,
  format: 'esm',
  target: ['esnext']
}).catch(() => process.exit(1));
