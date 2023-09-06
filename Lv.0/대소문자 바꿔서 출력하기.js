const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close', function () {
    const str = input[0];  // 입력받은 문자열

    // 대문자와 소문자를 서로 바꾸고 출력합니다.
    const result = str
        .split('')
        .map(char => {
            if (char >= 'A' && char <= 'Z') {
                return char.toLowerCase();
            } else if (char >= 'a' && char <='z') {
                return char.toUpperCase();
            } else {
                return char;
            }
        })
        .join('');
     
     console.log(result);
    });   