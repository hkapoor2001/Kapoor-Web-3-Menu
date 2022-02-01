import { gsap } from "gsap";

export function displayWindowSize(){

    let menu = document.querySelector("#nav");

    let menuWidth = menu.offsetWidth;

    if(document.documentElement.clientWidth <= 1024){
        gsap.set("#nav",{x:menuWidth});
    }
    else{
        gsap.set("#nav",{x:0});
    }
}