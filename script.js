const contactForm = document.getElementById('contactForm');
const status = document.getElementById('status');

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    status.textContent = 'Thanks for your message! Md Zubaer will be glad to hear from you.';
    contactForm.reset();
  });
}
