let tabs = document.querySelectorAll("li");
let sliders = document.querySelectorAll(".image__slider--one");

tabs.forEach((tab) => {
    function imageSliders() {
        const targetPanel = document.querySelector(tab.dataset.target)
        sliders.forEach((imageSlider) => {
            if (imageSlider !== targetPanel) {
                imageSlider.classList.remove("active");
            }
            imageSlider.classList.add("active");
        })
    }
    tab.addEventListener("click", (imageSliders))
})