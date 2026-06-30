/*=========================
      Elements
=========================*/

const dock=

document.querySelector(".dock");

const icons=

document.querySelectorAll(".icon");

/*=========================
   Mouse Tracking
=========================*/

dock.addEventListener(

"mousemove",

(event)=>{

const dockRect=

dock.getBoundingClientRect();

icons.forEach(icon=>{

const rect=

icon.getBoundingClientRect();

const center=

rect.left+

rect.width/2;

const distance=

Math.abs(

event.clientX-center

);

let scale=

1;

if(distance<180){

scale=

1.8-

(distance/180)*0.8;

}

scale=

Math.max(1,scale);

icon.style.setProperty(

"--scale",

scale

);

});

});

/*=========================
     Mouse Leave
=========================*/

dock.addEventListener(

"mouseleave",

()=>{

icons.forEach(icon=>{

icon.style.setProperty(

"--scale",1

);

});

});

/*=========================
     Jelly Animation
=========================*/

function playJelly(icon){

icon.classList.remove(

"animate"

);

void icon.offsetWidth;

icon.classList.add(

"animate"

);

}

/*=========================
   Magnify + Animate
=========================*/

icons.forEach(icon=>{

icon.addEventListener(

"mouseenter",

()=>{

playJelly(icon);

});

});

/*=========================
      Smooth Reset
=========================*/

dock.addEventListener(

"mouseleave",

()=>{

icons.forEach(icon=>{

icon.style.setProperty(

"--scale",

1

);

icon.classList.remove(

"animate"

);

});

});

/*=========================
        Startup
=========================*/

console.log(

"🍎 MacOS Dock Pro Loaded"

);

/*=========================
     Click Effect
=========================*/

icons.forEach(icon=>{

icon.addEventListener(

"click",

()=>{

playJelly(icon);

});

});

/*=========================
      Touch Support
=========================*/

icons.forEach(icon=>{

icon.addEventListener(

"touchstart",

()=>{

playJelly(icon);

});

});

/*=========================
      Performance
=========================*/

icons.forEach(icon=>{

icon.style.willChange=

"transform";

});

/*=========================
      Ready
=========================*/

window.addEventListener(

"load",

()=>{

icons.forEach(icon=>{

icon.style.setProperty(

"--scale",

1

);

});

});

console.log(

"🚀 Dock Ready"

);