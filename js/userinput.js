var readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("what is your name?", function(name){
    console.log("hello" + name);
});