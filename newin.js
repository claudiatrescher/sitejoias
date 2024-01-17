let icone = document.querySelectorAll('.icone');
let toggle = document.querySelectorAll('.toggle');

toggle.forEach((toggle, index) => {
    toggle.addEventListener('click', () => {
        icone[index].classList.toggle('active');
    });
});