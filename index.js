var tl=gsap.timeline()

tl.from(".nav>h1, .nav a, .nav i",{
    opacity:0,
    y:30,
    stagger:.1,
}).from(".container>h1,.container h2,.but",{
    opacity:0,
    x:-100,
    stagger:.5,

})

gsap.from(".second h1,.second p,second,.second button",{
    opacity:0,
    y:-60,
    stagger:1,
    markers:true,
    scrollTrigger:{
        trigger:".second",
        scroller:"body",
        // markers:true,
        start:"top 20%",
        // end:"top 30%",
        scrup:true,
    }
})
gsap.from(".divtext>h1,.divtext>p,.divtext>button",{
    opacity:0,
    x:50,
    stagger:1,
    markers:true,
    scrollTrigger:{
        trigger:".divtext>h1,.divtext>p ",
        scroller:"body",
        // markers:true,
        start:"top 40%",
        // end:"top 30%",
        scrup:true,
    }
})


const button = document.querySelector(".but button")
button.addEventListener("click",function(){
    button.style.backgroundColor="rgb(238, 181, 74)"
    button.innerHTML="book more"
    button.style.color="black"


})

const second =document.querySelector(".second button");
second.addEventListener("click",function(){
    second.style.backgroundColor="orange";
    second.style.color="black";
    second.innerHTML="FOLLOWING";
})


