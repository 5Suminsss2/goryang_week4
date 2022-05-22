document.getElementById("modal").style.display = "none";

const addButton = document.getElementById("addItem");
addButton.addEventListener("click", () => {
    document.getElementById("modal").style.display = "block";

});



const closeButton = document.getElementById("closeModal");
closeButton.addEventListener("click", closeModal);

function closeModal() {
    document.getElementById("modal").style.display = "none";
}