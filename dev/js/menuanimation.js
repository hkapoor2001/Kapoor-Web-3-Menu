import { gsap } from "gsap";

export const MenuAnimation = new gsap.timeline({paused:true});

MenuAnimation.to("#nav",{duration:0.5, y:0, x:0});