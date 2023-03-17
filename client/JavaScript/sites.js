const main = document.querySelector("main");

const renderHome = () => {
  main.innerHTML = `<p class="userCommand">Wählen Sie ein Gebiet</p>
  <div class="divBtnMain">
      <a class="mainBtn" id="africa">Afrika</a>
      <a class="mainBtn" id="america">Amerika</a>
      <a class="mainBtn" id="asia">Asien</a>
      <a class="mainBtn" id="europe">Europa</a>
      <a class="mainBtn" id="world">Ganze Welt</a>
  </div>`;

  document.querySelectorAll(".mainBtn").forEach((button) => {
    button.addEventListener("click", () => {
      import("./renderEasyOrHard.js").then((module) => {
        module.renderEasyOrHard(button.id);
      });
    });
  });
};

const renderAfrica = () => {};

const renderAmerica = () => {
  import("./quiz/america.js").then((module) => {
    module.americatest();
  });
};

const renderAsia = () => {
  import("./quiz/asia.js").then((module) => {
    module.asiatest();
  });
};

const renderEurope = () => {
  import("./quiz/europe.js").then((module) => {
    module.europetest();
  });
};

const renderWorld = () => {
  import("./quiz/world.js").then((module) => {
    module.worldtest();
  });
};
