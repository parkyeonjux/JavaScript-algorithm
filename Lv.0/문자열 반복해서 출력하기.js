const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    const str = input[0];   // 입력받은 문자열
    const n = Number(input[1]);  // 입력받은 정수

    // 문자열 str을 n번 반복한 결과를 생성
    const result = str.repeat(n);
    console.log(result);
});