const myList = document.querySelector(".to-do")
const item = document.querySelectorAll(".item")
const checkbox = document.querySelectorAll(".checkbox")
const itemName = document.querySelectorAll(".item-name")
const removeItem = document.querySelectorAll(".remove-item")
const addItem = document.querySelector(".add-item")

checkbox.forEach(button => {
    button.addEventListener("click", function(){
        myListItem = button.parentElement;
        myItemName = myListItem.querySelector(".item-name")
        myItemName.classList.toggle("done-for")
        console.log(myItemName)
    })
})

removeItem.forEach(button => {
    button.addEventListener("click", function(){
        myListItem = button.parentElement;
        myListItem.remove()
    })
})

addItem.addEventListener("click", function(){
    nextItem = prompt("Please enter your next task: ")
    if (!nextItem) return;
    newItem = document.createElement("li");
    newItem.innerHTML = `
        <button class="checkbox"></button>
        <p class="item-name">${nextItem}</p>
        <button class="remove-item">Delete</button>
    `;
    myList.appendChild(newItem)
        const newCheckbox = newItem.querySelector(".checkbox");
    const newRemove = newItem.querySelector(".remove-item");

    newCheckbox.addEventListener("click", function() {
        const myItemName = newItem.querySelector(".item-name");
        myItemName.classList.toggle("done-for");
    });

    newRemove.addEventListener("click", function() {
        newItem.remove();
    });
})
