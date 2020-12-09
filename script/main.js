function renderHtml(e) {
    console.log("Dom content Is loaded");
    window.addEventListener("keydown", (e) => {
        let keyCode = e.keyCode;
        if (keyCode !== 37 && keyCode !== 39) return;
        console.log(keyCode);

    })
}
window.addEventListener("DOMContentLoaded", renderHtml)