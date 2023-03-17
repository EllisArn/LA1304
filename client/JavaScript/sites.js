const main = document.querySelector('main')

const renderHome = () => {
  main.innerHTML = `<p class="userCommand">Wählen Sie ein Gebiet</p>
  <div class="divBtnMain">
      <a class="mainBtn" href="#africa">Afrika</a>
      <a class="mainBtn" href="#america">Amerika</a>
      <a class="mainBtn" href="#asia">Asien</a>
      <a class="mainBtn" href="#europe">Europa</a>
      <a class="mainBtn" href="#world">Ganze Welt</a>
  </div>`
}

const renderAfrica = () => {
  import('./quiz/africa.js').then((module) => {
    module.africatest()
  })
}

const renderAmerica = () => {
  import('./quiz/america.js').then((module) => {
    module.americatest()
  })
}

const renderAsia = () => {
  import('./quiz/asia.js').then((module) => {
    module.asiatest()
  })
}

const renderEurope = () => {
  import('./quiz/europe.js').then((module) => {
    module.europetest()
  })
}

const renderWorld = () => {
  import('./quiz/world.js').then((module) => {
    module.worldtest()
  })
}

const renderNotFound = () => {
  main.innerHTML =
    '<h1>404 Not Found</h1><a class="mainBtn" href="#home">Zurück zur Startseite</a>'
}
