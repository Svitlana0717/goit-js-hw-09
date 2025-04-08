const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

// Завантаження збережених даних
const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
if (savedData.email) form.elements.email.value = savedData.email;
if (savedData.message) form.elements.message.value = savedData.message;

// Відстеження змін у формі
form.addEventListener('input', () => {
  const formData = {
    email: form.elements.email.value,
    message: form.elements.message.value,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

// Обробка відправки форми
form.addEventListener('submit', e => {
  e.preventDefault();

  const formData = {
    email: form.elements.email.value,
    message: form.elements.message.value,
  };

  console.log('Відправлено:', formData);

  form.reset();
  localStorage.removeItem(STORAGE_KEY);
});
