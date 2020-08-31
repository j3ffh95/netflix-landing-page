const tabItems = document.querySelectorAll(".tab-item");
const tabCOntentItems = document.querySelectorAll(".tab-content-item");

// Listen for tab click
tabItems.forEach((item) => item.addEventListener("click", selectItem));
