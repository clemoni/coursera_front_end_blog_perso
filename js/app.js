// get element navbarside
const navBarSide = document.querySelector(".navbar-side");
const navBarSideClasses = navBarSide.classList;

//firer event: if click add/remove class visible
// fire on navbar__button (hamburger) and sidebar__button--close
document.querySelector(".navbar__toggle").addEventListener("click", (e) => {
  e.preventDefault;
  navBarSideClasses.toggle("visible");
});
// .navbar-side__button--close
document.querySelector(".navbar-side").addEventListener("click", (e) => {
  e.preventDefault;
  // navBarSide.remove("visible");
  navBarSideClasses.toggle("visible");
});

// hover effect
const listItems = document.querySelectorAll(".cover__item");

const mouseEnterDisplayFlex = (e) => {
  let figCaption = e.target.children[1].children[1];
  figCaption.style.display = "flex";
};

const mouseLeaveDisplayNone = (e) => {
  let figCaption = e.target.children[1].children[1];
  figCaption.style.display = "none";
};

Array.from(listItems).forEach((item) => {
  item.addEventListener("mouseenter", mouseEnterDisplayFlex);
  item.addEventListener("mouseleave", mouseLeaveDisplayNone);
});
