// 문자열 반박 함수 생각해볼것...
function solution(n) {
  const s1 = '수'
  const s2 = '박'
  const answer = []

  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) answer.push(s1)
    if (i % 2 === 1) answer.push(s2)
  }

  return answer.join('');
}

const n = 4

solution(n)