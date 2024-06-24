function solution(array, commands) {
  const answer = [];
  for (let index = 0; index < commands.length; index++) {
    const commandData = commands[index]
    const sli = array.slice(commandData[0] - 1, commandData[1]).sort((a, b) => a - b)[commandData[2] - 1]
    answer.push(sli)
  }
  return answer;
}

const array = [1, 5, 2, 6, 3, 7, 4]
const commands = [[2, 5, 3], [4, 4, 1], [1, 7, 3]]

solution(array, commands)