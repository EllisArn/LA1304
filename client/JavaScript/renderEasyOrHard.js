const main = document.querySelector('main')
const quizContainer = document.querySelector('#quizContainer')

export function renderEasyOrHard(mode) {
  quizContainer.innerHTML = `<p class="userCommand">Wählen Sie ein Schwierigkeitsgrad</p>
  <div class="divBtnMain">
      <a id="easyBtn" class="mainBtn">Easy (ohne Timer)</a>
      <a id="hardBtn" class="mainBtn">Hard (mit Timer)</a>
  </div>`
  sessionStorage.setItem('mode', mode)
  console.log(sessionStorage.getItem('mode'))
  document.getElementById('easyBtn').addEventListener('click', easyBtnClicked)
  document.getElementById('hardBtn').addEventListener('click', hardBtnClicked)
}

function easyBtnClicked() {
  sessionStorage.setItem('difficulty', 'easy')
  const mode = sessionStorage.getItem('mode')
  location.href = `#${mode}`
}

function hardBtnClicked() {
  sessionStorage.setItem('difficulty', 'hard')
  const mode = sessionStorage.getItem('mode')
  location.href = `#${mode}`
}
