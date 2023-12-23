export function createContacts() {
  // Declerations
  // Mains
  const contactPage = document.querySelector("#contactPage"),
    contactMiddleContainer = document.createElement("div"),
    socialsTitleContainer = document.createElement("div"),
    formTitleContainer = document.createElement("div"),
    formContentContainer = document.createElement("div"),
    socialsContentContainer = document.createElement("div"),
    contactForm = document.createElement("form"),
    socialsContainer = document.createElement("div"),
    formContainer = document.createElement("div");

  // Classes and Id's
  contactMiddleContainer.id = "contactMiddleContainer";
  socialsContainer.id = "socialsContainer";
  formContainer.id = "formContainer";
  socialsTitleContainer.classList.add("contactTitle");
  formTitleContainer.classList.add("contactTitle");
  contactForm.id = "contactForm";
  socialsContentContainer.id = "socialsContentContainer";
  formContentContainer.id = "formContentContainer";
  // Form
  const formPHArr = [
    "First Name:",
    "Last Name:",
    "Phone Number:",
    "E-mail:",
    "Description",
  ];
  formPHArr.forEach((PH, i) => {
    let input = document.createElement("input");
    input.placeholder = PH;
    input.classList.add("contactInput");
    contactForm.appendChild(input);
  });
  const formBTN = document.createElement("button");
  formBTN.classList.add("portBTN1");
  formBTN.textContent = "send";

  //
  const socialsIcons = [
    "../Icons/instagram.svg",
    "../Icons/gmail.svg",
    "../Icons/whatsapp.svg",
    "../Icons/spotify.svg",
    "../Icons/tiktok.svg",
    "../Icons/github.svg",
  ];
  const socialsLinks = [
    "https://www.instagram.com/itshyzinger/",
    "mailto:shayzinger555@gmail.com",
    "https://wa.me/9722327557",
    "",
    "https://www.tiktok.com/@itshyzinger",
    "https://github.com/Shayzinger555",
  ];

  socialsIcons.forEach((icon, i) => {
    const social = document.createElement("a");
    const socialIMG = document.createElement("img");
    social.href = socialsLinks[i];
    socialIMG.src = socialsIcons[i];
    socialIMG.classList.add("socialIMG");

    social.appendChild(socialIMG);
    social.classList.add("social");
    socialsContentContainer.appendChild(social);

    if (i == 3) {
      social.addEventListener("click", () => {
        alert("i have a temporarly issue with my Spotify account ):");
      });
    }
  });

  // Selectors & Text contects
  // Main
  contactMiddleContainer.classList.add("contactMiddleContainer");
  // Titles

  formTitleContainer.textContent = "leave a message";
  socialsTitleContainer.textContent = "Social Media";
  // Titles

  // Form
  contactForm.classList.add("contentForm");

  // CreditLine

  // Appendings
  // Credits

  //   Socials
  socialsContainer.appendChild(socialsTitleContainer);
  socialsContainer.appendChild(socialsContentContainer);
  //   Form
  contactForm.appendChild(formBTN);
  formContentContainer.appendChild(contactForm);

  formContainer.appendChild(formTitleContainer);
  formContainer.appendChild(formContentContainer);

  contactMiddleContainer.appendChild(socialsContainer);
  contactMiddleContainer.appendChild(formContainer);
  contactPage.appendChild(contactMiddleContainer);
}
