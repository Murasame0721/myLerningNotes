const fba = require(__dirname+'\\findBestApproximate.js').exports;

process.send(fba.useFinding(Math.E, 'e', 5));