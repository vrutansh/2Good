const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


//for the h1 in pg1
function loadingH1(){
    gsap.from("#page1 h1",{
        y:100,
        opacity:0,
        delay:0.4,
        duration:0.9,
        stagger:0.3
    })

    gsap.from("#page1 #video-container",{
        scale:0.9,
        opacity:0,
        delay:1.3,
        duration:0.5,
        
    })
}


//for cursor on the video 
function vidAnimation(){
    var video = document.querySelector("#video-container")
    var play = document.querySelector("#play")

video.addEventListener("mouseenter",function(){
    gsap.to(play,{
        scale:1,
        opacity:1
    })
})


video.addEventListener("mouseleave",function(){
    gsap.to(play,{
        scale:0,
        opacity:0
    })
})

video.addEventListener("mousemove",function(dets){
    gsap.to(play,{
        left:dets.x-70 + "px",
        top: dets.y-80 + "px"
    })
})
}


//for the pg3 elems animation 
function pg3Animation(){
    document.addEventListener("mousemove",function(dets){
        gsap.to("#cursor",{
            left: dets.x,
            top: dets.y
        })
    })
    
    var child = document.querySelectorAll(".child")
    
    child.forEach(function(elem){
          elem.addEventListener("mouseenter",function(){
            gsap.to("#cursor",{
                transform:'translate(-50%,-50%) scale(1)',
        
            });
        });    
        
        elem.addEventListener("mouseleave",function(){
            gsap.to("#cursor",{
                transform:'translate(-50%,-50%) scale(0)',
        
            });
        });
    });
    
}


loadingH1()
vidAnimation()
pg3Animation()
