window.addEventListener("load", () => {
    const sounds = document.querySelectorAll('.sound');
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector('.visual');
    const colors = ['#60d394',
    '#d36060',
    '#c060d3',
    '#d3d136',
    '#1e52fa',
    '#118fa0'];


//lets get started with the sounds here
    pads.forEach((pad, index) => {
        pad.addEventListener("click", function() {
                sounds[index].currentTime = 0;
            sounds[index].play();
        createBubbles(pad, index);
        });
    }); 

// create a functiuon that makes bubbles
    /*   
    const createBubbles = (index) => {
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = "jump 1s linear";
        bubble.addEventListener("animationend", function(){
            visual.removeChild(this);
        })
    };
    */

    const createBubbles = (pad, index) =>{
        const bubble = document.createElement("div");
        pad.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = "pop 1s linear";

        bubble.addEventListener("animationend", function(){
            pad.removeChild(this);
        })
    }
});
