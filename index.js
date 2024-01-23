var tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#herotwo",
        start: "10% 82%",
        end: "50% 50%",
        scrub: true,
        // markers: true,
    }
})
tl.to(".fanta", {
    top: "120%",
    left: "0%"
})


tl.to(".orange", {
    top: "160%",
    left: "23%"
}, 'orange')

tl.to(".orangeleaf", {
    width: "15%",
    top: "160%",
    right: "13%"
}, 'orange')

tl.to(".leaf", {
    width: "15%",
    top: "110%",
    left: "75%",
    rotate: "180deg",
    right: "13%"
}, 'orange')


var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: "#herothree",
        start: "10% 82%",
        end: "20% 50%",
        scrub: true,
        markers: true,
    }
})
tl2.from(".pepsi", {
    rotate: "-90deg",
    left: "-100%",
    top: "110%"
})

tl2.from(".coca", {
    rotate: "90deg",
    right: "50%",
    top: "110%"
})

tl2.to(".fanta", {
    top: "220%",
    left: "30%",

}, 'orange')

tl.to(".leaf", {
    // width: "15%",
    top: "110%",
    left: "75%",
    // rotate: "180deg",

}, 'orange')