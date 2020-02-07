const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let data;
function combination(arr, index, n, r, tar) {
  if (r == 0) {
    let test = [0,0,0,0,0,0];
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      test[i] = data[arr[i]];
    }
    for (let i = 0; i < test.length; i++) {
      const element = test[i];
      process.stdout.write(element.toString() + " ");
    }
    console.log("");
  } else if (tar == n) {
    return;
  } else {
    arr[index] = tar;
    combination(arr, index + 1, n, r - 1, tar + 1);
    combination(arr, index, n, r, tar + 1);
  }
}
rl.on('line', function (line) { // line 으로 입력값이 들어옴
  if (line == "0") {
    process.exit();
  } else {
    data = line.split(" ");
    let size = parseInt(data[0]);
    // 정수로 저장
    for (let i = 1; i <= size; i++) {
      data[i-1] = parseInt(data[i]);
    }
    data.pop();
    let sample = [0,0,0,0,0,0];
    combination(sample, 0, size, 6, 0);
    console.log("");
  }
}).on('close', function () {
    process.exit();
  });