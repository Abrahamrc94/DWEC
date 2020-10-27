const form = document.getElementById('form');
const keys = document.getElementById('keys');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    sessionStorage.setItem('name', 'Dorian');
})