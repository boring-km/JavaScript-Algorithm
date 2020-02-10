const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let x1, x2, x3, y1, y2, y3;
let resx, resy;
let count = 0;
rl.on('line', function (line) { // line 으로 입력값이 들어옴
    // process.stdout.write("띄어쓰지 않고 출력");
    
    let temp = line.split(" ");
    let t_x = parseInt(temp[0]);
    let t_y = parseInt(temp[1]);
    count++;
    if (count == 1) {
      x1 = t_x;
      y1 = t_y;
    } else if (count == 2) {
      x2 = t_x;
      y2 = t_y;
    } else {
      x3 = t_x;
      y3 = t_y;
      
      if (x1 == x2) {
        resx = x3;
      } else if (x1 == x3) {
        resx = x2;
      } else {
        resx = x1;
      }

      if (y1 == y2) {
        resy = y3;
      } else if (y1 == y3) {
        resy = y2;
      } else {
        resy = y1;
      }
      console.log(resx + " " + resy);
    }


  })
  .on('close', function () {
    process.exit();
});