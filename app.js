
tl = gsap.timeline();

tl.from("#page1 video", {
    opacity: 0,
    duration: 1.5,
    delay: 1,
})

tl.from("#page1 svg", {
    y: "400",
    duration: .3,
    ease: "easeIn"
})

tl.from(".line span",{
    y: "100",
    duration:.6,
    ease: "easeOut",
    stagger:.1
})

tl.from("#page1 a", {
    opacity: 0,
    duration: .4,
    ease: "easeOut"
}, "featuredProject")
tl.from("#page1 a h3",{
    opacity:0,
    y: "10",
    duration:.6,
    ease: "easeOut"
},"featuredProject" )
tl.from("#page1 a h2",{
    opacity:0,
    y: "25",
    duration:.7,
    ease: "easeOut"
}, "featuredProject")



tl.from("nav #left-part", {
    x: "-100",
    opacity: 0,
    duration: .5,
    ease: "easeOut"
}, "navParts")
tl.from("nav #right-part", {
    x: "100",
    opacity: 0,
    duration: .5,
    ease: "easeOut"
}, "navParts")

tl.from("#page1 h4",{
    opacity:0,
    duration:.35,
    ease: "easeOut"
})

tl.to("body",{
  overflowY: "auto"
})
let navMenuOpen = false;
document.querySelector("#menu")
.addEventListener("click", () => {
    navMenuOpen = !navMenuOpen;
    
    
    tl = gsap.timeline()
    tl.to("#menu .right",{
        scale: 0,
        duration: 0.2,
        ease: "easeInOut"
    })
    document.querySelector("#menu .right").innerHTML = navMenuOpen ? `<i class="ri-close-line"></i>` : `<h3>•</h3>`
    tl.to("#menu .right", {
        scale: 1,
        duration: 0.2,
        ease: "easeInOut"
    })

    document.querySelectorAll("#center-nav a").forEach((item, index) => {
        gsap.to(item, {
            x: navMenuOpen ? `${-110*index}%` : "0"
            
        })
    });

});





document.querySelectorAll("nav .nav-item").forEach(item => {
    item.addEventListener("mouseenter", () => {
        gsap.to(item.querySelector(".left #item-text-wrapper"), {
            y: "-50%",
            duration: .3,
            ease: "easeInOut"
        });
    });
    item.addEventListener("mouseleave", () => {
        gsap.to(item.querySelector(".left #item-text-wrapper"), {
            y: "0",
            duration: .3,
            ease: "easeInOut"
        });
    });
});





gsap.to("#page2", {
  clipPath: "polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)",
  duration: 20,
  scrollTrigger: {
    trigger: "page1",
    scroller: "body",
    start: "top 0",
    end: "top -50%",
    scrub: 1.5,

  }
})

gsap.to("#page1", {
  display: "none",
  scrollTrigger: {
    trigger: "page2",
    scroller:"body",
    scrub:true
  }
})

gsap.to("#page1 a, #page1 #heading",{
  y: "-900",
  ease: "easeOut",
  scrollTrigger: {
    trigger: "page2",
    scroller:"body",
    scrub:1.5
  }
})

gsap.to("#page1 #footer-svg", {
  y: "900",
  ease: "easeOut",
  stagger: 1,
  scrollTrigger: {
    trigger: "page2",
    scroller:"body",
    scrub:1.5
  }
})






gsap.from("#top-nav", {
  
  opacity: 0,
  duration: .2,
  ease: "easeOut",
  scrollTrigger: {
    trigger: "page2",
    scrub: true,
  }
})




const cursor = document.querySelector('#cursor');
const projectDivs = document.querySelectorAll('.img-holder');
const detailText = document.querySelector(".detail-text")

let leftDetTextList = [
  "Sustainable Salons",
  "Peter Jackson",
  "Roblox"
]
let rightDetTextList = [
  "UI/UX/DESIGN DIRECTION/COMPONENTS LIBRARY",
  "UI/DESIGN DIRECTION/COMPONENTS LIBRARY",
  "UI/DESIGN DIRECTION/COMPONENTS LIBRARY"
]


function showCursor(event) {
  gsap.to(cursor, {
    scale:1,
    autoAlpha: 1, 
    display: 'block',
    x: event.clientX,
    y: event.clientY,
    duration: 0.45,
    ease: "easeInOut"
  });
}



function moveCursor(event) {
  gsap.to(cursor, {
    x: event.clientX,
    y: event.clientY,
    duration: .4
  });
}

function clickCursor(event){
    tl = gsap.timeline()
    tl.to(cursor, {scale:1.25, duration:.3, ease:"easeIn"})
    .to(cursor, {scale:1, duration:.3, ease:"easeOut" })
}




function moveText(event) {
    gsap.to(detailText, {
      y: event.clientY,
      duration: 0.1
    });
  }


