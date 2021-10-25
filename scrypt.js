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
var burgerIcon = document.getElementById("burger_icon")
var closeIcon = document.getElementById("close_icon")
var bookmarkButton = document.getElementById("button_black");
var bookmarkTxt = document.getElementById("bookmark")

//schow PopUp display with elemnts
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


// logic of change values 

updateProgressBar();

var backed = false;
document.querySelectorAll('.noReward').forEach(function (button) {


    button.addEventListener('click', function () {
        let inputToSubmit = button.parentElement.querySelector('.input_holder input')

        let data = {
            reward: inputToSubmit.getAttribute('data-reward'),
            sum: inputToSubmit.value
        }

        if (data.sum >= 0) {
            console.log('Data to submit', data);

            changeValue(data.sum, data.reward)

            popUpwindow.style.display = "none"
            acceptPopUp.style.display = "block"
        } else {

        }

    })
})

function changeValue(sumToAdd, reward) {
    replaceBankstatus(sumToAdd)

    updateProgressBar()
    changesStock(reward)
    changeValueBackers()
}


function changesStock(reward) {
    let elementsClass = reward.toLowerCase().replaceAll(' ', '-')
    console.log(elementsClass);
    let sumContainers = document.querySelectorAll(`.left.${elementsClass}`)

    if (sumContainers != null) {
        sumContainers.forEach(label => {
            label.innerText = parseInt(label.innerText) - 1;
        })
    }
}

function changeValueBackers() {
    if (backed === false) {
        let currBakcers = document.getElementById('total_backers').innerText.replaceAll(',', '')
        document.getElementById('total_backers').innerText = (parseInt(currBakcers) + 1).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        backed = true
    }
}


function replaceBankstatus(value) {
    let curr = document.getElementById('price').innerText.replaceAll(',', '')
    let newsum = parseInt(curr) + parseInt(value)
    document.getElementById('price').innerText = newsum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function updateProgressBar() {
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

//mobile menu
burgerIcon.addEventListener("click", () => {
    burgerIcon.style.display = "none"
    document.querySelector(".mobile_menu").style.display = "block";
});

closeIcon.addEventListener("click", () => {
    document.querySelector(".mobile_menu").style.display = "none";
    burgerIcon.style.display = "block"
})

// Bookmark Change

bookmarkButton.addEventListener("click", () => {
    document.getElementById("circle").style.fill = "hsl(176, 72%, 28%)"
    bookmarkTxt.innerHTML = "Bookmarked";
    bookmarkTxt.style.color = "hsl(176, 72%, 28%)"




});