process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    let str = ''
    for (let index = 0; index < b; index++) {
        for (let index = 0; index < a; index++) {
            str+='*'
        }
        str+='\n'
    }
    console.log(str)
});