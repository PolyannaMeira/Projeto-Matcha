var tl = gsap.timeline({scrollTrigger:{
    trigger: ".two",
    start: "0% 95%",
    end: "70% 50%",
    scrub: true,
    // markers: true,
}})

tl.to("#matcha-latte",{
    top: "160%",
    left: "20%"
}, 'matcha')

tl.to("#leaf",{
    top:"120%",
    rotate: "180deg",
    left: "80%"
}, 'matcha')


var tl2 = gsap.timeline({scrollTrigger:{
    trigger: ".three",
    start: "0% 95%",
    end: "20% 50%",
    scrub: true,
    // markers: true,
}})

tl2.from(".plantation1",{
    rotate: "-90deg",
    left: "-100%",
    top: "110%"
}, 'ca')
tl2.from("#matcha-tea",{
    rotate: "-90deg",
    top: "110%",
    left: "-100%",
}, 'ca')

tl2.from(".plantation2",{
    rotate: "180deg",
    left: "100%",
    top: "110%"
}, 'ca')

tl2.from("#matcha-ice-cream",{
    rotate: "90deg",
    top: "230%",
    left: "100%",
}, 'ca')

tl2.from(".plantation3",{
    rotate: "180deg",
    left: "100%",
    top: "110%"
}, 'ca')


tl2.to("#matcha-latte",{
    width:"12.5%",
    
    top: "240%",
    left: "50%",
}, 'ca')