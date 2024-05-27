function solution(price, money, count) {
  const sum = Array(count).fill(price).map((x, y) => x * (y + 1)).reduce((acc, cur) => acc + cur, 0)
  let answer = 0

  if (sum > money) answer = sum - money
  else answer = 0

  return answer;
}

const price = 3 // 이용료
const money = 20 // 첫 금액
const count = 4 // 이용 횟수

solution(price, money, count)