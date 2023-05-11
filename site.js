
// POP UPS ////////////////////////////////////////////

function popItem(name1){
  var x = document.getElementById(name1);
  if (x.style.display === "none" || x.style.display == '' ) {
    x.style.display = "flex";
    hint.style.opacity = 1;
    hint.style.transform = 'scale(1)';
  } else {
    x.style.display = "none";
  }
}

// POP-PDF FUNCTION
function popPDF(name1, name2){
  var x = document.getElementById(name1);
  var y = document.getElementById(name2);
  if (x.style.display === "none" || x.style.display == '' || y.style.display === "none" || y.style.display == '') {
    x.style.display = "flex";
    y.style.display = "block";
      hint.style.opacity = 1;
      hint.style.transform = 'scale(1)';
  } else {
    x.style.display = "none";
    y.style.display = "none";
  }
}

// WORK POP-UPS
// DEVELOPMENT
function popDevelopment(){
  popItem("development-items")
}
function popMobileDevelopment(){
  popItem("mobile-development-items")
}

// RESEARCH
function popResearch(){
  popItem("research-items")
}
function popMobileResearch(){
  popItem("mobile-research-items")
}

// MARKETING
// FASHION NOVA USABILITY TESTING
function popFS() {
  popPDF("fs-pop-up-div", "fs-pop-up");
}
// WA NEEDS ASSESSMENT
function popWA() {
  popPDF("wa-pop-up-div", "wa-pop-up");
}
// SURVEY DESIGN
function popSUR() {
  popPDF("sur-pop-up-div", "sur-pop-up");
}
// RESUME
function popResume() {
  popPDF("resume-pop-up-div", "resume-pop-up");
}



// GALLERY INDICATORS
const list = document.querySelector(".list");
const items = Array.from(document.querySelectorAll(".item"));
const indicators = Array.from(document.querySelectorAll(".indicator"));

const observer = new IntersectionObserver(onIntersectionObserved, {
  root: list,
  threshold: 0.6
});

function onIntersectionObserved(entries) {
  entries.forEach(entry => {
    // On page load, firefox claims item with index 1 isIntersecting,
    // while intersectionRatio is 0
    if (entry.isIntersecting && entry.intersectionRatio >= 0.6) {
      const intersectingIndex = items.indexOf(entry.target);
      activateIndicator(intersectingIndex);
    }
  });
}

function activateIndicator(index) {
  indicators.forEach((indicator, i) => {
    indicator.classList.toggle("active", i === index);
  });
}

items.forEach(item => {
  observer.observe(item);
});

