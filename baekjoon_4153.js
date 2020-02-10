const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function (line) { // line 으로 입력값이 들어옴
    // process.stdout.write("띄어쓰지 않고 출력");
    let temp = line.split(" ");
    let a = parseInt(temp[0]);
    let b = parseInt(temp[1]);
    let c = parseInt(temp[2]);
    if (a == 0) {
        process.exit();
    } else {
        if (a*a + b*b == c*c) {
            console.log("right");
        } else if(a*a == b*b + c*c){
            console.log("right");
        } else if (b*b == a*a + c*c) {
            console.log("right");
        } else {

            console.log("wrong");
        }
    }

  })
  .on('close', function () {
    process.exit();
});