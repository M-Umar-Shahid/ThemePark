window.onload = function () {
  document.getElementById("menu-toggle").addEventListener("click", function () {
    document.getElementById("sidebar").classList.add("open");
  });

  document.getElementById("close-btn").addEventListener("click", function () {
    document.getElementById("sidebar").classList.remove("open");
    document.getElementById("sub-menu").classList.remove("open");
  });

  const parkAndRide = document.getElementById("parks-rides-label");
  parkAndRide.addEventListener("mouseover", function () {
    document.getElementById("sub-menu").style.display = "block";
    document.getElementById("sub-menu").classList.add("open");
  });

  document
    .getElementById("sub-menu")
    .addEventListener("mouseleave", function () {
      document.getElementById("sub-menu").classList.remove("open");
    });

  document.getElementById("events").addEventListener("mouseover", function () {
    document.getElementById("sub-menu").classList.remove("open");
  });
};
