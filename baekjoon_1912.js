const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var count = 0;
var data = [];
var d = new Array();
var n = 0;
rl.on('line', function (line) { // line 으로 입력값이 들어옴
    
    count++;
    if (count == 1) {
        n = parseInt(line);
    } else if(count == 2) {
        data = line.split(' ');
        for (let i = 0; i < n; i++) {
            data[i] = parseInt(data[i]);
            d.push(0);
        }
        solution(n, data);
    }
  })
  .on('close', function () {
    process.exit();
});
var maxi = -1000;
function max(a, b) {
    if (a < b) {
        return b;
    } else {
        return a;
    }
}
function solution(n, data) {
    d[0] = data[0];
    for (let i = 1; i < n; i++) {
        
        d[i] = max(d[i-1] + data[i], data[i]);
        maxi = max(maxi, d[i]);
        
    }
    maxi = Math.max(maxi, d[0]);
    console.log(maxi);
    /*
    80% 대에서 실패 뜸
    for(var i=1; i < n; i++) {
        if (parseInt(data[i-1]) > 0 && parseInt(data[i]) + parseInt(data[i-1]) > 0) {
            data[i] = parseInt(data[i]) + parseInt(data[i-1])
        }
        if(maxi < parseInt(data[i])) {
            maxi = parseInt(data[i]);
        }
    } */

    /* 처음 시도... 시간초과
    for(var i = 1; i <= size; i++) { // for n
        // (i)개씩 묶어서
        var cal = size - i + 1;
        for(var j = 0; j < cal; j++) { // for n-m
            var cur = 0;
            for(var k = 0; k < i; k++) { // for m
                cur += parseInt(data[j+k]);
            }
            if(maxi < cur) {
                maxi = cur;
            }
        }
    }*/
    
    // 아래 주소를 참고해서 효율을 높여보자
    // https://mygumi.tistory.com/97
    // https://debuglog.tistory.com/79
    // 현재 코드로는 시간초과 발생 -> 해결
}