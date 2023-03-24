import { startQuiz } from './quiz.js'

export function africaQuiz() {
  fetch('http://localhost:3000/africa/')
    .then((response) => response.json())
    .then((data) => {
      startQuiz(data)
    })
    .catch((error) => {
      console.error(error)
    })
}
