// DOM
export function createGallery() {
  // Decleration For The Containers
  const galleryPage = document.querySelector("#galleryPage"),
    mod1Container = document.createElement("div"),
    mod2Container = document.createElement("div"),
    mod1TextContainer = document.createElement("div"),
    mod2TextContainer = document.createElement("div"),
    mod1P = document.createElement("p"),
    mod2P = document.createElement("p"),
    mod1Title = document.createElement("h2"),
    mod2Title = document.createElement("h2"),
    mod1CardsContainer = document.createElement("div"),
    mod2CardsContainer = document.createElement("div");

  // Array Declerations

  const modLinksArr = [
      "./landingPages/Landing page 1/HTML/landingPage1.html",
      "./landingPages/Landing page 2/HTML/landingPage2.html",
      "./landingPages/Landing page 3/HTML/landingPage3.html",
      "./landingPages/Landing page 4/HTML/landingPage4.html",
      "./landingPages/Landing page 5/HTML/landingPage5.html",
      "./landingPages/Landing page 6/HTML/landingPage6.html",
      "./JSprojects/INGAME/index.html",
      "./JSprojects/Page Builder/Demo 5/demo5.html",
      "./JSprojects/Snake/snake.html",
      "./JSprojects/Pacman/index.html",
      "./JSprojects/Account/index.html",
      "./JSprojects/Countries/index.html",
    ],
    modLinksDownloadArr = [
      "./landingPages/Landing page 1",
      "./landingPages/Landing page 2",
      "./landingPages/Landing page 3",
      "./landingPages/Landing page 4",
      "./landingPages/Landing page 5",
      "./landingPages/Landing page 6",
      "./JSprojects/INGAME",
      "./JSprojects/Page Builder/Demo 5",
      "./JSprojects/Snake",
      "./JSprojects/Pacman",
      "./JSprojects/Account",
      "./JSprojects/Countries",
    ],
    modIMGArr = [
      "./Images/landingPage1Logo.png",
      "./Images/landingPage2Logo.png",
      "./Images/landingPage3Logo.png",
      "./Images/landingPage4Logo.png",
      "./Images/landingPage5Logo.png",
      "./Images/landingPage6Logo.png",
      "./Images/ingameSnippet.png",
      "./Images/pageBuilderSnippet.png",
      "./Images/snakeSnipet.png",
      "./Images/pacman.png",
      "./Images/myAccountSnippet.png",
      "./Images/countriesSnippet.png",
    ],
    modTitleArr = [
      "Ingame",
      "Page Builder",
      "Snake (PC only)",
      "Pacman (PC only)",
      "Account",
      "Countries (API)",
    ],
    modPArr = [
      "Ingame, is an arcade website which contains multiple mini-games, in order to play a mini game you have to win the previous one. right now theres not too many or too advanced games here, due to the project deadline. hopefully soon enough projects like Pacman or Snake Will be added (:  (i apologize for the code in this project, it was before i learned how to use modules and it has hard coded results in the 3 built mini games instead of logic functions)",
      "Page Builder is a DOM based project in which the user has the option to create divs using a settings screen, idealy stimulates the concept of non based code web development platforms  ",
      "the classic snake game. in this project i learned a lot about game loops, dynamic usage of stuff like the grid system and the keys event listeners. featuring 4 modes to make sure everyone can have fun and not break their keyboards while playing.",
      "obviously, Pacman is the hardest Project of this module, unlike the Snake game , here i had to use way more advanced game developent logic and tools + learning the html canvas which i never heard about. i can't credit my self for this prject logic but i did write the whole code from a 3 hours long tutorial while taking breaks to learn about skills and ideas i wan't farmiliar with, and changing setting and values to understand deeply what i'm doing. ",
      "in this project i wanted to create from 0 a project we did together on a class, a simple account balance management, that save and loads Data from Local Storage",
      "the countries project is an API requests based project, getting Data from the REST countries API, filtering Cards by certain Data from the API or Local Storage",
    ];

  //  Preview Pages
  const galleryModal = document.querySelector("#galleryModal"),
    titleAndX = document.querySelector("#titleAndX"),
    previewPcontainer = document.querySelector("#previewPcontainer"),
    // previewIMGcontainer = document.querySelector(".previewIMGcontainer"),
    imageAndBTNS = document.querySelector("#imageAndBTNS");

  const previewTitle = document.createElement("h1"),
    previewP = document.createElement("p"),
    previewClose = document.createElement("div");
  previewClose.id = "previewClose";
  const previewCloseIcon = document.createElement("img");
  previewCloseIcon.src = "./Icons/X.svg";
  previewClose.appendChild(previewCloseIcon);

  previewClose.addEventListener("click", () => {
    galleryModal.close();
  });
  // mini Containers Appendings

  previewPcontainer.appendChild(previewP);
  // Landing Pages P
  const landingPagesParagraph =
    "This is one of The 6 Landing Pages I built in the last Module (CSS,HTML &Bootstrap) in this this Project I had To recreate a Landing Page with a given style, making it as responsive and accurate as possible ";

  function openPreviewPage(i) {
    console.log(i);
    const previewIMGcontainer = document.querySelector(".previewIMGcontainer");
    // seperate Content that doesnt require 2 array for the Landing Pages
    imageAndBTNS.innerHTML = "";

    if (i <= 5) {
      previewTitle.textContent = `Landing Page ${i + 1}`;
      previewP.textContent = landingPagesParagraph;
    } else {
      previewTitle.textContent = modTitleArr[i - 6];
      previewP.textContent = modPArr[i - 6];
    }
    // common arrays content
    // IMG
    previewIMGcontainer.style.backgroundImage = `url(${modIMGArr[i]})`;
    imageAndBTNS.appendChild(previewIMGcontainer);
    // buttons
    const previewButtonsContainer = document.createElement("div");
    previewButtonsContainer.classList.add("previewButtonsContainer");

    const openProjectBTN = document.createElement("a");
    openProjectBTN.href = modLinksArr[i];
    openProjectBTN.textContent = "open Project";
    openProjectBTN.classList.add("portBTN1");

    const downloadProjectBTN = document.createElement("a");
    downloadProjectBTN.href = modLinksDownloadArr[i];
    downloadProjectBTN.textContent = "Download Project";
    downloadProjectBTN.classList.add("portBTN1");
    downloadProjectBTN.setAttribute("download", "");
    // Appendings
    titleAndX.appendChild(previewTitle);
    titleAndX.appendChild(previewClose);

    previewButtonsContainer.appendChild(openProjectBTN);
    previewButtonsContainer.appendChild(downloadProjectBTN);
    imageAndBTNS.appendChild(previewButtonsContainer);
    galleryModal.showModal();
  }

  //   Classes, Id's, Text Contents
  mod1Container.classList.add("modContainer");
  mod2Container.classList.add("modContainer");
  mod1Container.id = "modContainer1";
  mod2Container.id = "modContainer2";
  mod1Container.classList.add("bottomBlur");
  mod2Container.classList.add("bottomBlur");
  // Texts Containers
  mod1TextContainer.classList.add("modTextContainer");
  mod2TextContainer.classList.add("modTextContainer");

  mod2CardsContainer.id = "mod2CardsContainer";
  mod2CardsContainer.classList.add("modCardsContainer");
  // Titles
  mod1Title.textContent = "HTML & CSS Module";
  mod2Title.textContent = "JavaScript Module";
  // Description
  mod1P.textContent =
    "The Projects Requierd in this module are 6 Landing Pages that we Had to recreate using HTML, CSS and Bootstrap ";
  mod2P.textContent =
    "In this module we Had to build 6 JS projects featuring skills such as working with API's, ES6 classes, building game with intermediate JS logic and exploring Design freely with Technologies";

  // Cards Containers forEach Loops
  mod1CardsContainer.id = "mod1CardsContainer";
  mod1CardsContainer.classList.add("modCardsContainer");

  // Mod Cards Creation
  modLinksArr.forEach((link, i) => {
    const card = document.createElement("div");
    card.classList.add("galleryCard");
    const galleryCardButton = document.createElement("button"),
      galleryCardIMG = document.createElement("div"),
      galleryCardOL = document.createElement("div");
    galleryCardIMG.style.backgroundImage = `url(${modIMGArr[i]})`;
    galleryCardIMG.classList.add("galleryCardIMG");
    galleryCardOL.classList.add("galleryCardOL");
    galleryCardOL.classList.add("invisible");
    // galleryCardButton.href = link;
    galleryCardButton.textContent = "Watch Preview";
    galleryCardButton.classList.add("portBTN1");
    galleryCardOL.appendChild(galleryCardButton);

    galleryCardButton.addEventListener("click", () => {
      openPreviewPage(i);
    });

    // galleryCardButton.href = mod1LinksArr[i];
    card.addEventListener("mouseover", () => {
      galleryCardOL.classList.remove("invisible");
    });

    card.addEventListener("mouseout", () => {
      galleryCardOL.classList.add("invisible");
    });

    card.appendChild(galleryCardOL);
    // card.appendChild(galleryCardTitle);
    card.appendChild(galleryCardIMG);

    // Seperation
    if (i <= 5) {
      mod1CardsContainer.appendChild(card);
    } else {
      mod2CardsContainer.appendChild(card);
    }
  });
  // Appendings
  mod1TextContainer.appendChild(mod1Title);
  mod2TextContainer.appendChild(mod2Title);
  mod1TextContainer.appendChild(mod1P);
  mod2TextContainer.appendChild(mod2P);
  mod1Container.appendChild(mod1TextContainer);
  mod1Container.appendChild(mod1CardsContainer);
  mod2Container.appendChild(mod2TextContainer);
  mod2Container.appendChild(mod2CardsContainer);
  galleryPage.appendChild(mod1Container);
  galleryPage.appendChild(mod2Container);
}
