const setbtn = document.getElementById("set-text");
const clearbtn = document.getElementById("clear-text");
const txtarea = document.querySelector("#story");
const div = document.querySelector(".container");

const para = document.createElement('p');
   para.textContent = "Name : Chota Don";

// const h = document.querySelector('h1');
// h.style.color = "red";

// 
// 

setbtn.addEventListener('click',()=>{
   //txtarea.textContent = "I am learning DoM manupulation";
   
   div.appendChild(para);

});

clearbtn.addEventListener('click',()=>{
    // txtarea.textContent = " ";

    div.removeChild(para);

});
