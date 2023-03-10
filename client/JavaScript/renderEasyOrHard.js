const main = document.querySelector('main')

export function renderEasyOrHard(){
    main.innerHTML = `<p class="userCommand">Wählen Sie ein Schwierigkeitsgrad</p>
    <div class="divBtnMain">
        <a id="easyBtn" class="mainBtn">Easy (ohne Timer)</a>
        <a id="hardBtn" class="mainBtn">Hard (mit Timer)</a>
    </div>`;

    document.getElementById("easyBtn").addEventListener("click", easyBtnClicked);
    document.getElementById("hardBtn").addEventListener("click", hardBtnClicked);
}

function easyBtnClicked(){
    sessionStorage.setItem("mode", "easy");
}

function hardBtnClicked(){
    sessionStorage.setItem("mode", "hard");
}