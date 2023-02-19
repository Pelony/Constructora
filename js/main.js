const hamburguesa = document.querySelector('.hamburguesa');
const mobile= document.querySelector('.mobile-menu');

hamburguesa.addEventListener('click', function(){
    this.classList.toggle('is-active');
    mobile.classList.toggle('is-open');
});


