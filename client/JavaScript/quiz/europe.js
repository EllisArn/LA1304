export function europetest() {
  fetch('http://localhost:3000/europe/')
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      data.forEach((element) => {
        console.log(element)
      })
    })
    .catch((error) => {
      console.error(error)
    })
  console.log('Hello World')
}
