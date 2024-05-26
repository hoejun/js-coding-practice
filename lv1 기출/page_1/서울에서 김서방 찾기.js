// 반복문이 아니라 indexOf를 생각...
function solution(seoul) {
  let x = 0

  seoul.forEach((i, index) => {
    if (i === 'Kim') return x = index
  })
  const search = `김서방은 ${x}에 있다`

  return search;
}

const seoul = ['Jane', 'Kim']

solution(seoul)