

document.addEventListener("DOMContentLoaded", function () {
    var tl = gsap.timeline();
    tl.from(".page1 h1,.page1 .the,.page1 .course", {
        y: 90,
        opacity: 0,
        stagger: 0.4
    })
    gsap.from(".hero-img", {

        opacity: 0,
        duration: 0.8,
        delay: 1.2
    })


})
// gsap.from(" .hero-img img", {
//     y: -190,
//     // duration:1,
//     scrollTrigger: {
//         trigger: ".hero-img img",
//         scroller: "#main",
//         // markers:true,
//         start: "top 50%",
//         scrub: 1,
//         end: "bottom 100%"
//     }
// })
// gsap.to(" .hero-img img", {
//     y: 175,
//     // duration:1,
//     scrollTrigger: {
//         trigger: ".hero-img img",
//         scroller: "#main",
//         // markers:true,
//         start: "top 22%",
//         scrub: 1

//     }

// })
// gsap.to(".thirdsection .content .card", {
//     y: 290,
//     scrollTrigger: {
//         trigger: ".thirdsection .content .card",
//         scroller: "body",
//         start: "top 35%",

//         scrub: true

//     }
// })
// gsap.from(".thirdsection .content ", {
//     opacity: 0,
//     duration: 0.5,
//     stagger: 0.2,
//     scrollTrigger: {
//         trigger: ".thirdsection .content ",
//         scroller: "body",
//         start: "top 50%"

//     }
// })
// 9930506126
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
})

document.querySelectorAll(".sectionfive").forEach(function (e) {
    e.addEventListener("mouseenter", function () {

        gsap.to(".cursor", {
            transform: "translate(-50%,-50%) scale(1)",
        });
    });
    e.addEventListener("mouseleave", function () {
        gsap.to(".cursor", {
            transform: "translate(-50%,-50%) scale(0)",
        });
    });
});
gsap.to(".nav1 svg", {
    y: -82,
    duration: 0.5,

    scrollTrigger: {
        trigger: ".nav",
        scroller: "body",
        start: "top 0%",
        end: "top -5%",
        scrub: true
    }
}

);
gsap.to(" .nav2 .links", {
    y: -20,
    opacity: 0,
    duration: 0.5,
    scrollTrigger: {
        trigger: ".nav",
        scroller: "body",
        start: "top 0%",
        end: "top -5%",
        scrub: 1
    }
}

);




