const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function Sosu(start, end) {
    // start 부터 end 까지 소수 구하기
    let arr = new Array(end+1);
    for (let i = 0; i < end+1; i++) {
      arr[i] = 0;
    }
    let result = 0;
    for (let i = 2; i <= start; i++) {
      for (let j = i; j <= end; j += i) {
        arr[j] += 1;
      }
    }
    //console.log(arr);
    for (let i = start; i < arr.length; i++) {
      const val = arr[i];
      if (val == 0) {
        result += 1;
        //process.stdout.write(i.toString() + " "); // 소수 모임
        
        //console.log(i); 
      }
    }
    console.log(result);
}

rl.on('line', function (line) { // line 으로 입력값이 들어옴
    // process.stdout.write("띄어쓰지 않고 출력");
    let n = parseInt(line);
    if (n == 0) {
      process.exit();
    } else if(n == 1) {
      console.log(1);
    } else {
      Sosu(n, n*2);
    }
    
  })
  .on('close', function () {
    process.exit();
});