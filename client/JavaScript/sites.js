const main = document.querySelector('main')
const customCSS = document.getElementById('customCSS')

const renderHome = () => {
  customCSS.href = './CSS/home.css'
  main.innerHTML = `<p class="userCommand">Wählen Sie ein Gebiet</p>
  <div class="divBtnMain">
      <a class="mainBtn" href="#africa">Afrika</a>
      <a class="mainBtn" href="#america">Amerika</a>
      <a class="mainBtn" href="#asia">Asien</a>
      <a class="mainBtn" href="#europe">Europa</a>
      <a class="mainBtn" href="#world">Ganze Welt</a>
  </div>`
}

const renderAfrica = () => {}

const renderAmerica = () => {}

const renderAsia = () => {}

const renderEurope = () => {}

const renderWorld = () => {}
