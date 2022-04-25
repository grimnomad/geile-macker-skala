const bundle = require('./bundle');

bundle({ watch: {
  onRebuild(error) {
    if (error) {
      console.error(error);
    } else {
      console.log('Bundle created.');
    }
  }
}}).catch(() => process.exit(1));
