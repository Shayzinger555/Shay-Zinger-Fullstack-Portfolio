import { homePageAnimations } from "./homePage.js";

export const loadingScreenFunc = () => {
  window.addEventListener("DOMContentLoaded", (e) => {
    setTimeout(() => {
      const loadingScreen = document.querySelector("#loadingScreen");
      loadingScreen.classList.add("invisible");
      document.body.classList.remove("overFlowHidden");
      e.preventDefault;
      homePageAnimations();
    }, 1500);
  });
};
