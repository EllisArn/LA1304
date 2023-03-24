import { startQuiz } from './quiz.js'

export function americaQuiz() {
  fetch('http://localhost:3000/america/')
    .then((response) => response.json())
    .then((data) => {
      startQuiz(data)
    })
    .catch((error) => {
      console.error(error)
    })
}
