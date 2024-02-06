const buton=document.querySelector('.buton');
const input= document.querySelector('input');
const faCopy=document.querySelector('.fa-copy');
const alert=document.querySelector('.alert');


faCopy.addEventListener('click',()=>{
  copyPassword();
})

buton.addEventListener('click',()=>{
  createPassword();
})

function createPassword(){
  const passwordLength=14;
  const characters=  '0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  let password='';
  for(let index=0; index<passwordLength;index++)
  {
    const randomNum=Math.floor (Math.random()*characters.length)
    password+=characters[randomNum];
  }
  input.value=password;

}


function copyPassword() {
  if(input.value){
  input.select();
  navigator.clipboard.writeText(input.value);
  alert.classList.remove('active');
  setTimeout(()=>{
    alert.classList.add('active');
  },2000);
 }
}