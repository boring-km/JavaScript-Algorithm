const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let array = [0,1,2,3,4,5,6,7,8];
let visit = [0,0,0,0,0,0,0,0,0];
let N, M = 0;
let V = [];

function dfs(n, r) {
  consoleout(r);

  for (let i = n; i < N; i++) {
    if (visit[i]) {
      continue;
    }
    visit[i] = true;
    V.push(i+1);
    dfs(i, n+1);
    V.pop();
    visit[i] = false;
  }
}

function consoleout(r) {
  if(r == M) {
    for (let i = 0; i < visit.length; i++) {
      process.stdout.write(V[i] + " ");
    }
    console.log("");
  }
}

rl.on('line', function (line) { // line 으로 입력값이 들어옴
    // process.stdout.write("띄어쓰지 않고 출력");
    let temp = line.split(" ");
    N = parseInt(temp[0]);
    M = parseInt(temp[1]);

    dfs(0, 0);
    
  })
  .on('close', function () {
    process.exit();
});