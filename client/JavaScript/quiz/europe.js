export function europetest() {
  fetch('http://localhost:3000/europe/1')
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
    })
    .catch((error) => {
      console.error(error)
    })

  console.log('Hello World')
}
