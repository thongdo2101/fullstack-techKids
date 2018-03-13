const fs = require('fs');

//fs.readFile

let dataFromFile = fs.readFileSync('./note.txt', {
    encoding: 'utf-8'
});
console.log(dataFromFile);
let dataObjectFile = {
    a: 5,
    b: 6
};
fs.writeFile('./note.txt', JSON.stringify(dataObjectFile), 'utf-8',(err) => {
    if (err) {
        console.log(err);
    }
    console.log("success");
});
let dataFromFileAsync = fs.readFile('./note.txt', 'utf-8', function (err, data) {
    if (err) {
        console.log(err);
    }
    var obj = JSON.parse(data);
    var keys = Object.keys(obj);
    console.log("key: " + keys[0]);
    console.log("value: " + obj[keys[0]]);
});