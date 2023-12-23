export default function allScrollANM() {
  // Li's decleration
  const aboutP = document.querySelector(".aboutP"),
    aboutIMG = document.querySelector(".aboutIMG"),
    homeLI = document.querySelector("#navBarLI0"),
    aboutLI = document.querySelector("#navBarLI1"),
    galleryLI = document.querySelector("#navBarLI2"),
    contactLI = document.querySelector("#navBarLI3"),
    navBar = document.querySelector("#mainNavBar");
  // Cursor
  const cursorD = document.querySelector(".cursor");

  // checking if half of the Element is visible
  function isElementVisible(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <= window.innerHeight / 2 &&
      rect.bottom >= window.innerHeight / 2
    );
  }
  // Background effect
  function backgroundEffect(p) {
    const body = document.body;

    if (p == 1) {
      body.classList.add("homeBody");
      body.classList.remove("aboutBody");
      body.classList.remove("galleryBody");
      body.classList.remove("contactBody");
    } else if (p == 2) {
      body.classList.add("aboutBody");
      body.classList.remove("homeBody");
      body.classList.remove("galleryBody");
      body.classList.remove("contactBody");
    } else if (p == 3) {
      body.classList.add("galleryBody");
      body.classList.remove("homeBody");
      body.classList.remove("aboutBody");
      body.classList.remove("contactBody");
    } else if (p == 4) {
      body.classList.add("contactBody");
      body.classList.remove("homeBody");
      body.classList.remove("aboutBody");
      body.classList.remove("galleryBody");
    }
  }

  // About Elements Reveal
  document.addEventListener("scroll", () => {
    if (isElementVisible(aboutP)) {
      aboutP.classList.remove("tooRight");
      aboutIMG.classList.remove("tooLeft");
    }
  });

  // Gallery Reveal
  function galleryReveal() {
    const cont1 = document.querySelector("#modContainer1");
    const cont2 = document.querySelector("#modContainer2");
    cont1.classList.remove("bottomBlur");
    cont2.classList.remove("bottomBlur");
  }

  // Identifiers
  document.addEventListener("scroll", () => {
    navBar.classList.remove("tooTop");
    const homePage = document.querySelector("#homePage"),
      aboutPage = document.querySelector("#aboutPage"),
      galleryPage = document.querySelector("#galleryPage"),
      contactPage = document.querySelector("#contactPage");

    if (isElementVisible(homePage)) {
      backgroundEffect(1);
      aboutLI.classList.remove("currentSectionLI");
      contactLI.classList.remove("currentSectionLI");
      galleryLI.classList.remove("currentSectionLI");
      homeLI.classList.add("currentSectionLI");
      cursorD.classList.remove("lightCursor");
    } else if (isElementVisible(aboutPage)) {
      backgroundEffect(2);
      contactLI.classList.remove("currentSectionLI");
      galleryLI.classList.remove("currentSectionLI");
      homeLI.classList.remove("currentSectionLI");
      aboutLI.classList.add("currentSectionLI");
      cursorD.classList.add("lightCursor");
    } else if (isElementVisible(galleryPage)) {
      backgroundEffect(3);
      contactLI.classList.remove("currentSectionLI");
      homeLI.classList.remove("currentSectionLI");
      aboutLI.classList.remove("currentSectionLI");
      galleryLI.classList.add("currentSectionLI");
      cursorD.classList.remove("lightCursor");
      galleryReveal();
    } else if (isElementVisible(contactPage)) {
      backgroundEffect(4);
      galleryLI.classList.remove("currentSectionLI");
      homeLI.classList.remove("currentSectionLI");
      contactLI.classList.add("currentSectionLI");
      cursorD.classList.remove("lightCursor");
    }
  });
}
