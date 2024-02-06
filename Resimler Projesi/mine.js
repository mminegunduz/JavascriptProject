

const count=30;
const apiKey='v1C3sVIntQsp9bPfIDevlLc2krL7biTIWfbSt2drZGo'
const apiUrl=`https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

const imageContainer= document.getElementById('imageDiv');
const loader= document.getElementById('loading');


let imagesLoaded=0;
let totalImages=0;
let imagesArray=[];


getImages();
 async function getImages(){
  try{

     const response= await fetch(apiUrl);
     imagesArray=await response.json();
     displayImages();

  }
  catch(errror) {}

  function displayImages() {
    imagesLoaded=0;
    totalImages=imagesArray.length;
    imagesArray.forEach((image)=>{
      const item=document.createElement('a')
      item.setAttribute('href',image.urls.regular)

      const img=document.createElement('img');
      img.setAttribute('src',image.urls.regular);
      img.setAttribute('alt',image.alt_dscription);

      img.addEventListener('load',imageLoaded)

      item.appendChild(img);
      imageContainer.appendChild(item);
    });
  }
    function imageLoaded() {
      imagesLoaded++;
      if(imagesLoaded===totalImages) {
        loader.hidden=true;
      }
    }
}




window.addEventListener('scroll',()=>{
  console.log('Tetiklendi');

  if(window.innerHeight+window.scrollY >= document.body.offsetHeight-1000){
    getImages();
  }
})



