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