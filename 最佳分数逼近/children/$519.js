const fba = require(__dirname+'\\findBestApproximate.js').exports;

process.send(fba.useFinding(Math.sqrt(5), 'sqrt 5',6));
