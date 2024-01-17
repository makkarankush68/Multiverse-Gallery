const singleImage = document.querySelectorAll(".img-container");
// console.log(singleImage);
const galleryContainer = document.querySelector("#gallery-container");
const overlayContainer = document.querySelector(".overlay");
const overlayImage = document.querySelector(".overlay-image");
const btnCloseOverlay = document.querySelector(".close-overlay");

singleImage.forEach((image) => {
  image.addEventListener("click", function () {
    handleClick(image);
  });
});
btnCloseOverlay.addEventListener("click",function () {
  closeOverlay();
});

function handleClick(image) {
  // crearing copy of clicked image
  let enlargeImage = document.createElement("article");
  enlargeImage.innerHTML = image.innerHTML;
  enlargeImage.appendChild(btnCloseOverlay);
  //   console.log(image);
  //   console.log(enlargeImage);
  console.log("clicked image");

  galleryContainer.classList.add("clicked");
  overlayContainer.classList.add("active");
  overlayImage.appendChild(enlargeImage);
}
function closeOverlay() {
  console.log("clicked btn");
  galleryContainer.classList.remove("clicked");
  overlayContainer.classList.remove("active");
  overlayImage.innerHTML = "";
  console.log("removed");
}
