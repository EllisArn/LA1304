import { startQuiz } from './quiz.js'

export function europeQuiz() {
  fetch('https://p01--la1304-backend--62r8j72d4rks.code.run/europe/')
    .then((response) => response.json())
    .then((data) => {
      startQuiz(data)
    })
    .catch((error) => {
      console.error(error)
    })
}
