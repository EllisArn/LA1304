const main = document.querySelector('main')
const customCSS = document.getElementById('customCSS')

const renderHome = () => {
  customCSS.href = './CSS/home1.css'

  main.innerHTML = `<p class="userCommand">Wählen Sie ein Gebiet</p>
  <div class="divBtnMain">
      <a class="mainBtn" href="#">Afrika</a>
      <a class="mainBtn" href="#">Amerika</a>
      <a class="mainBtn" href="#">Asien</a>
      <a class="mainBtn" href="#">Europa</a>
      <a class="mainBtn" href="#">Ganze Welt</a>
  </div>`
}
