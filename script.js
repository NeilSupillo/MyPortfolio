function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Get the container element
var btnContainer = document.getElementById("myDIV");

// Get all buttons with class="btn" inside the container
var btn1 = btnContainer.querySelector(".bts1");
var btn2 = btnContainer.querySelector(".bts2");

// Loop through the buttons and add the active class to the current/clicked button
btn1.addEventListener("click", function () {
  btn1.classList.add("active");
  btn2.classList.remove("active");
  //add.removeChild(detailsContainer);
  function div1hide() {
    const hide = document.getElementsByClassName("with");
    for (var i = 0; i < hide.length; i++) {
      hide[i].classList.remove("hide");
    }
  }
  div1hide();
  function div2hide() {
    const hide = document.getElementsByClassName("without");
    for (var i = 0; i < hide.length; i++) {
      hide[i].classList.add("hide");
    }
  }
  div2hide();
});
btn2.addEventListener("click", function () {
  btn1.classList.remove("active");
  btn2.classList.add("active");

  function div1hide() {
    const hide = document.getElementsByClassName("with");
    for (var i = 0; i < hide.length; i++) {
      hide[i].classList.add("hide");
    }
  }
  div1hide();
  function div2hide() {
    const hide = document.getElementsByClassName("without");
    for (var i = 0; i < hide.length; i++) {
      hide[i].classList.remove("hide");
    }
  }
  div2hide();
});

var add = document.querySelector(".add-projects");
// Create a details container
var detailsContainer = document.createElement("div");
detailsContainer.className = "pro details-container color-container";

// Create the article container for the image
var articleContainer = document.createElement("div");
articleContainer.className = "article-container";

// Create the project image
var projectImage = document.createElement("img");
projectImage.src = "./assets/pro1.png";
projectImage.alt = "Project 1";
projectImage.className = "project-img";

// Create the project title
var projectTitle = document.createElement("h2");
projectTitle.className = "experience-sub-title project-title";
projectTitle.textContent = "Project One";

// Create the button container
var btnContainer = document.createElement("div");
btnContainer.className = "btn-container";

// Create the Github button
var githubButton = document.createElement("button");
githubButton.className = "btn btn-color-2 project-btn";
githubButton.textContent = "Github";
githubButton.onclick = function () {
  window.location.href = "https://github.com/";
};

// Create the Live Demo button
var liveDemoButton = document.createElement("button");
liveDemoButton.className = "btn btn-color-2 project-btn";
liveDemoButton.textContent = "Live Demo";
liveDemoButton.onclick = function () {
  window.location.href = "https://github.com/";
};

// Append elements to the details container
articleContainer.appendChild(projectImage);
btnContainer.appendChild(githubButton);
btnContainer.appendChild(liveDemoButton);
detailsContainer.appendChild(articleContainer);
detailsContainer.appendChild(projectTitle);
detailsContainer.appendChild(btnContainer);

// darkmode ---------
const iconDiv = document.querySelector(".theme");
let icon = document.querySelector(".mode");

iconDiv.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.src = "/assets/sun.png";
  } else {
    icon.src = "/assets/moon.png";
  }
};
