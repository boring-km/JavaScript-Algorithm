const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var r = 31;
var M = 1234567891;
var t = 0;
var size = 0;

function nth_31_power(number, times) {
    var temp = 1;
    for(var i = 0; i < times; i++) {
        temp *= 31
    }
    return number * temp;
}

rl.on('line', function (line) { // line 으로 입력값이 들어옴
    t++;
    if (t == 1) {
        size = parseInt(line);
    } else if(t == 2) {
        var data = line.split('');
        var res = 0;
        for(var i = 0; i < size; i++) {
            res += nth_31_power((data[i].charCodeAt(0)-96), i) % M;
        }
        console.log(res % M); // 큰 수 표현 때문인지 50%에서 막힘, 다른 언어에선 100% 통과
    }
  })
  .on('close', function () {
    process.exit();
});