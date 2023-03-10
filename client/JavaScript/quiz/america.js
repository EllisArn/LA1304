export function americatest() {
  fetch('http://localhost:3000/america/')
    .then((response) => response.json())
    .then((data) => {
      data.sort(randomise)
      data.forEach((element) => {
        console.log(element)
      })
    })
    .catch((error) => {
      console.error(error)
    })
}

function randomise() {
  return 0.5 - Math.random()
}
