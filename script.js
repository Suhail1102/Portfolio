
// let text= document.querySelector(".text");

 
// setInterval(display,2000);

//  function display(){let strings=['Frontend','Seo Expert','Web Developer'];

//  strings.forEach((string)=>{
//     text.innerText=`${string}`;});}

// document.addEventListener('scroll',()=>{
// const header= document.getElementById('header');

// if(window.scrollY>0){
//     header.classList.add('scrolled');
// }
// else{
//     header.classList.remove('scrolled');
// }
// });

// ................................About...........................

var tablinks = document.getElementsByClassName('tab-links');
var tabcontents = document.getElementsByClassName('tab-contents');

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add('active-link');
    document.getElementById(tabname).classList.add("active-tab");
}
const navbar= document.getElementById('navbar')
const openbar= document.getElementsByClassName(('openbar'))

function openmenu(){
    navbar.style.right= "0";
    
}
function closemenu(){
    navbar.style.right= "-11rem";
}