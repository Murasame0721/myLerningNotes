const fba = require(__dirname+'\\findBestApproximate.js').exports;

process.send(fba.useFinding(Math.LN10, 'ln 10',6));