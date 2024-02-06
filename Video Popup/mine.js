const buton=document.querySelector('.buton');
const videoContainer=document.querySelector('.videoContainer');
const close=document.querySelector('.close');
const video=document.querySelector('video');


buton.addEventListener('click',()=>{
  videoContainer.classList.remove('active');
})

close.addEventListener('click',()=>{
  videoContainer.classList.add('active');
  video.pause();
  video.currentTime=0;
})

