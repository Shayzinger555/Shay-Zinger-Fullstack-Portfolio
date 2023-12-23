import { mainNavBar } from "./dom.js";

export const homePageAnimations = () => {
  let homeText1 = document.querySelector("#homeText1"),
    homeText2 = document.querySelector("#homeText2"),
    homeText3 = document.querySelector("#homeText3"),
    homeText4 = document.querySelector("#homeText4"),
    techStackContainer = document.querySelector("#techStackContainer"),
    homeIMGcontainer = document.querySelector(".homeIMGcontainer"),
    resumeLinkBTN2 = document.querySelector("#resumeLinkBTN2");
  firstMT = document.querySelector("#firstMT");

  const secMT = document.querySelector("#secMT");
  homeText1.classList.add("typeANM1");

  function ANM1() {
    setTimeout(() => {
      homeText1.classList.add("bdn");
      homeText2.classList.remove("invisible");
      homeText2.classList.add("typeANM2");
      ANM2();
    }, 1000);
  }
  function ANM2() {
    setTimeout(() => {
      homeText2.classList.add("bdn");
      homeText3.classList.add("typeANM3");
      homeText3.classList.remove("invisible");
      ANM3();
    }, 2000);
  }
  function ANM3() {
    setTimeout(() => {
      homeText3.classList.add("bdn");
      homeText4.classList.add("typeANM1");
      homeText4.classList.remove("invisible");

      ANM4();
    }, 2000);
  }
  function ANM4() {
    setTimeout(() => {
      const shy = document.querySelector("#homeText4");
      shy.classList.add("shyText");
      homeText4.classList.add("bdn");
      firstMT.classList.add("typeANM1");
      firstMT.classList.remove("invisible");

      ANM5();
    }, 1000);
  }
  function ANM5() {
    setTimeout(() => {
      firstMT.classList.add("bdn");
      anm6();
      revealNavBar();
      revealHomeIMG();
      revealTechStack();
      resumeLinkBTN2.classList.remove("tooLeft");
      // colorsEffect();
    }, 1500);
  }
  function anm6() {
    secMT.classList.remove("invisible");
    secMT.classList.add("secMT");
    setInterval(MTA, 8000);
    MTA();
  }

  // Multipule Text Animation
  function MTA() {
    setTimeout(() => {
      secMT.textContent = "Fullstack Developer";
    }, 0);
    setTimeout(() => {
      secMT.textContent = "Music Producer";
    }, 4000);
  }

  ANM1();

  function revealNavBar() {
    mainNavBar.classList.remove("tooTop");
  }
  function revealHomeIMG() {
    homeIMGcontainer.classList.remove("tooRight");
  }
  function revealTechStack() {
    techStackContainer.classList.remove("tooLeft");
  }
};
