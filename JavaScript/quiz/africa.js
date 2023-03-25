import { startQuiz } from './quiz.js'

export function africaQuiz() {
  fetch('https://p01--la1304-backend--62r8j72d4rks.code.run/africa/')
    .then((response) => response.json())
    .then((data) => {
      startQuiz(data)
    })
    .catch((error) => {
      console.error(error)
    })
}
