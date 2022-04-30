const fba = require(__dirname+'\\findBestApproximate.js').exports;

process.send(fba.useFinding(Math.log(3), 'ln 3', 5));