const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
})

// transition menu btn
document.querySelector(".navigation-items").style.transition = "all 5s ease-in-out";



// Function to handle the auto-slide
function autoHeroSlide() {
  const images = document.querySelectorAll(".img-slide");
  const contents = document.querySelectorAll(".content");

  let activeImageIndex = 0;

  function showSlide(index) {
    for (let i = 0; i < images.length; i++) {
      images[i].classList.remove("active");
      contents[i].classList.remove("active");
    }

    images[index].classList.add("active");
    contents[index].classList.add("active");
  }

  function nextSlide() {
    activeImageIndex = (activeImageIndex + 1) % images.length;
    showSlide(activeImageIndex);
  }

  // Initial slide
  showSlide(activeImageIndex);

  // Auto-slide interval (change slide every 5 seconds)
  setInterval(nextSlide, 5000);
}

// Call the autoSlide function when the DOM is ready
document.addEventListener("DOMContentLoaded", autoHeroSlide);



// CLIENTS
const carousel = document.querySelector(".carousel"),
firstImg = carousel.querySelectorAll("img")[0],
arrowIcons = document.querySelectorAll(".wrapper i");

let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;

const showHideIcons = () => {
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth;
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
    
}

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImg.clientWidth + 14;
        carousel.scrollLeft += icon.id  == "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(), 60);
    });
});

const autoSlide = () => {
    if(carousel.scrollLeft == (carousel.scrollWidth - carousel.clientWidth)) return;

    positionDiff = Math.abs(positionDiff)
    let firstImgWidth = firstImg.clientWidth + 14;
    let valDifference = firstImgWidth - positionDiff;

    if(carousel.scrollLeft > prevScrollLeft) {
        return carousel.scrollLeft += positionDiff > firstImgWidth / 4 ? valDifference : positionDiff
    } 
    carousel.scrollLeft -= positionDiff > firstImgWidth / 4 ? valDifference : -positionDiff;

}

const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if(!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    carousel.classList.add("dragging")
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
}

const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging");
    
    if(!isDragging) return;
    isDragging = false;
    autoSlide();
}


carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);

carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);

carousel.addEventListener("mouseup", dragStop);
carousel.addEventListener("mouseleave", dragStop);
carousel.addEventListener("touchend", dragStop);



// BACK ON TOP
var offset = 300, // browser window scroll (in pixels) after which the "back to top" link is shown
offsetOpacity = 1200, //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
scrollDuration = 700;

// ***************




    window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})





// 
// var sliderNav = function(manual) {
//     btns.forEach((btn) => {
//     btn.classList.remove("active");
//     });
    
//     slides.forEach((slide) => {
//     slide.classList.remove("active");
//     });
    
//     contents.forEach((content) => {
//     content.classList.remove("active");
//     });

//     btns[manual].classList.add("active");
//     slides[manual].classList.add("active");
//     contents[manual].classList.add("active");
// }

//     btns.forEach((btn, i) => {
//         btn.addEventListener("click", () => {
//             sliderNav(i);
//         }); 
//     });




