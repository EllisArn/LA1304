import { startQuiz } from './quiz.js'

export function worldtest() {
  fetch('http://localhost:3000/world/')
    .then((response) => response.json())
    .then((data) => {
      startQuiz(data)
    })
    .catch((error) => {
      console.error(error)
    })
}
