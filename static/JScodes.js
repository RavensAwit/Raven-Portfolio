const contactModal = document.getElementById('contactModal');

// Open modal when "Reach out" button is clicked
document.getElementById('reachOutBtn').addEventListener('click', () => {
  contactModal.classList.remove('translate-x-full');
  contactModal.classList.add('translate-x-0');
});

// Close modal when the close button is clicked
document.getElementById('closeModal').addEventListener('click', () => {
  contactModal.classList.remove('translate-x-0');
  contactModal.classList.add('translate-x-full');
});

// Copy email functionality
document.getElementById('copyEmailBtn').addEventListener('click', () => {
  const email = document.getElementById('emailAddress').innerText;
  navigator.clipboard.writeText(email).then(() => {
    alert('Email copied to clipboard!');
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide("#projectCarousel", {
    type: "loop",
    arrows: false, // Custom navigation buttons used instead of default arrows
  });

  splide.mount();

  document.getElementById("nextProject").addEventListener("click", function () {
    splide.go(">");
  });

  document.getElementById("prevProject").addEventListener("click", function () {
    splide.go("<");
  });
});

document.getElementById('checkResume').addEventListener('click', function() {
  window.location.href = 'https://drive.google.com/file/d/1G2h4FZqvWCdxpprCJbpkCogqUIYErTBR/view?usp=sharing';
});
