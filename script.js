// Ham burger for responsive navbar
document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('responsive-nav');
    const nav = document.querySelector('nav');
    let cancel = document.getElementById("responsive-nav-cancel");

    menuIcon.addEventListener('click', function () {
        // Toggle the visibility of the navigation menu
        nav.style.display = (nav.style.display === 'block') ? 'none' : 'block';
        cancel.style.display = "block";
    });
    cancel.addEventListener('click', function () {
        nav.style.display = "none"
        cancel.style.display = "none";
    });
        
});

// Home page working
var headersToAnimate = ["Responsive Design Skills", "Problem-Solving Capability", "Effective Communication", "Business Understanding", "Timely Delivery", "Understanding of User Experience", "Cost-Effective Solutions"];
var startReversAnimationAfter = 1200; //ms

function reverseAnimation(headerIndex) {
    var i = headersToAnimate[headerIndex].length - 1, delay = 0;
    for (; i >= 0; i--, delay++) {
        let string = headersToAnimate[headerIndex].substr(0, i);
        setTimeout('document.getElementById("Header").innerHTML = \'' + string + '\';', 100 * delay);
    }

    setTimeout(function () { animateHeaders(headerIndex + 1) }, 100 * delay + startReversAnimationAfter);
}

function animateHeaders(headerIndex) {
    var i = 0;
    if (headerIndex == headersToAnimate.length) {
        headerIndex = 0;
    }
    for (; i < headersToAnimate[headerIndex].length; i++) {
        let string = headersToAnimate[headerIndex][i]
        setTimeout('document.getElementById("Header").innerHTML += \'' + string + '\';', 100 * i);
    }
    setTimeout(function () { reverseAnimation(headerIndex) }, 100 * i + startReversAnimationAfter);
}
animateHeaders(0)

// View More content of About Section
let viewMore = document.getElementById("view-more");
let viewLess = document.getElementById("view-less");
let hideShow = document.getElementById("hide-show");

viewMore.addEventListener("click", ()=>{
    viewMore.style.display = "none"
    viewLess.style.display = "initial"
    hideShow.style.display = "flex"

})
viewLess.addEventListener("click", ()=>{
    viewLess.style.display = "none"
    viewMore.style.display = "initial"
    hideShow.style.display = "none"
})