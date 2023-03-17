const main = document.querySelector('main')
let i = 0
let dataArr = []

export function startQuiz(data) {
  data.sort(randomise)
  data.forEach((element) => {
    dataArr.push(element)
  })
  quiz()
}

export function quiz() {
  main.innerHTML = `<div>Was ist die Hauptstadt von ${dataArr[i].Land}?</div>
  <input id="input" type="text" />
  <a class="mainBtnQuiz">Bestätigen</a>`
  const input = document.querySelector('#input')
  input.focus()
  input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      checkInput()
    }
  })
  document.querySelector('.mainBtnQuiz').addEventListener('click', () => {
    checkInput()
  })
}

function checkInput() {
  const input = document.querySelector('#input')
  let userInput = input.value
  if (userInput === dataArr[i].Hauptstadt) {
    main.innerHTML = `<div id="output">Richtig</div><button id="next">Weiter</button>`
    document.querySelector('#next').addEventListener('click', () => {
      if (i < dataArr.length - 1) {
        i++
        quiz(dataArr[i].Land, dataArr[i].Hauptstadt)
      }
    })
  } else {
    main.innerHTML = `<div id="output">Falsch. Die Hauptstadt von ${dataArr[i].Land} ist ${dataArr[i].Hauptstadt}<br>Deine Eingabe war: "${userInput}"</div><button id="next">Weiter</button>`
    document.querySelector('#next').addEventListener('click', () => {
      if (i < dataArr.length - 1) {
        i++
        quiz(dataArr[i].Land, dataArr[i].Hauptstadt)
      } else {
        main.innerHTML = `<div>Quiz beendet</div><a class="mainBtn" id="restart">Neustart</a><a class="mainBtn">Zurück zur Startseite</a>`
        document.querySelector('#restart').addEventListener('click', () => {
          window.location.reload()
        })
      }
    })
  }
}

function randomise() {
  return 0.5 - Math.random()
}
