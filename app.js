let inputs = document.querySelectorAll(".inputs")
let button = document.querySelector(".btn")
let userPass = document.querySelector("#password")
let userName = document.querySelector("#user-name")
let successMsg = document.querySelector(".succes")
let failMsg = document.querySelector(".fail")
let inputContiner = document.querySelector(".container")
let errMsg = document.querySelector(".err-msg")

inputs.forEach(input => {
    input.addEventListener("input", () => {
        if (input.value) {
            input.classList.add("green")
        }
        else {
            input.classList.remove("green")
        }
    })
})
let count = 3


button.addEventListener("click", () => {
    count --;

    if (userName.value == "AA961" && userPass.value === "Pakistan1122") {
        console.log("Success")
        inputContiner.classList.add("hide")
        failMsg.classList.add("hide")
        successMsg.classList.remove("hide")

    }

    if(userName.value != "AA961" || userPass.value != "Pakistan1122"){
        errMsg.innerHTML = `Wrong Email or Password. ${count} Try left`
        errMsg.classList.remove("hide")
    }
    
    if (count < 1) {
        inputContiner.classList.add("hide")
        successMsg.classList.add("hide")
        failMsg.classList.remove("hide")
    }
})