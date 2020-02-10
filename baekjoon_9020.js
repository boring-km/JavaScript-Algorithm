const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let last = 10001;
var array = new Array(last);
var list = [];
for (let i = 0; i < array.length; i++) {
    array[i] = false;
}

function eratos() {
    array[1] = true;
    for (let i = 2; i < last; i++) {
        if (!array[i]) {
            list.push(i); // 소수를 추가함
            for(let j = i*i; j<=10000; j += i) {
                array[j] = true; // 소수가 아니면 모두 true
            }
        }
        
    }
}

function goldbach(a) { // 입력받은 짝수 : a
    var f, s = 0;
    for (let i = 0; list[i] < a; i++) { // 소수들 : list
        let cur = list[i];
        let another = a - cur; // 짝수에서 소수를 빼도 소수가 나와야함
        let gap = another - cur; // 그 수에서 소수를 또 뺀다? 0이면 간격 최소

        if(gap < 0) {
            break;
        }

        if (!array[another]) { // 뺀 수가 소수이면 기록
            f = cur;
            s = another;
        }
    }
    console.log(f + " " + s);
}
let count = 0;
rl.on('line', function (line) { // line 으로 입력값이 들어옴
    // process.stdout.write("띄어쓰지 않고 출력");
    count++;
    if (count == 1) {
        n = parseInt(line);
        eratos() // 소수 false
    } else {
        goldbach(parseInt(line));
    }

  })
  .on('close', function () {
    process.exit();
});