const menuButton = document.querySelector(".menu-button");
const closeButton = document.querySelector(".side-bar-close-button");

menuButton.onclick = () => {
    const sideBarLayout = document.querySelector(".side-bar-layout");
    sideBarLayout.classList.add("side-bar-show");
    const sideBarContainer = document.querySelector(".side-bar-container");
    sideBarContainer.classList.add("side-bar-container-show");
}

closeButton.onclick = () => {
    const sideBarLayout = document.querySelector(".side-bar-layout");
    sideBarLayout.classList.remove("side-bar-show");
    const sideBarContainer = document.querySelector(".side-bar-container");
    sideBarContainer.classList.remove("side-bar-container-show");
}

