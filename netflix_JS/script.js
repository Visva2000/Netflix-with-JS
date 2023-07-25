const button = document.querySelectorAll("[id='title']");
const text = document.querySelectorAll("[id='text']");
const symbol = document.querySelectorAll("[id='symbol']");


for(let i=0;i<button.length;i++){
   button[i].addEventListener("click",()=>{
      text[i].classList.toggle("toggle")
      button[i].classList.toggle("buttontoggle")
    //   text[i].style.marginBottom ="10px";
    symbol[i].classList.toggle("symbolRotate")
   
   })

}
