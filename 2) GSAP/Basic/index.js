var tl = gsap.timeline()

tl.from("h2", {
    y:-30,
    duration: 0.5,
    opacity: 0,
    delay: 0.3
})
tl.from("h4", {
    y:-30,
    duration: 0.5,
    opacity: 0,
    delay: 0.3,
    stagger: 0.3
})

tl.from("h1", {
    y:30,
    duration: 0.4,
    opacity: 0,
    scale:0.2
})