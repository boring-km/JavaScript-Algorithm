const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let count = 0;
let check = "";
let result = 0;
rl.on('line', function (line) { // line 으로 입력값이 들어옴
    // process.stdout.write("띄어쓰지 않고 출력");
    ++count;
    if (count == 1) {
        check = line;
    } else {
        let data = line.split(" ");
        for (let i = 0; i < data.length; i++) {
            const element = data[i];
            if (element == check) {
                result++;
            }
        }
        console.log(result);
    }
  })
  .on('close', function () {
    process.exit();
});