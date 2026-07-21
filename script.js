const connectButton = document.getElementById('connectButton');
const status = document.getElementById('status');

connectButton.addEventListener('click', () => {
  status.textContent = 'Thanks for saying hello - Sajid will be glad to hear from you!';
  connectButton.textContent = 'Hello sent!';
  connectButton.disabled = true;
});
