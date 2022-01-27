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

function menu(){
    const tl = gsap.timeline();
    tl.from(".menu",{x:8000, stagger:.1})
    return tl;
}


burgerTL.add(burgerout)
.add(menu)