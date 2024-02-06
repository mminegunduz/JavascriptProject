const buton=document.getElementById('buton');
const joke=document.getElementById('joke');

const apiKey= `pJ0yl+f5P9MTmKWakAKNoQ==tq0to49qT95CEzPy`;
const apiURl=`
https://api.api-ninjas.com/v1/dadjokes?limit=1`

const options={
  method: 'GET',
  headers: {
    'X-Api-Key':apiKey,
  },
};


 async function getJoke(){


  try{
    joke.textContent= 'Updating...';
    buton.textContent='Loading...';
    buton.disabled= true;
  
  
   const response= await fetch(apiURl,options);
   const data = await response.json();
   
   buton.disabled= false;
   buton.textContent= 'Tell me a joke';
   joke.textContent = data[0].joke;
  
  }
   catch(error) {
     joke.textContent="Try again later";
     buton.disabled= false;
     buton.textContent= 'Tell me a joke';
  }
}

  


buton.addEventListener('click', getJoke);