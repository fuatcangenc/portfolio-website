// Dark Mode

function setTheme(themeName) {
  localStorage.setItem("theme", themeName);
  document.documentElement.className = themeName;
}

function toggleTheme() {
  if (localStorage.getItem("theme") === "theme-dark") {
    setTheme("theme-light");
  } else {
    setTheme("theme-dark");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("theme") === "theme-dark") {
    setTheme("theme-dark");
    document.getElementById("checkbox").checked = true;
  } else {
    setTheme("theme-light");
    document.getElementById("checkbox").checked = false;
  }
});



