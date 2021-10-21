var closePopUp = document.getElementById("close");
var popUpwindow = document.querySelector(".pop_Up");
var labelHolders = document.querySelectorAll(".label_holder_popUp");
var activeInput = document.querySelectorAll(".input_activ")
var containerInput = document.querySelectorAll(".chose_holder")

closePopUp.addEventListener("click", () => {
    popUpwindow.style.display = "none"
});

// labelHolders.forEach(labelHolder)("click", () => {
//     for (let i = 0; i < labelHolders.length; i++) {
//         const holder = array[i];
//         holder.style.border = "1px solid hsl(0, 0%, 48%)";

//     }
// })





labelHolders.forEach((container) => {
    container.addEventListener("click", () => {
        labelHolders.forEach((container) => {
            container.style.border = "1px solid hsl(0, 0%, 48%)";
        });

        if (container.childNodes[1].childElementCount <= 4) {
            container.style.border = "2px solid hsl(176, 50%, 47%)";
        }

    });


});

containerInput.forEach((containerInput) => {
    containerInput.addEventListener("click", () => {
        activeInput.forEach((activeInput) => {
            activeInput.style.display = "none";
        });
        if (containerInput.childElementCount <= 4) {
            containerInput.nextElementSibling.style.display = "flex";
        }

    });
});


