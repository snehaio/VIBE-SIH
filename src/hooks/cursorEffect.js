function cursorEffect() {
    var cursor = document.querySelector("#cursor");
    var locoScrollContainer = document.querySelector("[data-scroll-container]");
    var cards = document.querySelectorAll(".card"); // Select all card elements
  
    // Update cursor position based on Locomotive Scroll
    locoScrollContainer.addEventListener("mousemove", function (dets) {
      gsap.to("#cursor", {
        ease: "power1.out",
        duration: 0.5,
        x: dets.clientX,
        y: dets.clientY + locoScrollContainer.scrollTop, 
      });
    });
  
    locoScrollContainer.addEventListener("mouseenter", function () {
      gsap.to("#cursor", {
        scale: 1,
        opacity: 1,
      });
    });
  
    locoScrollContainer.addEventListener("mouseleave", function () {
      gsap.to("#cursor", {
        scale: 0,
        opacity: 0,
      });
    });
  
    // Add hover effect for cards
    cards.forEach((card) => {
      card.addEventListener("mouseenter", function () {
        gsap.to("#cursor", {
          scale: 1.6, 
          backgroundColor: "#ff6347", 
        });
      });
  
      card.addEventListener("mouseleave", function () {
        gsap.to("#cursor", {
          scale: 1, //normal size and color
          backgroundColor: "#6600a578", 
          duration: 0.3,
        });
      });
    });
  }
  
  export default cursorEffect;
  