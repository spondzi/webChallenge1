const CLASS_ACTIVE = "active";

const UIElementsData = {
  mobileMenu: "[data-mobile-menu]",
  overlay: "[data-overlay]",
  listItems: "[data-list-items]",
};

const mobileMenu = document.querySelector(UIElementsData.mobileMenu);
const overlay = document.querySelector(UIElementsData.overlay);
const listItems = document.querySelector(UIElementsData.listItems);

mobileMenu.addEventListener("click", () => {
  mobileMenu.classList.toggle(CLASS_ACTIVE);
  overlay.classList.toggle(CLASS_ACTIVE);
  listItems.classList.toggle(CLASS_ACTIVE);
});
