function solution(s) {
  const min = Math.min(...(s.split(' ').map(Number)))
  const max = Math.max(...(s.split(' ').map(Number)))
  const answer = [min, max].join(' ')

  return answer;
}

const s = '-1 -2 -3 -4'

solution(s)