// function animateButtonOut(){
//     var element = document.getElementById('popupBox');
//     element.classList.add('scale-out-center');
//     setTimeout(() => {
//         element.classList.remove('scale-out-center');
//       }, "1000");
// }

// function animateButtonIn(){
//     var element = document.getElementById('popupBox');
//     button.classList.add('scale-in-center');
//     setTimeout(() => {
//         element.classList.remove('scale-in-center');
//       }, "1000");
// }

// function animateBoxOut(){
//     var element = document.getElementById('popupBox');
//     element.classList.add('scale-out-center');
//     setTimeout(() => {
//         element.classList.remove('scale-out-center');
//       }, "1000");
// }

// function animateBoxIn(){
//     var element = document.getElementById('popupBox');
//     button.classList.add('scale-in-center');
//     setTimeout(() => {
//         element.classList.remove('scale-in-center');
//       }, "1000");
// }

TweenLite.set(".SlideModalBottom", { autoAlpha: 0, y: 50 });
TweenLite.set(".modalOverlay", { autoAlpha: 0 });

var quickLinksTradeBTN = document.getElementById("quickLinksTradeBTN");

quickLinksTradeBTN.onclick = function() {
  
  var rect = this.getBoundingClientRect();
  TweenMax.set(".modalOverlay", {
    x: rect.left,
    y: rect.top,
    height: rect.height,
    width: rect.width
  });

  var tl = new TimelineMax();

  tl.to(".modalOverlay", 0.3, {
    height: window.innerHeight,
    width: window.innerWidth,
    x: 0,
    y: 0,
    autoAlpha: 1
  });

  tl.to(".SlideModalBottom", 0.5, {
    autoAlpha: 1,
    y: 0,
    ease: Power1.easeInOut
  });

  SlideModalBottomToggle = true;

  var modelBottomLabel = document.getElementById("modelBottomLabel");
  modelBottomLabel.innerHTML = "Modal Content Here";
};

modalOverlay1.onclick = function() {
  if (SlideModalBottomToggle == true) {
    TweenMax.to(".SlideNavLeft", 0.5, { x: 0, ease: Power1.easeInOut });

    TweenLite.to(".SlideNavRight", 0.5, { x: 0, ease: Power1.easeInOut });

    TweenLite.to(".SlideModalBottom", 0.4, {
      autoAlpha: 0,
      y: 50,
      ease: Power1.easeInOut
    });

    TweenLite.to(".modalOverlay", 0.5, {
      autoAlpha: 0,
      ease: Power1.easeInOut
    });

    slideModalBottom = false;
  } else {
  }
};