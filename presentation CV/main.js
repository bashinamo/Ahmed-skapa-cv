const workE = document.querySelector('.workE');
const education = document.querySelector('.ed_name');
//Funktion för att hämta data från JSON filen (getInfo)
async function getdata(){

    //anropar json filen 
    const pickup = await fetch ("gerInfo.json");
    const data = await pickup.json();

    // skapar 2 arrayer med data (Education, work)
    const wrk_arr = data[0].work[0]
    const ed_arr = data[0].education[0]


    // fyller i Work delen med info från array
    if(document.querySelector('title').innerHTML == 'About') {
      workE.textContent = wrk_arr.h3Json;
      transport.textContent = wrk_arr.liJson;
      tele2.textContent = wrk_arr.li2Json;
      egen.textContent = wrk_arr.li3Json;
      education.textContent = ed_arr.h3Json


      li_.textContent = ed_arr.li
      p_.textContent = ed_arr.p
      li1.textContent = ed_arr.li1
      p1.textContent = ed_arr.p1
      li2.textContent = ed_arr.li2
      p2.textContent = ed_arr.p2

      li3.textContent = ed_arr.li3
      p3.textContent = ed_arr.p3
    }
    
    
    //fylla på education från array
    

}
getdata();

let requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch("https://api.github.com/users/bashinamo/repos", requestOptions)
  .then(response => response.json())
  .then(result => {
    let mina_projekt = result;
    
    // console.log(mina_projekt[0].name)
    // console.log(mina_projekt[1].description)
    // console.log(result)
  })
  .catch(error => console.log('error', error));
//Skiftar mellan dar/Light mode 
document.addEventListener('DOMContentLoaded', function () {
    const modeToggle = document.getElementById('modeToggle');

    if(document.querySelector('title').innerHTML == 'About')
    
    modeToggle.addEventListener('change', function () {
        if (modeToggle.checked) {
            document.body.classList.add('dark-mode');
            document.body.classList.remove('light-mode');
        } else {
            document.body.classList.remove('dark-mode');
            document.body.classList.add('light-mode');
        }
    });
});


//skapa modal för education 
const btn = document.getElementById("modal_btn");
const modal = document.getElementById("myModal");
const click = document.getElementsByClassName("close")[0];

// Öppna modal vid klick
if(document.querySelector('title').innerHTML == 'About')
  btn.onclick = function() {
    modal.style.display = "block";
  }
  
 // När användaren klickar på (x), stäng modalen
  if(document.querySelector('title').innerHTML == 'About')
  click.onclick = function() {
    modal.style.display = "none";
  }
  
  // När användaren klickar någonstans utanför modalen, stäng den
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }


  // const btnMe = document.getElementById('btnMe');
  // const close = document.getElementById('stäng');
  // const modall = document.getElementById('myModal');

  // btnMe.onclick = function(){
  //   modall.style.display = 'block';
  // }

  // click.onclick = function() {
  //   modall.style.display = "none";
  // }

  // window.onclick = function(event) {
  //  (event.target == modal) {
  //     modal.style.display = "none";
  //   }
  // }







    



  



































  // const btn1 = document.getElementById("btnMe");
  // const div1 = document.getElementById("div1");
  // const modell = document.getElementById('modell');


  // btn1.addEventListener('click', function(){
  //   btn1.click = function() {
  //       modell.style.display = "block";
  //     }

  //     click.onclick = function() {
  //       modall.style.display = "none";
  //     }

  //     window.onclick = function(event) {
  //       if (event.target == modall) {
  //         modall.style.display = "none";
  //       }
  //     }
      
  //   }


    















