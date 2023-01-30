//dev pop up
function myFunction() {
  var x = document.getElementById("dev-pop-up-div");
  var y = document.getElementById("dev-pop-up");

  if (x.style.display === "none" || y.style.display === "none" ) {
    x.style.display = "flex";
    y.style.display = "block";
      hint.style.opacity = 1;
      hint.style.transform = 'scale(1)';
  } else {
    x.style.display = "none";
    y.style.display = "none";
  }
}
//resume popup
function popResume() {
  var x = document.getElementById("resume-pop-up-div");
  var y = document.getElementById("resume-pop-up");

  if (x.style.display === "none" || y.style.display === "none" ) {
    x.style.display = "flex";
    y.style.display = "block";
      hint.style.opacity = 1;
      hint.style.transform = 'scale(1)';
  } else {
    x.style.display = "none";
    y.style.display = "none";
  }
}

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
