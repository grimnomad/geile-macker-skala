const esbuild = require('esbuild');
const { resolve } = require('path');

/**
 * @param {esbuild.BuildOptions} config
 */
function bundle(config = {}) {
  return esbuild.build({
    entryPoints: [resolve('src/index.ts')],
    outdir: resolve('dist'),
    bundle: true,
    sourcemap: true,
    splitting: true,
    format: 'esm',
    target: ['esnext'],
    inject: [resolve('scripts/react-shim.js')],
    external: ['react', 'react-dom', 'react-is', 'styled-components', '@gms/utils'],
    ...config
  });
}

module.exports = bundle;
