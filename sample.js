const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function (line) { // line 으로 입력값이 들어옴
    // process.stdout.write("띄어쓰지 않고 출력");
    

  })
  .on('close', function () {
    process.exit();
});