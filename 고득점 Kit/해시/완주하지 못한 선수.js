function solution(participant, completion) {
  for (let i = 0; i < participant.length; i++) {
    for (let j = 0; j < completion.length; j++) {
      if (participant[i].includes(completion[j])) {
        participant.splice(i, 1)
        completion.splice(j, 1)
        i--
        break
      }
    }
  }
  return participant[0]
}

const participant = ["marina", "josipa", "nikola", "vinko", "filipa"]
const completion = 	["josipa", "filipa", "marina", "nikola"]

solution(participant, completion)