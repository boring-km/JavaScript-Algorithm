const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let count = 0, n = 0;
let sx = 0, sy = 0, ex = 0, ey = 0;
let ax = [], ay = [], ar = [];
let test_case = 0;
let result = 0;
rl.on('line', function (line) { // line 으로 입력값이 들어옴
    // process.stdout.write("띄어쓰지 않고 출력");
    ++count;
    if (count == 1) {
        test_case = parseInt(line);
    } else if (count == 2) {
        // 출발점, 도착점
        let ss = line.split(" ");
        sx = parseInt(ss[0]);
        sy = parseInt(ss[1]);
        ex = parseInt(ss[2]);
        ey = parseInt(ss[3]);
    } else if (count == 3) {
        // 행성계의 개수 n
        n = parseInt(line);
    } else if (count > 3) {
        // 행성계의 중점과 반지름
        let mr = line.split(" ");
        ax.push(parseInt(mr[0]));
        ay.push(parseInt(mr[1]));
        ar.push(parseInt(mr[2]));
        
        if (count == n + 3) { // 진입/이탈 횟수 출력

            for (let i = 0; i < n; i++) {
                let temp = Math.pow((ax[i]-sx),2) + Math.pow((ay[i]-sy), 2);
                let temp2 = Math.pow((ax[i]-ex),2) + Math.pow((ay[i]-ey), 2);
                let rr = ar[i]*ar[i];
                if (temp < rr && temp2 > rr) {
                    result++;
                } else if (temp > rr && temp2 < rr) {
                    result++;
                }
            }
            console.log(result);
            result = 0;
            ax = [], ay = [], ar = [];
            count = 1; // 입력 초기화
        }
    }

  })
  .on('close', function () {
    process.exit();
});