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
  if (sessionStorage.getItem('mode') !== 'africa') {
    import('./renderEasyOrHard.js').then((module) => {
      module.renderEasyOrHard('africa')
    })
  } else {
    import('./quiz/africa.js').then((module) => {
      module.africaQuiz()
    })
  }
}

const renderAmerica = () => {
  if (sessionStorage.getItem('mode') !== 'america') {
    import('./renderEasyOrHard.js').then((module) => {
      module.renderEasyOrHard('america')
    })
  } else {
    import('./quiz/america.js').then((module) => {
      module.americaQuiz()
    })
  }
}

const renderAsia = () => {
  if (sessionStorage.getItem('mode') !== 'asia') {
    import('./renderEasyOrHard.js').then((module) => {
      module.renderEasyOrHard('asia')
    })
  } else {
    import('./quiz/asia.js').then((module) => {
      module.asiaQuiz()
    })
  }
}

const renderEurope = () => {
  if (sessionStorage.getItem('mode') !== 'europe') {
    import('./renderEasyOrHard.js').then((module) => {
      module.renderEasyOrHard('europe')
    })
  } else {
    import('./quiz/europe.js').then((module) => {
      module.europeQuiz()
    })
  }
}

const renderWorld = () => {
  if (sessionStorage.getItem('mode') !== 'world') {
    import('./renderEasyOrHard.js').then((module) => {
      module.renderEasyOrHard('world')
    })
  } else {
    import('./quiz/world.js').then((module) => {
      module.worldQuiz()
    })
  }
}

const renderNotFound = () => {
  quizContainer.innerHTML =
    '<h1>404 Not Found</h1><a class="mainBtn" href="#home">Zurück zur Startseite</a>'
}
