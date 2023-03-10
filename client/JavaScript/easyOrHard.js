const main = document.querySelector('main')

export function renderEasyOrHard(){
    main.innerHTML = `<p class="userCommand">Wählen Sie ein Schwierigkeitsgrad</p>
    <div class="divBtnMain">
        <a id="easyBtn" class="mainBtn" href="#">Easy (ohne Timer)</a>
        <a id="hardBtn" class="mainBtn" href="#">Hard (mit Timer)</a>
    </div>`;

    document.getElementById("easyBtn").addEventListener("click", easyBtnClicked);
    document.getElementById("hardBtn").addEventListener("click", hardBtnClicked);
}

function easyBtnClicked(){
    console.log("Easy button was clicked");
}

function hardBtnClicked(){
    console.log("Hard button was clicked");
}