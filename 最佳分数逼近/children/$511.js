const fba = require(__dirname+'\\findBestApproximate.js').exports;

process.send(fba.useFinding(Math.sqrt(3), 'sqrt 3', 5));