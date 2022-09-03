
let lightimg= document.querySelector(".lightImg")

function switchTheme(){
    if(document.documentElement.getAttribute("color-mode") == "light"){
        document.documentElement.setAttribute("color-mode", "dark");
        lightimg.src="sun.png"
      
    } else {
        document.documentElement.setAttribute("color-mode", "light");
        lightimg.src="moon.png"
   
    }
}

lightimg.addEventListener("click", switchTheme);


