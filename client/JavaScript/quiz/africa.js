const main = document.querySelector('main')

export function africatest() {
  fetch('http://localhost:3000/africa/')
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
