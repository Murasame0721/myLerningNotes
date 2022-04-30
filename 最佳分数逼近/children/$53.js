const fba = require(__dirname+'\\findBestApproximate.js').exports;

process.send(fba.useFinding(Math.LN2, 'ln 2', 4));
process.send(fba.useFinding(Math.log(3), 'ln 3', 4));
process.send(fba.useFinding(Math.log(5), 'ln 5', 4));
process.send(fba.useFinding(Math.log(7), 'ln 7', 4));
process.send(fba.useFinding(Math.LN10, 'ln 10', 4));
process.send(fba.useFinding(Math.log(11), 'ln 11', 4));
process.send(fba.useFinding(Math.SQRT2, 'sqrt 2', 4));
process.send(fba.useFinding(Math.sqrt(3), 'sqrt 3', 4));
process.send(fba.useFinding(Math.sqrt(5), 'sqrt 5', 4));
process.send(fba.useFinding(Math.E, 'e', 4));
process.send(fba.useFinding(Math.PI, 'pi', 4));

process.send(fba.useFinding(Math.log(5), 'ln 5',6));