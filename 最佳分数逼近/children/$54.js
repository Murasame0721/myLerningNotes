const fba = require(__dirname+'\\findBestApproximate.js').exports;

process.send(fba.useFinding(Math.LN2, 'ln 2', 5));