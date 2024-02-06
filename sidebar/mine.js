const bars=document.querySelector('.bar');
const sidebar=document.querySelector('.sidebar')
const closingButton= document.querySelector('.close');

bars.addEventListener('click',() => {
    sidebar.classList.toggle('showSidebar');
})

closingButton.addEventListener('click', ()=>{
    sidebar.classList.remove('showSidebar');
})

