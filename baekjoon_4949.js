const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function (line) { // line 으로 입력값이 들어옴
    // process.stdout.write("띄어쓰지 않고 출력");
    let c1 = 0, c2 = 0;
    let array = line.split("");
    let datas = [];
    if (array[0] == '.') {
        process.exit();
    } else {
        let last = -1;
        for (let i = 0; i < array.length; i++) {
            if (array[i] == '(') {
                datas.push(1);
                c1++;
            } else if (array[i] == '[') {
                datas.push(0);
                c2++;
            } else if (array[i] == ')') {
                last = datas.pop();
                if (last != 1) {
                    console.log("no");
                    break;
                }

                c1--;
            } else if (array[i] == ']') {
                last = datas.pop();
                if (last != 0) {
                    console.log("no");
                    break;
                }
                c2--;
            }
            if (i == array.length-1) {
                if (c1 == 0 && c2 == 0) {
                    console.log("yes");
                } else {
                    console.log("no");
                }
            }
        }
    }
  })
  .on('close', function () {
    process.exit();
});