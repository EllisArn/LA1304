import { startQuiz } from './quiz.js'

export function asiaQuiz() {
  fetch('https://p01--la1304-backend--62r8j72d4rks.code.run/asia/')
    .then((response) => response.json())
    .then((data) => {
      startQuiz(data)
    })
    .catch((error) => {
      console.error(error)
    })
}
