const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function (line) { // line 으로 입력값이 들어옴
    // process.stdout.write("띄어쓰지 않고 출력");
    let count = 0;
    let temp = line.split(" ");
    for (let i = 0; i < temp.length; i++) {
        count += parseInt(temp[i])
    }
    if (count == 0) {
        console.log("D");
    } else if (count == 1) {
        console.log("C");
    } else if (count == 2) {
        console.log("B");
    } else if (count == 3) {
        console.log("A");
    } else if (count == 4) {
        console.log("E");
    }
  })
  .on('close', function () {
    process.exit();
});