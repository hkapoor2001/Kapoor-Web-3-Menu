
import { gsap } from "gsap";

export function displayWindowSize(){

    let menu = document.querySelector("#nav-container");
    let menuWidth = menu.offsetWidth;


   if(document.documentElement.clientWidth <= 1024){
    gsap.set("#nav-container",{x:menuWidth});
}
else{
      gsap.set("#nav-container",{x:0});
    }

}