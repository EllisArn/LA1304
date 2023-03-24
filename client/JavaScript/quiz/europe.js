import { startQuiz } from './quiz.js'

export function europeQuiz() {
  fetch('http://localhost:3000/europe/')
    .then((response) => response.json())
    .then((data) => {
      startQuiz(data)
    })
    .catch((error) => {
      console.error(error)
    })
}
