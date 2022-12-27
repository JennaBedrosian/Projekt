let button = document.querySelector("#darkmodeBtn");

console.log(button);

button.addEventListener("click", function () {


  let allText = document.querySelectorAll(" h1, h3, h4, p, label, footer, a, header" );

  allText.forEach((element) => {
    element.style.color = "white";
  });
  let allSections = document.querySelectorAll(".bottom-container, .top-container,body, container, nav, footer, header, html, container, .header, .top-contact-container");

  allSections.forEach((section) => {
    section.style.background = "black";
  });
});