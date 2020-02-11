const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// https://brunch.co.kr/@younggiseo/139
function hanoi(n, from, to, txt) {
    if (n == 0) {
        return;
    }
    hanoi(n-1, from, 6-from-to, txt)
    txt.push(from + " " + to);
    hanoi(n-1, 6-from-to, to, txt);
}

rl.on('line', function (line) { // line 으로 입력값이 들어옴
    // process.stdout.write("띄어쓰지 않고 출력");
    let n = parseInt(line);
    console.log(Math.pow(2,n)-1);
    let test = [];
    hanoi(n, 1, 3, test);
    for (let i = 0; i < test.length; i++) {
        const element = test[i];
        console.log(element);
    }
  })
  .on('close', function () {
    process.exit();
});