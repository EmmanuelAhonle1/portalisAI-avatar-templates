// Get DOM elements
const floatingButton = document.querySelector(".floating-button");
const modalOverlay = document.querySelector(".modal-overlay");
const closeButton = document.querySelector(".close-button");
const videoPreview = document.querySelector(".video-preview");
const chatIframe = document.querySelector("#chat-iframe");

const avatarPreviewURL =
  "https://www.dropbox.com/scl/fi/kgf7knm8s3gn103amn0ne/JessPreview-gif.gif?rlkey=jgi3eyj6f6qux1q8sdtaxfuvi&raw=1";

const activeCallURL =
  "https://www.dropbox.com/scl/fi/q3l7ziytd0yocmioihz4h/phone-image.jpg?rlkey=squ318l4z2ucvb22c9zji3aju&st=mrycwnkb&raw=1";

// Open modal when clicking the floating button
floatingButton.addEventListener("click", () => {
  modalOverlay.classList.add("active");
  videoPreview.setAttribute("src", activeCallURL);
});

modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) {
    modalOverlay.classList.remove("active");
    videoPreview.setAttribute("src", avatarPreviewURL);
  }
});

// Close modal when clicking close button or outside modal
closeButton.addEventListener("click", () => {
  modalOverlay.classList.remove("active");
  videoPreview.setAttribute("src", avatarPreviewURL);
});

// Close modal with escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modalOverlay.classList.remove("active");
    videoPreview.setAttribute("src", avatarPreviewURL);
  }
});

const toolTip = document.createElement("div");
toolTip.textContent = "Chat with our amazing AI assistant!";

document.body.appendChild(toolTip);

floatingButton.onmouseover = (e) => {
  toolTip.style.display = "block";
  toolTip.style.left = e.pageX + 30 + "px";
  toolTip.style.top = e.pageY + 30 + "px";
};

// Better approach - catches all logs immediately
const originalConsoleLog = console.log;
console.log = function (...args) {
  console.log("nah");
  if (args[0] === "your specific string") {
    // Runs for every matching log, no matter how fast they come
  }
  originalConsoleLog.apply(console, args);
};
