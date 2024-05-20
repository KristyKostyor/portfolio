
let move = 22;
gsap.to(".skill", {ease:"bounce", duration:2, stagger: 0.8, delay: 1.5, repeat:-1, y:function (i) {
    if (i%2 === 1) {
        return move
    }
    else {
        return -move
    }
} })

