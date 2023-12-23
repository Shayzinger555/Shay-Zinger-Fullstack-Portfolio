// NavBar
const menuItems = ["Home ", "About", "Gallery", "Contact"],
  menuItemsLinks = ["#homePage", "#aboutPage", "#galleryPage", "#contactPage"];
export const mainNavBar = document.querySelector("#mainNavBar");
export const createNavBar = () => {
  const navLogo = document.createElement("a");
  navLogo.classList.add("navLogo");
  navLogo.href = "#homePage";
  mainNavBar.appendChild(navLogo);

  // hamburger
  const hamburgerContainer = document.createElement("div");
  const hamburgerIMG = document.createElement("img");
  hamburgerContainer.classList.add("hamburgerContainer");
  hamburgerIMG.classList.add("hamburgerIMG");
  hamburgerIMG.addEventListener("click", () => {
    const dropDown = document.querySelector("#dropDownContainer");
    dropDown.classList.toggle("invisible");
  });

  hamburgerContainer.appendChild(hamburgerIMG);
  mainNavBar.appendChild(hamburgerContainer);
  hamburgerIMG.src = "../Icons/hamburger.svg";
  // LIs
  for (let i = 0; i < menuItems.length; i++) {
    let li = document.createElement("li");
    li.classList.add("navBarLI");
    li.id = `navBarLI${i}`;

    if (i === 0) {
      li.classList.add("currentSectionLI");
    }
    let a = document.createElement("a");
    a.href = menuItemsLinks[i];
    a.textContent = menuItems[i];

    li.appendChild(a);
    mainNavBar.appendChild(li);
  }
};
// DropDown
const dropDownContainer = document.querySelector("#dropDownContainer");
const dropDown = document.createElement("ul");
dropDown.id = "dropDown";
for (let i = 0; i < menuItems.length; i++) {
  let liH = document.createElement("li");
  liH.classList.add("navBarliH");
  let a = document.createElement("a");
  a.href = menuItemsLinks[i];
  a.addEventListener("click", () => {
    dropDownContainer.classList.toggle("invisible");
  });
  a.textContent = menuItems[i];
  liH.appendChild(a);
  dropDown.appendChild(liH);
}
dropDownContainer.appendChild(dropDown);

// Home Page
export const createHomePage = () => {
  //  All text Container
  const homeLiveP = document.createElement("div");
  homeLiveP.classList.add("homeLiveP");
  const homePage = document.querySelector("#homePage");
  const homePageTop = document.querySelector("#homePageTop");
  const homePageBottom = document.querySelector("#homePageBottom");
  const homePageLines = [
    "Welcome",
    "my name is Shay Zinger",
    "and my artist name is",
    "Shy?",
  ];
  // MT Container
  let multipleTextContainer = document.createElement("div");
  multipleTextContainer.className = "multipleTextContainer";
  // animated Lines Container
  const textBoxesContainer = document.createElement("div");
  // Creating Lines Loop
  homePageLines.forEach((line, i) => {
    // Each Box
    const homeLinesBox = document.createElement("div");
    homeLinesBox.id = `homeLinesBox${i + 1}`;
    homeLinesBox.classList.add("homeLinesBox");
    // Each line
    const homeText = document.createElement("h1");
    homeText.id = `homeText${i + 1}`;
    homeText.classList.add("homeText");
    homeText.textContent = line;
    homeLinesBox.appendChild(homeText);
    textBoxesContainer.appendChild(homeLinesBox);
    homePage.appendChild(textBoxesContainer);
    i > 0 ? homeText.classList.add("invisible") : "";
  });
  // Shy? Style

  // Cool Multiple Texts Animation
  let firstMTContainer = document.createElement("span");
  firstMTContainer.className = "firstMTContainer";
  let firstMT = document.createElement("h1");
  let secMT = document.createElement("span");
  firstMT.classList.add("homeText");
  firstMT.textContent = "i'm a ";
  firstMT.classList.add("invisible");
  firstMT.id = "firstMT";
  firstMTContainer.appendChild(firstMT);
  secMT.className = "MT invisible";
  secMT.id = "secMT";
  secMT.textContent = "";
  multipleTextContainer.appendChild(firstMTContainer);
  multipleTextContainer.appendChild(secMT);
  homeLiveP.appendChild(textBoxesContainer);
  homeLiveP.appendChild(multipleTextContainer);
  homePageTop.appendChild(homeLiveP);
  // IMG and Resume Link
  const resumeLinkBTN = document.createElement("a");
  resumeLinkBTN.classList.add("portBTN1");
  resumeLinkBTN.textContent = "Watch Resume";
  resumeLinkBTN.href = "../resume/resume.html";

  const resumeLinkBTN2 = document.createElement("a");
  resumeLinkBTN2.classList.add("portBTN1");
  resumeLinkBTN2.id = "resumeLinkBTN2";
  resumeLinkBTN2.classList.add("tooLeft");
  resumeLinkBTN2.textContent = "Resume";
  resumeLinkBTN2.href = "../resume/resume.html";

  const homeIMGcontainer = document.createElement("div");
  homeIMGcontainer.classList.add("homeIMGcontainer");
  homeIMGcontainer.classList.add("tooRight");
  const homeIMG = document.createElement("img");
  homeIMG.src = "./Images/homePageIMG.jpeg";
  homeIMGcontainer.appendChild(resumeLinkBTN);
  homeIMGcontainer.appendChild(homeIMG);
  homePageTop.appendChild(homeIMGcontainer);
  homePageTop.appendChild(resumeLinkBTN2);

  // Tech Stack
  const techStackContainer = document.createElement("div");
  techStackContainer.id = "techStackContainer";
  techStackContainer.classList.add("tooLeft");
  const techArr = [
    "./Icons/CSS.svg",
    "./Icons/HTML.svg",
    "./Icons/JS.svg",
    "./Icons/BS.svg",
    "./Icons/WP.svg",
    "./Icons/TS.svg",
    "./Icons/RestAPI.svg",
  ];
  techArr.forEach((srcs) => {
    let iconContainer = document.createElement("div");
    iconContainer.classList.add("iconContainer");
    let icon = document.createElement("img");
    icon.classList.add("rotateRight");
    icon.src = `${srcs}`;
    iconContainer.appendChild(icon);
    techStackContainer.appendChild(iconContainer);
  });
  homePageBottom.appendChild(techStackContainer);
  homePage.appendChild(homePageTop);
  homePage.appendChild(homePageBottom);
};
// About Page
export function createAboutPage() {
  const aboutPage = document.querySelector("#aboutPage");
  const aboutTop = document.createElement("div");
  aboutTop.id = "aboutTop";
  const aboutBottom = document.createElement("div");
  aboutBottom.id = "#aboutBottom";
  const aboutP = document.createElement("p");
  const aboutIMG = document.createElement("img");
  aboutIMG.src = "../Images/dkalimPhoto.jpeg";
  aboutIMG.classList.add("aboutIMG");
  aboutIMG.classList.add("tooLeft");

  aboutP.innerHTML = `   I'm a FullStack Web Developer from Tzur Itzhack, Israel. I'm also a
        Music Production Engineer, A musician and a former Fitness Trainer! I
        have been a musician for over a Decade and learned many related skills
        such as Producing , playing instruments , Mixing , mastering etc...`;
  aboutP.classList.add("aboutP");
  aboutP.classList.add("tooRight");
  aboutTop.appendChild(aboutP);
  aboutTop.appendChild(aboutIMG);

  aboutPage.appendChild(aboutTop);
}

createNavBar();
createHomePage();
createAboutPage();

