const sliders = document.querySelectorAll("input[type='range']");

sliders.forEach(function(slider){
    slider.addEventListener("input", calculateTip);
});

const billInput = document.getElementById("billNumber");
billInput.addEventListener("change",calculateTip);

function calculateTip(){
    let bill = parseFloat(billInput.value);
    let tipPercent = document.getElementById("tipRange").value;
    let noOfPoeple = document.getElementById("numPeopleRange").value;

    billInput.value = bill.toFixed(2);

    let totalTip = parseFloat((bill * (tipPercent/100)).toFixed(2));
    let total = parseFloat((bill + totalTip).toFixed(2));
    
    let tipPerPerson = (totalTip/noOfPoeple).toFixed(2);
    let totalPerPerson = (total/noOfPoeple).toFixed(2);

    document.getElementById("tipValue").textContent = `R ${totalTip}`;
    document.getElementById("totalAmount").textContent = `R ${total}`;

    document.getElementById("tipPercent").textContent = `${tipPercent}`;
    document.getElementById("numPeople").textContent = noOfPoeple;

    document.getElementById("tipPerPerson").textContent = `R ${tipPerPerson}`;
    document.getElementById("totalPerPerson").textContent = `R ${totalPerPerson}`;
}
