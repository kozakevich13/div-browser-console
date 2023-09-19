var divElement = document.createElement("div");

var randomText = "Random Text Here";
divElement.textContent = randomText;

divElement.className = "product-item";
divElement.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.2)";
divElement.style.borderRadius = "5px";
divElement.style.textAlign = "center";
divElement.style.padding = "20px";

divElement.style.display = "flex";
divElement.style.alignItems = "center";
divElement.style.justifyContent = "center";

var ulElement = document.querySelector(".products.list.items.product-items");

if (ulElement) {
  var fourthProduct = ulElement.querySelector("li:nth-child(4)");
  if (fourthProduct) {
    fourthProduct.parentNode.insertBefore(divElement, fourthProduct.nextSibling);
  } else {
    ulElement.appendChild(divElement);
  }
}

function updateStyles() {
  var screenWidth = window.innerWidth;

  if (screenWidth >= 768) {
    divElement.style.width = "50%";
  } else if (screenWidth >= 576) {
    divElement.style.width = "66.67%";
  } else {
    divElement.style.width = "100%";
  }
}

window.addEventListener("load", updateStyles);
window.addEventListener("resize", updateStyles);
