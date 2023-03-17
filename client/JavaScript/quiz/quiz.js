const main = document.querySelector('main')
const timer = document.querySelector('#timer')
const quizContainer = document.querySelector('#quizContainer')

let i = 0
let dataArr = []
load()

export function startQuiz(data) {
  data.sort(randomise)
  data.forEach((element) => {
    dataArr.push(element)
  })
  quiz()
}

export function quiz() {
  quizContainer.innerHTML = `<div class="userCommand">Was ist die Hauptstadt von ${dataArr[i].Land}?</div>
  <input id="input" type="text" placeholder="Stadt" />
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
    quizContainer.innerHTML = `<div class="userCommand">Richtig</div><a class="mainBtnQuiz">Weiter</a>`
    document.querySelector('.mainBtnQuiz').addEventListener('click', () => {
      if (i < dataArr.length - 1) {
        i++
        quiz(dataArr[i].Land, dataArr[i].Hauptstadt)
      }
    })
  } else {
    quizContainer.innerHTML = `<div class="userCommand">Falsch. Die Hauptstadt von ${dataArr[i].Land} ist ${dataArr[i].Hauptstadt}<br>Deine Eingabe war: "${userInput}"</div><a class="mainBtnQuiz">Weiter</a>`
    document.querySelector('.mainBtnQuiz').addEventListener('click', () => {
      if (i < dataArr.length - 1) {
        i++
        quiz(dataArr[i].Land, dataArr[i].Hauptstadt)
      } else {
        quizContainer.innerHTML = `<div class="userCommand">Quiz beendet</div><a class="mainBtn" id="restart">Neustart</a><a class="mainBtn" href="#">Zurück zur Startseite</a>`
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

function formatTime(time) {
  const minutes = Math.floor(time / 60)
  const seconds = time % 60
  return `Zeit: ${minutes}:${seconds < 10 ? '0' + seconds : seconds}`
}

function startTimer(duration, display) {
  let time = duration
  display.textContent = formatTime(time)
  const intervalId = setInterval(() => {
    time--
    if (time < 0) {
      clearInterval(intervalId)
      display.textContent = 'Zeit abgelaufen!'
    } else {
      display.textContent = formatTime(time)
    }
  }, 1000)
}

function load() {
  console.log('hello world')
  const durationInSeconds = 5 * 60
  timer.innerHTML = `<div id="timer">Zeit: </div>`
  const display = document.getElementById('timer')
  startTimer(durationInSeconds, display)
}
