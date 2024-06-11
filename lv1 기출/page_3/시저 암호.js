function solution(s, n) {
  let charS = s.split('')

  const newChar = charS.map(i => {
    if (i !== ' ') {
      let aci = i.codePointAt() // 아스키 코드 값 얻기
      aci+=n
      // 대문자, 소문자 분기 처리해야함 분기처리 없이 계산을 하게 되면 Z에서 소문자로 게산이 됨
      if (i === i.toUpperCase()) {
        if (aci > 90) aci = aci-26 // Z 이상일떄
      }
      if (i === i.toLowerCase()) {
        if (aci > 122) aci = aci-26 // z 이상일때
      }
      return i = String.fromCharCode(aci)
    } else {
      return ' '
    }
  })
  return newChar.join('')
}

const s = 'z'
const n = 25

solution(s, n)