function changeText(index){
  detailText.innerHTML = `
            <h3 class="left-text">${leftDetTextList[index]}</h3>
            <h3 class="right-text">
              ${rightDetTextList[index]}
            </h3>
  `
}


function showText() {
    gsap.to(detailText, {
        autoAlpha: 1,
        duration: 0.3
    });
  
}  
function hideText() {
    gsap.to(detailText, {
        autoAlpha: 0,
        duration: 0.3
    });
  
}  





projectDivs.forEach((item, index)=>{
  item.addEventListener('mouseenter',(event)=>{
    changeText(index);
    showText();
    showCursor(event);
})

item.addEventListener('mouseleave', () => {
  hideCursor();
  hideText();

});

item.addEventListener('click', clickCursor);


document.querySelector("#page2")
.addEventListener('mousemove', (event) => {
  moveCursor(event);
  moveText(event);
});
})






const timel = gsap.timeline({
  scrollTrigger: {
    trigger: "#page2",
    scroller: "body",
    start: "top 0",
    end: "+=600%",
    scrub: 2,
    pin: true,
  }
});

timel
  .fromTo("#img1", 
    { y: 800, scale: 0.3}, 
    { y: 0, scale: 1, duration: 1 },
    "first1"
  )
  .to("#img1", 
    { y: -800, scale: 0.3, duration: 1},
    "first2"
  )
  .fromTo("#img1 img",
    {scale:3.2},
    {scale:1,  duration: 1},
    "first1"
  )
  .to("#img1 img",
    {scale:3.2,  duration: 1},
    "first2"
  )

  .addLabel("second1", "-=1") 
  .fromTo("#img2", 
    { y: 800, scale: 0.3 }, 
    { y: 0, scale: 1, duration: 1},
    "second1"

  )
  .to("#img2", 
    { y: -800, scale: 0.3, duration: 1 },
    "second2"
  )
  .fromTo("#img2 img",
    {scale:3.2},
    {scale:1,  duration: 1},
    "second1"
  )
  .to("#img2 img",
    {scale:3.2,  duration: 1},
    "second2"
  )

  .addLabel("third1", "-=1")
  .fromTo("#img3", 
    { y: 800, scale: 0.3 }, 
    { y: 0, scale: 1, duration: 1 },
    "third1"
  )

  .fromTo("#img3 img",
    {scale:3.2},
    {scale:1,  duration: 1},
    "third1"
  )



document.querySelectorAll(".btn").forEach((elem, index)=>{
elem.addEventListener("mouseenter", () => {
  gsap.to(`#btn${index+1} #icon-bg`,{
    height: "80px",
    width: "200px",
  });

  gsap.to(`#btn${index+1} #text h3`,{
    y: "-100%",
  })

  gsap.to(`#btn${index+1} #icon i`,{
    x: "100%",
    duration: .2
  })
});
elem.addEventListener("mouseleave", () => {
  gsap.to(`#btn${index+1} #icon-bg`,{
    height: "1rem",
    width: "1rem",
  });

  gsap.to(`#btn${index+1} #text h3`,{
    y: "0",

  })

  gsap.to(`#btn${index+1} #icon i`,{
    x: "0%",
    duration: .2,
    ease: "easeInOut"
  })
  
})
});



gsap.to("body", {
  backgroundColor: "#EDEAED",
  scrollTrigger: {
    trigger: "#services",
    start: "top center",
    end: "bottom center",
    toggleActions: "play none none reverse"
  }
});


 


const imgList = [
  "media/image1.png",
  "media/image2.png",
  "media/image3.png",
  "media/image4.png",
  "media/image5.png",
]

const fgImg = document.querySelector("#fg_img");
const bgImg = document.querySelector("#bg_img");

document.querySelectorAll(".hover-text").forEach((elem, index)=>{  
  elem.addEventListener("mouseenter", () =>{


    

    gsap.to("#img-viewer",{
      y: index * 150 || 50,
    }
    )

  

    
    
    bgImg.style.backgroundImage = fgImg.style.backgroundImage;

    fgImg.style.backgroundImage = `url(${imgList[index]})`;
    gsap.fromTo("#fg_img",{
      scale:0,
    },
  {
    scale:1,
    duration: .5,
    ease: "back",
  })



    

  gsap.to(`.hover-text`, {
      height: "8rem",
      opacity: ".3",
      duration: .4,
      ease: "easeInOut"
    });
  
  gsap.to(`.hover-text h3`, {
      y: "0%",
      duration: .4,
      ease: "easeInOut"
    });
    
  gsap.to(`#hover-text${index+1}`, {
    height: "11rem",
    opacity: "1",
      duration: .4,
      ease: "easeInOut"
  })


  gsap.to(`#hover-text${index+1} h3`, {
    y: "-100%",
      duration: .4,
      ease: "easeInOut"
  });
  
});
});








gsap.from("#right-section h3", {
  x: "800",
  ease: "easeOut",
  stagger: .1,
  
  }
);


