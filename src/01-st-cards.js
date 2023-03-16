const cards = document.querySelectorAll('.st-card');
let zIndex = cards.length;

cards.forEach(card => {
  card.addEventListener('click', () => {
    card.style.zIndex = zIndex++;
  });
});