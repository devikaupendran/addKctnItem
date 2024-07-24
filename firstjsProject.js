let kitchenInput = document.getElementById("kitchen-input");
let kitchenItemsList = document.getElementById("kitchen-items-list");
let addBtn = document.getElementById("add-btn");

//step 1 : add eventlistener to button
//step2 : add kitchen item
//step 3 :create DOM elements
//step 4 :Add data to li
//step 5 : append to document <li>



function addKitchenItems(){
    let kitchenInputData = kitchenInput.value;
    let list = document.createElement("li");
    list.innerText = kitchenInputData;
    list.style.cssText = `animation-name:slideIn;`
    kitchenItemsList.appendChild(list);
    kitchenInput.value = '';
    kitchenInput.focus();
    console.log(list);
   
}
addBtn.addEventListener("click",addKitchenItems); 

// Add event listener to input field for enter key press
kitchenInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addKitchenItems();
    }
});