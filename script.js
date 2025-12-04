document.addEventListener('DOMContentLoaded', function () {
  const cta = document.getElementById('cta');
  const form = document.getElementById('contactForm');
  const formMessage = document.getElementById('formMessage');

  cta?.addEventListener('click', () => {
    document.getElementById('projecten')?.scrollIntoView({ behavior: 'smooth' });
  });

  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    formMessage.textContent = 'Bedankt! Je bericht is (niet echt) verzonden.';
    formMessage.classList.remove('hidden');
  });
});