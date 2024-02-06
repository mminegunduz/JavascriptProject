const accordions=document.querySelectorAll('.firstA');

accordions.forEach((accordion) =>{
    const button=accordion.querySelector('.button');
    button.addEventListener('click',()=>{
        accordion.querySelector('.minus').classList.toggle('passive');
        accordion.querySelector('.plus').classList.toggle('passive');
        accordion.querySelector('.Text').classList.toggle('passive');
    });
});
