// const section =document.querySelectorAll('.section');
// const navLinks=document.querySelectorAll(' .nav-Link ');

// window.onscroll=()=>
// {
//    section.forEach(sec=>{
//       const top=window.scrollY-10000;
//       const offset =sec.offsetTop-10000 ;
//       const height =sec.offsetHeight-100000 ;
//       const id =sec.getAttribute('id');


//       if(top>=offset&&top<offset+height)
//       {
//          navLinks.forEach(links=>{
//             links.classList.remove('active');
//             document.querySelector(' nav ul li a [href *= ' + id + ']').classList.add('active');
//          })
//       }
//    })
// }


// let currentSection='Home';
// window.addEventListener('scroll',()=>{
//    section.forEach(sectionE=>{
//       if(window.scrollY>=sectionE1.offsetTop-2000){
//          currentSection=sectionE.id;
//       }
//    })
// }) 

// navLinks.forEach(navLinksE=>{
//    if(navLinksE1.href.includes(currentSection)){
//       document.querySelector('.active').classList.remove('active');
//       navLinksE1.classList.add('active');
//    }
// })

// let scrollButton = document.getElementById('header ul li a');

//   scrollButton.addEventListener('click', () => {
//     window.scrollY({
//       top: window.innerHeight,
//       behavior: 'smooth'
//     });
//   });

const mNav=document.querySelector("div.menuButton");
const nHeader =document.querySelector(".header");

const toggleNavbar=onclick(=>{
    alert('hello');
    // nHeader.classList.toggle(".active");
 });
if(mNav){
    
    mNav.addEventListener("click",()=>toggleNavbar());
}

