// reduce와 문자열 치환
function solution(n){
    const arr = String(n).split('')
    const sum = arr.reduce((acc, cur) => Number(acc) + Number(cur), 0)

    return sum;
}

const n = 987

solution(n)