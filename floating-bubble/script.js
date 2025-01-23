// Get DOM elements
const floatingButton = document.querySelector(".floating-button");
const modalOverlay = document.querySelector(".modal-overlay");
const closeButton = document.querySelector(".close-button");
const videoPreview = document.querySelector(".video-preview");

// Removed dragging functionality

// Open modal when clicking the floating button
floatingButton.addEventListener("click", () => {
  modalOverlay.classList.add("active");
});

// Close modal when clicking close button or outside modal
closeButton.addEventListener("click", () => {
  modalOverlay.classList.remove("active");
});

modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) {
    modalOverlay.classList.remove("active");
  }
});

// Close modal with escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modalOverlay.classList.remove("active");
  }
});
