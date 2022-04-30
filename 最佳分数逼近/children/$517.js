const fba = require(__dirname+'\\findBestApproximate.js').exports;

process.send(fba.useFinding(Math.SQRT2, 'sqrt 2',6));
