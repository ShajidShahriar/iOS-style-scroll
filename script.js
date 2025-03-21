
gsap.registerPlugin(ScrollTrigger);
gsap.to(".scrollable-list",{
    ScrollTrigger:{
        trigger:".scrollable-list",
        start:"top top",
        end:"bottom bottom",
        scrub:1
        
    }
})

