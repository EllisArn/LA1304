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
  import('./easyOrHard.js').then((module) => {
    module.renderEasyOrHard()
  })
}

const renderAmerica = () => {}

const renderAsia = () => {}

const renderEurope = () => {}

const renderWorld = () => {}
