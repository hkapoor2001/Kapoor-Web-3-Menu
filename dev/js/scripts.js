import { burgerTL } from "./burgeranimation";
import { MenuAnimation } from "./menuanimation";
import { displayWindowSize } from "./mobileresizing";
import {scrollPage} from "./pageScroll";



var burgerButton = document.querySelector("#burger");

let navButtons = document.querySelectorAll(".nav-btns");

let CanISeeMenu = false;
function openclosemenu(){
    if(CanISeeMenu === false){
        burgerTL.play();
        MenuAnimation.play();
        CanISeeMenu = true;
    }
    else{
        burgerTL.reverse();
        MenuAnimation.reverse();
        CanISeeMenu = false;
    }
}
burgerButton.addEventListener("click", openclosemenu);


for (const button of navButtons){
    button.addEventListener("click", checkScrolling);
    button.addEventListener("click", openclosemenu);
}

function checkScrolling(e) {
    const indexValue = [].indexOf.call(navButtons, e.target)
    if (indexValue != -1) {
        scrollPage(indexValue);
    }
}

window.addEventListener("resize", displayWindowSize);
window.addEventListener('load', displayWindowSize); 