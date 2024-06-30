window.onload = function () {
  const parksRidesLabel = document.getElementById("parks-rides-label");
  const parksMenu = document.getElementById("parks-menu");
  const ridesMenu = document.getElementById("rides-menu");
  const parkChevronIcon = parksMenu.querySelector(".parks-chevron");
  const rideChevronIcon = ridesMenu.querySelector(".rides-chevron");
  document.getElementById("menu-toggle").addEventListener("click", function () {
    document.getElementById("sidebar").classList.add("open");
    document.getElementById("sub-menu").classList.remove("open-mobile");
  });

  document.getElementById("close-btn").addEventListener("click", function () {
    document.getElementById("sidebar").classList.remove("open");
    document.getElementById("sub-menu").classList.remove("open");
    document.getElementById("sub-menu").classList.remove("open-mobile");
  });

  parksRidesLabel.addEventListener("mouseover", function () {
    document.getElementById("sub-menu").style.display = "block";
    document.getElementById("sub-menu").classList.add("open");
  });

  document
    .getElementById("sub-menu")
    .addEventListener("mouseleave", function () {
      document.getElementById("sub-menu").classList.remove("open");
    });
  
  parksMenu.addEventListener("click", function () {
    if (parkChevronIcon.classList.contains("rotate")) {
      parkChevronIcon.classList.remove("rotate");
      parkChevronIcon.classList.add("no-rotate");
      document.querySelectorAll(".parks").forEach((content) => {
        content.style.display = "none";
      });
    } else {
      parkChevronIcon.classList.remove("no-rotate");
      parkChevronIcon.classList.add("rotate");
      document.querySelectorAll(".parks").forEach((content) => {
        content.style.display = "block";
      });
    }
  });
  ridesMenu.addEventListener("click", function () {
    if (rideChevronIcon.classList.contains("rotate")) {
      rideChevronIcon.classList.remove("rotate");
      rideChevronIcon.classList.add("no-rotate");
      document.querySelectorAll(".rides").forEach((content) => {
        content.style.display = "none";
      });
    } else {
      rideChevronIcon.classList.remove("no-rotate");
      rideChevronIcon.classList.add("rotate");
      document.querySelectorAll(".rides").forEach((content) => {
        content.style.display = "block";
      });
    }
  });

  if (window.innerWidth < 576) {
    parksRidesLabel.addEventListener("click",()=>{
      document.getElementById("sidebar").classList.remove("open");
      document.getElementById("sub-menu").style.display = "block";
      document.getElementById("sub-menu").classList.add("open-mobile");
    })
  }

};



