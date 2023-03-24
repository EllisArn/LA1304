import { startQuiz } from './quiz.js'

export function asiaQuiz() {
  fetch('http://localhost:3000/asia/')
    .then((response) => response.json())
    .then((data) => {
      startQuiz(data)
    })
    .catch((error) => {
      console.error(error)
    })
}
