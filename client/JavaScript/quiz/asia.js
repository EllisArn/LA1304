export function asiatest() {
  fetch('http://localhost:3000/asia/')
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
