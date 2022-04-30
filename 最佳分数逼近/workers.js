const child_process = require('child_process');

console.log('r');

console.log(require(__dirname+'\\children\\findBestApproximate').exports);

try {
    const workers = [
        child_process.fork(__dirname+'/children/$51.js'),
        child_process.fork(__dirname+'/children/$52.js'),
        child_process.fork(__dirname+'/children/$53.js'),
        child_process.fork(__dirname+'/children/$54.js'),
        child_process.fork(__dirname+'/children/$55.js'),
        child_process.fork(__dirname+'/children/$56.js'),
        child_process.fork(__dirname+'/children/$57.js'),
        child_process.fork(__dirname+'/children/$58.js'),
        child_process.fork(__dirname+'/children/$59.js'),
        child_process.fork(__dirname+'/children/$510.js'),
        child_process.fork(__dirname+'/children/$511.js'),
        child_process.fork(__dirname+'/children/$512.js'),
        child_process.fork(__dirname+'/children/$513.js'),
        child_process.fork(__dirname+'/children/$514.js'),
        child_process.fork(__dirname+'/children/$515.js'),
        child_process.fork(__dirname+'/children/$516.js'),
        child_process.fork(__dirname+'/children/$517.js'),
        child_process.fork(__dirname+'/children/$518.js'),
        child_process.fork(__dirname+'/children/$519.js'),
        child_process.fork(__dirname+'/children/$520.js'),
        child_process.fork(__dirname+'/children/$521.js'),
    ];
    
    console.log('workers');
    
    for (let index = 0; index < workers.length; index++) {
        (workers[index]).on('message', function (m) {
            console.log(m);
        })
    } 
} catch (error) {
    console.log(error);
}
