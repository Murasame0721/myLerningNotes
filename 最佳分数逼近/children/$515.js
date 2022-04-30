const fba = require(__dirname+'\\findBestApproximate.js').exports;

process.send(fba.useFinding(Math.log(7), 'ln 7',6));