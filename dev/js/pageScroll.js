import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

let idArray = ["#nav1 #nav2 #nav3"]

export function scrollPage(index){
    gsap.to(window, {duration: 3, scrollTo:idArray[index]});
}