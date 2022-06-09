function myFunction() {
    var x = document.getElementById("web-testing-div");
    var y = document.getElementById("web-testing");

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