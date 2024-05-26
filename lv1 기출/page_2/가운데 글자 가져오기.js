function solution(s) {
  let answer = '';
  const startStr = s.length / 2
  const str = s.split('')

  if (s.length % 2 === 0) {
    answer = str[startStr - 1].concat(str[startStr])

  } else {
    answer = str[startStr - 0.5]
  }
  return answer;
}

//2
//4
const s = 'abcdeacde'

solution(s)