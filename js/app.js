window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");
  loader.style.display = "none"; // Hide the loader after the page is fully loaded
});

// JavaScript code to handle tab switching
function changeTab(index) {
  var tabs = document.querySelectorAll(".link");
  var indicator = document.querySelector(".indicator");
  var tabContent = document.querySelectorAll("#eServicesList ");

  // Update active tab
  tabs.forEach(function (tab, i) {
    tab.classList.remove("active");
    if (i === index) {
      tab.classList.add("active");
    }
  });

  // Update indicator position
  var tabWidth = tabs[0].offsetWidth;
  indicator.style.left = index * tabWidth + "px";

  // Hide/show tab content
  tabContent.forEach(function (tab, i) {
    tab.style.display = i === index ? "block" : "none";
  });
}
