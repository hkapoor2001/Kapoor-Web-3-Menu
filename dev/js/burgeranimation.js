import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";

export const burgerTL = new gsap.timeline({paused:true})
gsap.registerPlugin(DrawSVGPlugin, GSDevTools);

const burgerout = new gsap.timeline();
    burgerout.to(".burgerlines",{drawSVG: "0", ease:"none", duration:.02})
const xlines = new gsap.timeline();
    xlines.from(".xline",{drawSVG: "50% 50%", ease:"none", duration: .2})

burgerTL.add(burgerout)
.add (xlines)