gsap.from("#page2 h1", {
    opacity: 0,
    x: 500,
    duration: 0.5,
    delay:0.5,
    scrollTrigger: {
        trigger: "#page2 h1",
        scroller:"body",
        markers: true,
        start: "top 50%"
    }
})
gsap.from("#page2 h2", {
    opacity: 0,
    x: -500,
    duration: 0.5,
    delay:0.5,
      scrollTrigger: {
        trigger: "#page2 h2",
        scroller:"body",
        markers: true,
        start: "top 50%"
    }
})