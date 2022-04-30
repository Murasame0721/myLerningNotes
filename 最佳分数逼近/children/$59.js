const fba = require(__dirname+'\\findBestApproximate.js').exports;

process.send(fba.useFinding(Math.log(11), 'ln 11', 5));