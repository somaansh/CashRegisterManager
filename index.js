const billAmount = document.querySelector("#billAmount")
const cashGiven = document.querySelector("#cashGiven")
const checkButton = document.querySelector("#check-btn")
const message = document.querySelector("#errorMsg")
const noOfNotes = document.querySelectorAll(".no-of-notes")

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

checkButton.addEventListener("click", function validateBillAndCash(){
    hideMessage();
    if(billAmount.value > 0){
        if(cashGiven.value >= billAmount.value){
            const amountToBeReturned = cashGiven.value - billAmount.value;
            calculateChange(amountToBeReturned);
        }
        else{
            showMessage("Do you want to wash plates?");
        }

    }else {
        showMessage("Invalid Bill Amount");
    }
});

function calculateChange(amountToBeReturned){
    for (let i=0; i<availableNotes.length; i++){
        const numberofNotes = Math.trunc(amountToBeReturned/availableNotes[i]);

        amountToBeReturned = amountToBeReturned % availableNotes[i];
        noOfNotes[i].innerText = numberofNotes;
    }
}

function hideMessage(){
    message.style.display="none"
}

function showMessage(msg){
    message.style.display= "block";
    message.innerText= msg;

}