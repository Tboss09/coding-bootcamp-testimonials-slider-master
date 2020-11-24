let leftAndRightArrow = document.querySelectorAll("li");
let sliders = document.querySelectorAll(".image__slider--one");

leftAndRightArrow.forEach((tab) => {
    function slideImages() {
        const targetPanel = document.querySelector(tab.dataset.target)
        sliders.forEach((imageSlider) => {
            if (imageSlider !== targetPanel) {
                imageSlider.classList.remove("active");
                return;
            }
            imageSlider.classList.add("active");
            return;
        })
    }
    tab.addEventListener("click", (slideImages));
})