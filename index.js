buttons = ['w', 'a', 's', 'd', 'j', 'k', 'l']

// AUDIOs 

// var crash = new Audio('sounds/crash.mp3');
// var kickBass = new Audio('sounds/kick-bass.mp3');
// var snare = new Audio('sounds/snare.mp3');
// var tom1 = new Audio('sounds/tom-1.mp3');
// var tom2 = new Audio('sounds/tom-2.mp3');
// var tom3 = new Audio('sounds/tom-3.mp3');
// var tom4 = new Audio('sounds/tom-4.mp3');



for (var i = 0; i < buttons.length; i++) {
    document.querySelector("." + buttons[i]).addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}


// EVENT LISTENERS FOR CLICKS

// document.querySelector(".w").addEventListener("click", function () {
//     crash.play();
// });

// document.querySelector(".a").addEventListener("click", function () {
//     kickBass.play();
// });

// document.querySelector(".s").addEventListener("click", function () {
//     snare.play();
// });

// document.querySelector(".d").addEventListener("click", function () {
//     tom1.play();
// });

// document.querySelector(".j").addEventListener("click", function () {
//     tom2.play();
// });

// document.querySelector(".k").addEventListener("click", function () {
//     tom3.play();
// });

// document.querySelector(".l").addEventListener("click", function () {
//     tom4.play();
// });

document.addEventListener("keypress", function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});

// MAKE SOUND FUNCTIONS

// function makeSound(key) {
//     switch (key) {
//         case 'w':
//             crash.play();
//             break;
//         case 'a':
//             kickBass.play();
//             break;
//         case 's':
//             snare.play();
//             break;
//         case 'd':
//             tom1.play();
//             break;
//         case 'j':
//             tom2.play();
//             break;
//         case 'k':
//             tom3.play();
//             break;
//         case 'l':
//             tom4.play();
//             break;
//         default:
//             // code block
//             console.log("wrong entry")
//     }
// }

function makeSound(key) {

    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/crash.mp3");
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio("sounds/kick-bass.mp3");
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio('sounds/snare.mp3');
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio('sounds/tom-1.mp3');
            tom4.play();
            break;

        case "j":
            var snare = new Audio('sounds/tom-2.mp3');
            snare.play();
            break;

        case "k":
            var crash = new Audio('sounds/tom-3.mp3');
            crash.play();
            break;

        case "l":
            var kick = new Audio('sounds/tom-4.mp3');
            kick.play();
            break;


        default:
            console.log(key);

    }
}

// ANIMATIONS

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add('pressed');
    setTimeout(function () {
        activeButton.classList.remove('pressed');
    }, 100)
}