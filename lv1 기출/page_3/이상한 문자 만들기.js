function solution(s) {
  const arr = s.split(' ')
  const newData = []
  for (let index = 0; index < arr.length; index++) {
    let data = ''
    for (let j = 0; j < arr[index].length; j++) {
      if (j % 2 === 0) data = data.concat(arr[index].slice(j, j + 1).toUpperCase())
      if (j % 2 === 1) data = data.concat(arr[index].slice(j, j + 1).toLowerCase())
    }
    newData.push(data)    
  }
  return newData.join(' ');
}

const s = "try hello world"

console.log(solution(s))