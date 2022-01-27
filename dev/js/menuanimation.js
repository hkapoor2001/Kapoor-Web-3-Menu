import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";

export const menuTL = gsap.timeline({paused:true})
gsap.registerPlugin(DrawSVGPlugin, GSDevTools);

gsap.set(".navdivclass", {x: 0})

function menu(){
    const tl = gsap.timeline();
    tl.to(".navdivclass",{x:100, stagger:.1})
    return tl;
}


menuTL.add(menu)