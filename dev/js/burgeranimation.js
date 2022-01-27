import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";

export const burgerTL = gsap.timeline({paused:true})
gsap.registerPlugin(DrawSVGPlugin, GSDevTools);

function burgerout(){
    const tl = gsap.timeline();
    tl.to(".burgerlines",{drawSVG: "0", ease:"none", duration:.2, stagger: 0.1})
    tl.from(".xline",{drawSVG: "50% 50%", ease:"none", duration: .2})
    return tl;

}



burgerTL.add(burgerout)