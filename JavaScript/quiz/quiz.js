const main = document.querySelector('main')
const timer = document.querySelector('#timer')
const quizContainer = document.querySelector('#quizContainer')

let durationInSeconds

let i = 0
let dataArr = []

export function startQuiz(data) {
  if (!sessionStorage.getItem('quizData')) {
    dataArr = []
    data.sort(randomise)
    data.forEach((element) => {
      dataArr.push(element)
    })
    sessionStorage.setItem('quizData', JSON.stringify(dataArr))
    sessionStorage.setItem('i', i)
    sessionStorage.setItem('maxPoints', dataArr.length)
    sessionStorage.setItem('userPoints', 0)
  } else {
    dataArr = JSON.parse(sessionStorage.getItem('quizData'))
    i = parseInt(sessionStorage.getItem('i'))
  }
  quiz()
}

export function quiz() {
  if (sessionStorage.getItem('difficulty') === 'hard') {
    loadTimer()
  }
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
  let userInput = input.value.toLowerCase()
  if (userInput === dataArr[i].Hauptstadt.toLowerCase()) {
    quizContainer.innerHTML = `<div class="userCommand">Richtig, +1 Punkt</div><a class="mainBtnQuiz">Weiter</a>`
    var cachePoints = sessionStorage.getItem('userPoints')
    cachePoints++
    sessionStorage.setItem('userPoints', cachePoints)

    document.querySelector('.mainBtnQuiz').addEventListener('click', () => {
      if (i < dataArr.length - 1) {
        i++
        sessionStorage.setItem('i', i)
        quiz()
      } else {
        endGame()
      }
    })
  } else {
    quizContainer.innerHTML = `<div class="userCommand">Falsch. Die Hauptstadt von ${dataArr[i].Land} ist ${dataArr[i].Hauptstadt}<br>Deine Eingabe war: "${userInput}"</div><a class="mainBtnQuiz">Weiter</a>`
    document.querySelector('.mainBtnQuiz').addEventListener('click', () => {
      if (i < dataArr.length - 1) {
        i++
        sessionStorage.setItem('i', i)
        quiz()
      } else {
        endGame()
      }
    })
  }
}

function randomise() {
  return 0.5 - Math.random()
}

function endGame() {
  quizContainer.innerHTML = `<div class="userCommand">Quiz beendet, erreichte Punktzahl: ${sessionStorage.getItem(
    'userPoints'
  )} von ${sessionStorage.getItem(
    'maxPoints'
  )}</div><a class="mainBtn" id="restart">Neustart</a><a class="mainBtn" href="#">Zurück zur Startseite</a>`
  document.querySelector('#restart').addEventListener('click', () => {
    sessionStorage.removeItem('quizData')
    sessionStorage.removeItem('i')
    sessionStorage.removeItem('maxPoints')
    sessionStorage.removeItem('userPoints')
    window.location.reload()
  })
}

// Von hier an nach unten ist der Code von ChatGPT, jedoch haben wir ihn etwas angepasst

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
    sessionStorage.setItem('time', time)
    if (time < 0) {
      clearInterval(intervalId)
      display.textContent = 'Zeit abgelaufen!'
      endGame()
    } else {
      display.textContent = formatTime(time)
    }
    if (window.location.hash !== `#${sessionStorage.getItem('mode')}`) {
      clearInterval(intervalId)
      sessionStorage.clear()
      timer.innerHTML = ''
    }
  }, 1000)
}

function loadTimer() {
  if (sessionStorage.getItem('time')) {
    durationInSeconds = sessionStorage.getItem('time')
  } else {
    if (sessionStorage.getItem('mode') === 'world') {
      durationInSeconds = 900
    } else {
      durationInSeconds = 300
    }
  }
  timer.textContent = `Zeit: `
  startTimer(durationInSeconds, timer)
}
