document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.formulario');
    const modal = document.getElementById('modal');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); 

        modal.style.display = 'flex';

        setTimeout(() => {
            modal.style.display = 'none';
        }, 3000);

        form.reset();
    });
});