var element = document.getElementById("favicon");

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // Dark mode.
    element.setAttribute("href","assets/iamges/Bornais Music Logo Dark.png");
}
else {
    element.setAttribute("href","assets/iamges/Bornais Music Logo.png");
}

const darkModeListener = (event) => {
if (event.matches) {
  console.log("dark");
  element.setAttribute("href","assets/iamges/Bornais Music Logo Dark.png");
} else {
  console.log("light");
  element.setAttribute("href","assets/iamges/Bornais Music Logo.png");
}
};

// Update favicon on Mode change 
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', darkModeListener);

// Check Mode on load
if (window.matchMedia && window.matchMedia('(prefers-color-scheme:      dark)').matches) {
  element.setAttribute("href","img/favicon-dark.svg");
} else {
  element.setAttribute("href","img/favicon-light.svg");
}