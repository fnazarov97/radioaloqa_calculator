//! GET ELEMENTS FROM DOM
const elForm = document.querySelector("#js-form");
const elInputone = document.querySelector("#js-inputone");
const elInputSecond = document.querySelector(".js-inputsecond");
const elResult = document.querySelector("#js-result");
const elBtn = document.querySelector("#js-btn");
const elRefresh = document.querySelector("#js-refresh");

//! PREVENT FORM DEFAULT VERSION
elForm.addEventListener("submit", function(evt) {
    evt.preventDefault();

    //! ADDING CLASS TO BTN TO CHANGE 
    elBtn.classList.add("again");
    elRefresh.classList.add("refresh");

    //! TURNING INPUT TYPE TO NUMBER AND TRIMMING SPACES
    const h1 = Number(elInputone.value.trim());
    const h2 = Number(elInputSecond.value.trim());
    let result;
    result = 3.57*(Math.sqrt(h1)+Math.sqrt(h2))
    result = roundUp(result, 1)
    elResult.textContent = result.toString().replace(" ") + " km";
});

function roundUp(num, precision) {
    precision = Math.pow(10, precision)
    return Math.ceil(num * precision) / precision
}

//! THIS FUNCTION REFRESHES THE PAGE
function refreshPage() {
    window.location.reload();
}