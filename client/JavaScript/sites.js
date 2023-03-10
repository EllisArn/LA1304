const main = document.querySelector('main')
const head = document.querySelector('head')

const renderHome = () => {
  head.innerHTML = `<meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="keywords" content="Country quiz" />
  <link rel="stylesheet" href="CSS/style.css" />

  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap" rel="stylesheet" />
  <title>EJ Quiz</title>`

  main.innerHTML = `<p class="userCommand">Wählen Sie ein Gebiet</p>
    <div class="divBtnMain">
        <a class="mainBtn" href="#">
            <p>Afrika</p>
        </a>
        <a class="mainBtn" href="#">Amerika</a>
        <a class="mainBtn" href="#">Asien</a>
        <a class="mainBtn" href="#">Europa</a>
        <a class="mainBtn" href="#">Ganze Welt</a>
    </div>`
}
