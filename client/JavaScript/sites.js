const main = document.querySelector('main')
const quizContainer = document.querySelector('#quizContainer')
const timer = document.querySelector('#timer')

const renderHome = () => {
  sessionStorage.clear()
  timer.innerHTML = ''
  quizContainer.innerHTML = `<p class="userCommand">Wählen Sie ein Gebiet</p>
  <div class="divBtnMain">
      <a class="mainBtn" id="africa">Afrika</a>
      <a class="mainBtn" id="america">Amerika</a>
      <a class="mainBtn" id="asia">Asien</a>
      <a class="mainBtn" id="europe">Europa</a>
      <a class="mainBtn" id="world">Ganze Welt</a>
  </div>`

  document.querySelectorAll('.mainBtn').forEach((button) => {
    button.addEventListener('click', () => {
      import('./renderEasyOrHard.js').then((module) => {
        module.renderEasyOrHard(button.id)
      })
    })
  })
}

const renderAfrica = () => {
  import('./renderEasyOrHard.js').then((module) => {
    module.renderEasyOrHard('africa')
  })
  import('./quiz/africa.js').then((module) => {
    module.africatest()
  })
}

const renderAmerica = () => {
  import('./renderEasyOrHard.js').then((module) => {
    module.renderEasyOrHard('america')
  })
  import('./quiz/america.js').then((module) => {
    module.americatest()
  })
}

const renderAsia = () => {
  import('./renderEasyOrHard.js').then((module) => {
    module.renderEasyOrHard('asia')
  })
  import('./quiz/asia.js').then((module) => {
    module.asiatest()
  })
}

const renderEurope = () => {
  import('./renderEasyOrHard.js').then((module) => {
    module.renderEasyOrHard('europe')
  })
  import('./quiz/europe.js').then((module) => {
    module.europetest()
  })
}

const renderWorld = () => {
  import('./renderEasyOrHard.js').then((module) => {
    module.renderEasyOrHard('world')
  })
  import('./quiz/world.js').then((module) => {
    module.worldtest()
  })
}

const renderNotFound = () => {
  quizContainer.innerHTML =
    '<h1>404 Not Found</h1><a class="mainBtn" href="#home">Zurück zur Startseite</a>'
}
