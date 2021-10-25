var closePopUp = document.getElementById("close");
var popUpwindow = document.querySelector(".pop_Up");
var labelHolders = document.querySelectorAll(".label_holder_popUp");
var activeInput = document.querySelectorAll(".input_activ");
var containerInput = document.querySelectorAll("label");
var firstButton = document.getElementById("bckPrpButton");
var radioButton = document.querySelectorAll("radio");
var titleH3 = document.querySelectorAll(".label_title");
var buttonNoReward = document.getElementById("noReward");
var totalBackers = document.getElementById("total_backers");
var acceptPopUp = document.querySelector(".accept");
var acceptButton = document.getElementById("acceptButton");
var burger = document.getElementsByAttributeName("burger_box");

firstButton.addEventListener("click", () => {
    popUpwindow.style.display = "block";
});

closePopUp.addEventListener("click", () => {
    popUpwindow.style.display = "none";
});

labelHolders.forEach((container) => {
    container.addEventListener("click", () => {
        labelHolders.forEach((container) => {
            container.style.border = "1px solid hsl(0, 0%, 48%)";

        });

        if (container.childNodes[1].childElementCount <= 3) {
            container.style.border = "2px solid hsl(176, 50%, 47%)";
        }
    });
});

containerInput.forEach((input) => {
    input.addEventListener("click", () => {
        activeInput.forEach((activeInput) => {
            activeInput.style.display = "none";
            activeInput.firstElementChild.checked = "false";
        });
        if (input.childElementCount <= 4) {
            input.lastElementChild.style.display = "flex";
            input.firstElementChild.checked = "true";
        }
    });
});


// No reward Action 

update();

var backed = false;
document.querySelectorAll('.noReward').forEach(function (btn) {


    btn.addEventListener('click', function () {
        let inputToSubmit = btn.parentElement.querySelector('.input_holder input') //getting the input being submitted based on its position relative to the button clicked

        let data = {
            reward: inputToSubmit.getAttribute('data-reward'),
            amount: inputToSubmit.value
        }

        if (data.amount >= 0) {
            console.log('Data to submit', data);

            updateNumbers(data.amount, data.reward)

            popUpwindow.style.display = "none"
            acceptPopUp.style.display = "block"
        } else {
            console.warn('No.'); //method for displaying error message goes here
        }

    })
})

function updateNumbers(amountToAdd, reward) {
    updateGatheredAmount(amountToAdd)

    update()
    updateAvailableRewards(reward)
    updateBackersNumber()
}


function updateAvailableRewards(reward) {
    let elementsClass = reward.toLowerCase().replaceAll(' ', '-')
    console.log(elementsClass);
    let amountContainers = document.querySelectorAll(`.left.${elementsClass}`)

    if (amountContainers != null) {
        amountContainers.forEach(label => {
            label.innerText = parseInt(label.innerText) - 1;
        })
    }
}

function updateBackersNumber() {
    if (backed === false) {
        let currBakcers = document.getElementById('total_backers').innerText.replaceAll(',', '')
        document.getElementById('total_backers').innerText = (parseInt(currBakcers) + 1).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        backed = true
    }
}


function updateGatheredAmount(value) {
    let curr = document.getElementById('price').innerText.replaceAll(',', '')
    let newAmount = parseInt(curr) + parseInt(value)
    document.getElementById('price').innerText = newAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function update() {
    //this will add the progress percentage to the progress
    let gathered = parseInt(document.querySelector('#price').innerText.replaceAll(',', ''))
    let goal = parseInt(document.querySelector('#total').innerText.replaceAll(',', ''))


    let percentage;

    if (gathered >= goal) {
        percentage = 100
    } else {
        percentage = Math.floor(gathered / goal * 100)
    }

    document.querySelector('.pgb_field').style = 'width:' + percentage + '%';

    console.log(percentage);


}

acceptButton.addEventListener("click", () => {
    acceptPopUp.style.display = "none";
});

burger.addEventListener("click", () => {
    burger.style.display = "none"
})