//Used: click, dblclick, mouseleave, mouseenter, mouseover, keyup, load, drag, drop, and wheel

// Your code goes here
const allImages = document.querySelectorAll("img");
allImages.forEach(image => {
  //dblclick causes each image to double in size.
  image.addEventListener("dblclick", event => {
    image.style.transform = "scale(2)";
    image.style.transition = "transform 2s";
  });
  //mouseleave causes each image to return to starting size.
  image.addEventListener("mouseleave", event => {
    image.style.transform = "scale(1)";
    image.style.transition = "transform 2s";
  });
});

//----mouseover, mouseleave, mouseenter Event Listeners----//
const introSection = document.querySelector(".intro");
let introBrightness = 90;
//--changes the .intro backgroud everytime the cursor crosses an element--//
introSection.addEventListener("mouseover", event => {
  introBrightness -= 8;
  introSection.style.background = `hsl(216 50% ${introBrightness}%)`;
});
introSection.addEventListener("mouseleave", event => {
  introSection.style.background = "white";
  introSection.style.transition = "background 2s";
});

const contentSection = document.querySelectorAll(
  ".content-section .text-content"
);
contentSection.forEach(section => {
  //--changes background of text-content when a mouse enters the field.--//
  section.addEventListener("mouseenter", event => {
    section.style.background = "salmon";
    section.style.transition = "background 1.5s";
  });
  section.addEventListener("mouseleave", event => {
    section.style.background = "white";
    section.style.transition = "background 2s";
  });
});
//mouseleave resets background to white//

//--KeyUp Event Listener--//
//Every key up action causes background to get darker.
const bodyPoint = document.querySelector("body");
let backColor = 100;
bodyPoint.addEventListener("keyup", event => {
  backColor -= 2;
  bodyPoint.style.background = `hsl(30 50% ${backColor}%)`;
});

//--Wheel Event Listenter--//
//Every wheel turn will increase the background brightness.
window.addEventListener("wheel", event => {
  backColor += 3;
  bodyPoint.style.background = `hsl(30 50% ${backColor}%)`;
});

const btnDest = document.querySelectorAll(".destination .btn");
const destSect = document.querySelectorAll(".destination");
btnDest.forEach(button => {
  //click makes each button change color.
  button.addEventListener("click", event => {
    button.style.background = "orange";
  });
});

const funInSunBtn = document.querySelector(".destination .btn");
const funInSun = document.querySelector(".destination");
funInSunBtn.addEventListener("click", event => {
  //click on first button causes first text to turn red.
  funInSun.style.background = "red";
});

//--Load Event Listener will start with loading a series of "welcome" alerts--//
window.addEventListener("load", event => {
  window.alert("Hello!!!!!");
  for (let i = 0; i < 5; i++) {
    if (i % 2 > 0) {
      alert("Hi!");
    } else {
      alert("Wassup");
    }
  }
  alert(`Don't worry, it's over now`);
});

//-----Drag and drop start----//
function allowDrop(ev) {
  ev.preventDefault();
}
function dragstart_handler(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}
function drop(ev) {
  ev.preventDefault();
  let data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}

//Sets all images to be "draggable"
for (let i = 0; i < allImages.length; i++) {
  allImages[i].setAttribute("id", `contentImage${i + 1}`);
  allImages[i].setAttribute("draggable", "true");
  allImages[i].setAttribute("ondragstart", "dragstart_handler(event)");
}
//Sets the whole body section to be a "dropzone"
const bodyAll = document.querySelector("body");
bodyAll.setAttribute("ondrop", "drop(event)");
bodyAll.setAttribute("ondragover", "allowDrop(event)");
//----End Drag and Drop------//

const mainNav = document.querySelector(".nav-container .nav");
mainNav.addEventListener("click", event => {
  event.preventDefault();
});

//-- .stopPropagation() --//
const contentDiv = document.querySelectorAll(".destination");
const contentP = document.querySelectorAll(".destination p");
const contentH = document.querySelectorAll(".destination h4");
contentDiv[1].addEventListener("click", event => {
  alert("div");
  //alerts div when click in div or child elements.
});
contentH[1].addEventListener("click", event => {
  alert("H4");
  //prints H4 when click in H4
});
contentP[1].addEventListener("click", event => {
  alert("p");
  event.stopPropagation();
  //alerts p hen click in p, but stop div alert
});
