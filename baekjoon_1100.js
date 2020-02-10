const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let count = -1;
let result = 0;
rl.on('line', function (line) { // line 으로 입력값이 들어옴
    // process.stdout.write("띄어쓰지 않고 출력");
    let arr = line.split("");
    count++;
    for(let j = 0; j < 8; j++) {
        if (count % 2 == 0) {

            if (j % 2 == 0) {
                if(arr[j] == 'F'){
                    result += 1;
                }
            }
            
        } else {

            if (j % 2 == 1) {
                if (arr[j] == 'F') {
                    result += 1;
                }
            }
        }
    }
    if (count == 7) {
        console.log(result);
    }
  })
  .on('close', function () {
    process.exit();
});