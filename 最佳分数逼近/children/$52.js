const fba = require(__dirname+'\\findBestApproximate.js').exports;

process.send(fba.useFinding(Math.LN2, 'ln 2', 2));
process.send(fba.useFinding(Math.log(3), 'ln 3', 2));
process.send(fba.useFinding(Math.log(5), 'ln 5', 2));
process.send(fba.useFinding(Math.log(7), 'ln 7', 2));
process.send(fba.useFinding(Math.LN10, 'ln 10', 2));
process.send(fba.useFinding(Math.log(11), 'ln 11', 2));
process.send(fba.useFinding(Math.SQRT2, 'sqrt 2', 2));
process.send(fba.useFinding(Math.sqrt(3), 'sqrt 3', 2));
process.send(fba.useFinding(Math.sqrt(5), 'sqrt 5', 2));
process.send(fba.useFinding(Math.E, 'e', 2));
process.send(fba.useFinding(Math.PI, 'pi', 2));

process.send(fba.useFinding(Math.log(3), 'ln 3',6));