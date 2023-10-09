// navbar
let menubar = document.getElementById('navbarmenu');

function opennav(){
    menubar.style.right="0";
}
function closenav(){
    menubar.style.right="-60%";
}
function removesidebar(){
   
}


// about

let tablinks = document.getElementsByClassName('detail'); 
let tabtexts = document.getElementsByClassName('about-text');  

function opentab(nametab) {
    for(tablink of tablinks) {
        tablink.classList.remove('active-link')
    }
    for(tabtext of tabtexts) {
        tabtext.classList.remove('active-text')
    }
   
      event.currentTarget.classList.add('active-link');
      document.getElementById(nametab).classList.add('active-text');
}


// portfolio