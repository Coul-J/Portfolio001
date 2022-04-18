
gsap.registerPlugin(ScrollTrigger);

var sideText = $ (".rotate")
var responsive = $ (".responsive")
var mainText = $ (".graphic-designer")
var navAnimate = $ (".nav-text")
var fadeIn = $ (".main_background")
var text1 = $ (".hi")
var text2 = $ (".info")
var upDown = $ (".updown")
var inSide = $ (".inner")
var portfolio = $ (".parallex_text")
var whatIDo = $ ("._text2")
var slides = $ (".top")
var slides_2 = $ (".top2")
var namE = $ (".address")
var contextImage = $ (".context_image")
var contextText = $ (".c_text")
var socialLinks = $ (".social-links")
var wiD = $ (".wid")
var words = $ (".words")


gsap.from(socialLinks,{
    y: -250,
    opacity: -25,
    duration: 2,
    delay: 0.5,
})
gsap.from( namE, {
   opacity: 0,
   scale: 1.1,
   duration: 2,
})

gsap.to(slides_2, {
   // opacity: 0,
   x: 4400,
   duration: 180,
   repeat: -1,
})
gsap.to(slides, {
   // opacity: 0,
   x: -4400,
   duration: 180,
   repeat: -1,
})


gsap.from( words, {
    scrollTrigger: {
        trigger:".words",

    },
    y: -80,
    duration: 1.5,
    opacity: 0
});
gsap.from( wiD, {
    scrollTrigger: {
        trigger:".wid",
        end:"+=1000",
        start:"top center",
    },
    y: -40,
    duration: 1,
    opacity: 0
});
gsap.from(contextText, {
    scrollTrigger: {
        trigger:".c_text",
        end:"+=1000",
        start:"top center",
    },
    x: 40,
    duration: 1,
    opacity: 0
});
gsap.from(contextImage, {
    scrollTrigger: {
        trigger:".context_image",
        end:"+=1000",
        start:"top center",
    },
    x: -40,
    duration: 1,
    opacity: 0
});

gsap.to(portfolio,{
    scrollTrigger: {
        trigger:".parallex_text",
        end:"+=800",
        start:"top center",
        
    },
    x: 100,
    duration: 2,

})
gsap.to(portfolio, {
    scrollTrigger: {
        trigger:".parallex_text",
        end:"+=800",
        start:"top center",
        scrub: true,
        
    },
    x: 500,
});
gsap.to(whatIDo, {
    scrollTrigger: {
        trigger:"._text2",
        end:"+=1000",
        start:"top end",
        markers:true,

    },
    x: 800,
    duration: 3,
    ease: "expo.inOut"
});

gsap.from(upDown,{
    opacity: 0,
    y: 20,
    duration: 1.5,
    delay: 3,
    ease: "elastic.out(1.2, 0.2)",
    repeat: -1
})
gsap.from(text2,{
    opacity: 0,
    y: -20,
    duration: 1.5,
    delay: 4.5,
    ease: "expo.inOut"
})
gsap.from(text1,{
    opacity: 0,
    y: -50,
    duration: 1,
    delay: 3.5,
    ease: "expo.inOut"
})
gsap.from(fadeIn,{
    z: 180,
    opacity: 0,
    delay: 1,
    duration: 3,
    ease: "expo.inOut"
})
gsap.from(navAnimate,{
    y: -250,
    opacity: -25,
    duration: 2,
    delay: 0.5,
})


gsap.from(".graphic-designer", {
    scrollTrigger: {
        trigger:".graphic-designer",
        end:"bottom+=200%",
        start:"top center",
        scrub: true,
    },
    x: 1000,
    y: -1000,
    duration: 3,
    
    // ease: "back.out(1.7)"
});
gsap.from(".graphic-designer",{
    x: 1800,
    y: -1800,
    duration: 3,
    ease: "back.out(2)"
})

gsap.to(sideText ,{
    // opacity: 0,
    y: -5000,
    duration: 240,
    repeat: -1,
})
gsap.to(responsive ,{
    // opacity: 0,
    x: -5000,
    duration: 240,
    repeat: -1,
})

gsap.registerPlugin(ScrollTrigger);

var container = $('.wwc');
var boxes = $('.boxes_holder');


gsap.to(boxes, {
  x: () => { return -(container[0].scrollWidth - document.documentElement.clientWidth) + "px" },
  ease: "none",
  scrollTrigger: {
    trigger: boxes,
    start: () => "center center",
    end: () => { return "+=" + container[0].scrollWidth },
    scrub: true,
    pin: '.wwc',
    anticipatePin: 1
  },


});



