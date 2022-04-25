const esbuild = require('esbuild');
const { resolve } = require('path');

/**
 * @param {esbuild.BuildOptions} config
 */
function bundle(config = {}) {
  return esbuild.build({
    entryPoints: [resolve('src/index.ts')],
    bundle: true,
    sourcemap: true,
    ...config
  });
}

module.exports = bundle;
