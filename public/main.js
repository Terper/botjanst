function navToggle() {
  console.log("eke")
  const headerElement = document.getElementById("header");
  const toggleElement = document.getElementById("nav-toggle")
  if (headerElement.className !== "nav-open") {
    headerElement.className += "nav-open";
    toggleElement.className = "fa fa-times fa-fw";
  } else {
    headerElement.className = "";
    toggleElement.className = "fa fa-bars fa-fw";
  }
}