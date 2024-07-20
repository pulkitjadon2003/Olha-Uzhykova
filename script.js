function locomotive() {
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

}

locomotive()


gsap.from("#nav",{
    y:-70,
    delay:.3
})
gsap.to("heads",{

})
gsap.from("#platform",{
    y:70,
    delay:.3
})
gsap.from("#ball img",{
    y:-350,
    opacity:0,
    delay:.7
})
gsap.from("#page1>h1",{
    opacity:0,
    delay:1,
    onUpdate:()=>{
        $('#page1>h1').textillate({ in: { effect: 'fadeInUp' } ,type:"word" });
    },
})


var tl =gsap.timeline({
    scrollTrigger:{
        trigger:"page1",
        scroller:"#main",
        // markers:true,
        start:"top -15%",
        end:"top -90%",
        scrub:2
        }
    },"vixen")

tl.to("#ball img",{    
    left:"110vw",
    top:"80vh",
    rotate:260,
    duration:3,
    display:"none"
},"vixen")


tl.to("#platform",{
    rotate:15 ,
    duration:.5
},"vixen")



tl.from("#page2-in>h1",{
    opacity:0,
    duration:.1,
  onUpdate:()=>{
    $('#page2-in>h1').textillate({ in: { effect: 'fadeInUp' } });
  }
},"vixen")

gsap.from("#page2-word h4,#page2-word p",{  
    opacity:0,
    y:50,
    delay:1,
    scrollTrigger:{
        trigger:"#page2-word h4, #page2-word p",
        scroller:"#main",
        // markers:true,
        start:"top 140%",
        end:"top 75%"
    },
    onStart:()=>{
        b= 100
    }
},"vixen")

gsap.to("#page2-circle .snake__text-path",{
    opacity:1,
    scrollTrigger:{
        trigger:"#page2-circle .snake__text-path",
        scroller:"#main",
        // markers:true,
        start:"top 40%"
    },
    onUpdate: snaker()
})
var b

function snaker(){
    var snake = document.querySelector("#page2-circle .snake__text-path")
    setInterval(() => {
        if(b>0) {
            console.log(snake.setAttribute("startOffset",`${b--}%`));
        }
    },22);
}

var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:"#page4",
        scroller:"#main",
        // markers:true,
        scrub:1,
        start:"top -20%",
        end:"top 50%",
    }
})



gsap.to("#smoke-ball",{
    y:60,
    scale:10,
    duration:1,
    scrollTrigger:{
        trigger:"#smoke-ball",
        scroller:"#main",
        scrub:4,
        start:"top 25%",
        end:"top -20%",
    }
})

tl2.from("#p5-left>h1",{
    opacity:0,
    delay:1,
    onUpdate:()=>{
        $('#p5-left>h1').textillate({ in: { effect: 'fadeInUp' } });
      }
})


var ach = document.querySelectorAll(".achievements")
ach.forEach((elem)=>{
    
    elem.addEventListener("mousemove",(dets)=>{
        console.log(elem.id)
        console.log(dets.offsetX);
        document.querySelector(`#${elem.id} #p5image`).style.left = `${dets.offsetX}px`
        document.querySelector(`#${elem.id} #p5image`).style.top =  `${dets.offsetY/10 -200}px`

    })

})


var logo = document.querySelector("#nav1")
    logo.addEventListener("mouseenter",()=>{
        logo.addEventListener("mousemove",(dets)=>{
            console.log(dets.x)
            logo.style.left = `${dets.offsetX/4}px`
            logo.style.top =  `${dets.offsetY/3}px`
        })
    })
    logo.addEventListener("mouseleave",()=>{
        logo.style.top = 0
        logo.style.left = 0

    })

    var h1s = document.querySelectorAll("#nav2 h4")
    h1s.forEach((elem)=>{
        elem.addEventListener("mousemove",(dets)=>{
            elem.style.left = `${dets.offsetX/12}px`
            elem.style.top =  `${dets.offsetY/12}px`
            elem.style.color = "#51733f"
        })
        elem.addEventListener("mouseleave",(dets)=>{
            elem.style.color = "#000"
            elem.style.left = 0
            elem.style.top =  0
        })
        
    
    })


    var btn = document.querySelector("#nav2 button")
    btn.addEventListener("mouseenter",()=>{
        btn.addEventListener("mousemove",(dets)=>{
            console.log(dets.x)
            btn.style.left = `${dets.offsetX/14}px`
            btn.style.top =  `${dets.offsetY/14}px`
        })
    })
    btn.addEventListener("mouseleave",()=>{
        btn.style.top = 0
        btn.style.left = 0

    })

    window.addEventListener("resize",()=>{
        location.reload()
    })

var flago = 0
document.querySelector("#options").addEventListener("click",()=>{

    var o1 = document.querySelector("#o1")
    var o2 = document.querySelector("#o2")
    
    if(flago==0){
        o1.style.top = "50%"
        o2.style.top = "50%"
        setTimeout(() => {
            o1.style.rotate = '45deg'
            o2.style.rotate = '-45deg'
        }, 100);
        flago = 1
    }else{
        setTimeout(() => {
            o1.style.top = "35%"
            o2.style.top = "60%"
        },100);

        o1.style.rotate = '0deg'
        o2.style.rotate = '0deg'
        flago=0

    }



})