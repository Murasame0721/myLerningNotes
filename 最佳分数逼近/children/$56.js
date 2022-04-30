const fba = require(__dirname+'\\findBestApproximate.js').exports;

process.send(fba.useFinding(Math.log(5), 'ln 5', 5));