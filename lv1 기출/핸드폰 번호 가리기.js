function solution(phone_number) {
  const endNum = phone_number.slice(-4)
  // slice는 끝에서 시작하여 처음으로 끝내는 것을 지원하지 않음
  // join ''로 인자값을 넣지 않으면 ,로 출력
  const startNum = phone_number.slice(0, phone_number.length - 4).split('').map(i => i = '*').join('')
  const sumStr = startNum.concat(endNum)

  return sumStr
}

const phone_number = "027778888"

solution(phone_number)