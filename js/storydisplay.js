const buttons = document.querySelectorAll(".story-button");
const viewer = document.querySelector(".story-container iframe");

buttons.forEach(button => {
    button.addEventListener("click", () => {

        viewer.src = button.dataset.document;

        buttons.forEach(button => {
            button.classList.remove("active");
        });

        button.classList.add("active");
    });
});