(function () {
    let avatar = document.querySelector('.header img'),
        curveBtn = document.querySelectorAll("[data-click]"),
        testimonial = document.querySelector("section"),
        leftCount = 0, rightCount = 3;

    // Event Listener
    curveBtn.forEach(btn => btn.addEventListener("click", slideInImgAndText));

    function renderHtml(value) {
        avatar.setAttribute("src", `images/image-${value}.jpg`);
        avatar.style.transition = "0.5s width opacity ease-in";
        let article = [{
            body: `
            “ I’ve been interested in coding for a while but never taken the jump, until now. 
            I couldn’t recommend this course enough. I’m now in the job of my dreams and so 
            excited about the future. ”`,
            title: `Tanya Sinclair   <span> UX Engineer </span>`
        },
        {
            body: `" If you want to lay the best foundation possible I'd recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. "`,
            title: `John Tarkpor <span> Junior Front-end Developer </span>`
        }];

        testimonial.innerHTML = //Updates the HTML when the button is clicked  
            ` <p class="one"> ${article[value - 1].body}</p> <p>${article[value - 1].title}</p>`
    }

    // Functions
    function slideInImgAndText() {
        if (this.dataset.click == "left") {
            leftCount == 2 ? leftCount = 0 : [];
            leftCount++;
            console.log(leftCount);
            renderHtml(leftCount)
            return;
        }
        rightCount--;
        renderHtml(rightCount)
        rightCount == 1 ? rightCount = 3 : [];
        console.log(rightCount);
    }



})();