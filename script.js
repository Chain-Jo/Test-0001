const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const oracion = document.querySelector('.oracion');
const siBtn = document.querySelector('.si-btn');
const noBtn = document.querySelector('.no-btn');
const img = document.querySelector('.foto');


const wrapperRect = wrapper.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();


siBtn.addEventListener('click', () => {
    question.innerHTML = 'Excelente 😎, ¡Gracias!'
    oracion.innerHTML = 'Mi número es: 0414-1427398'
    img.src = "/Bolita-Elegante.jpg";
    noBtn.disabled = true;
});

noBtn.addEventListener('click', () => {
    const moverEjeX = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) +1;
    const moverEjeY = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) +1;


    noBtn.style.left = moverEjeX + 'px';
    noBtn.style.top = moverEjeY + 'px';
    img.src = "/Bolita-Agonizando.jpg";

    let currentFontSizeAndWidth = window.getComputedStyle(siBtn).getPropertyValue('font-size', 'width', 'height');
    let newSize = parseFloat(currentFontSizeAndWidth) + 10; // Increase font size by  * 2px
    let newSizeBox = parseFloat(currentFontSizeAndWidth) + 20; // Increase font size by  * 2px
    siBtn.style.fontSize = newSize + 'px';
    siBtn.style.width = newSizeBox + '%';
    siBtn.style.height = newSizeBox + '%';
    question.innerHTML = '¿Segura?'
    oracion.innerHTML = 'Dame la oportunidad please :('
    siBtn.innerHTML = 'Esta bien, acepto'

});