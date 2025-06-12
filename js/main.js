function increaseFont() {
  const currentSize = parseFloat(getComputedStyle(document.body).fontSize);
  document.body.style.fontSize = (currentSize + 2) + 'px';
}

function decreaseFont() {
  const currentSize = parseFloat(getComputedStyle(document.body).fontSize);
  if (currentSize > 10) {
    document.body.style.fontSize = (currentSize - 2) + 'px';
  }
}

// Basic animation using JS (if needed later)
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.animate').forEach(el => {
    el.classList.add('fade-in');
  });
});