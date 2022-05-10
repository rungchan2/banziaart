const squares = document.querySelectorAll('.home .disapear');

window.addEventListener('scroll', _.throttle(function () {
    console.log(window.scrollY)
    if(window.scrollY > 100){
        gsap.to(squares, .3, {
            opacity: 0,
            display: 'none'
        })  
    }
    if (window.scrollY < 100) {
        gsap.to(squares, .3, {
            opacity: 1,
            display: 'block'
        })
    }
    ;}, 200));



const spyEls = document.querySelectorAll('.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl,
      triggerHook: .1
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});



const fadeEls = document.querySelectorAll('.home .squares');
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7,
    opacity: 1
  })
});
