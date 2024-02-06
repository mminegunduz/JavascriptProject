const nexticon=document.querySelector('.next');
const previcon=document.querySelector('.prev');
const ImageContainer=document.querySelector('.ImageContainer');
const imgs=document.querySelectorAll('img');

let timeout;
let currentImg= 1;

previcon.addEventListener('click',()=> {
  currentImg--;
  clearTimeout(timeout);
  updateImg();
});


nexticon.addEventListener('click',()=> {
  currentImg++;
  clearTimeout(timeout);
  updateImg();
});


function updateImg() {
  if(currentImg > imgs.length){
    currentImg =1;
  }
  else if(currentImg < 1){
    currentImg =imgs.length;
  }
  ImageContainer.style.transform= `translateX(-${
    (currentImg - 1)*700}px )`
  timeout= setTimeout(()=>{
  currentImg++;
  updateImg();
  },4000)
}

