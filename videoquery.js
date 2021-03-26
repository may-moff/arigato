const w = window.matchMedia("(max-width: 760px)");
const video = document.getElementById("home-video");
const source = document.createElement("source");
source.setAttribute("type", "video/webm");
video.appendChild(source);

if (w.matches) {
    video.pause();
    source.removeAttribute("src");
    source.setAttribute(
        "src",
        "assets/mobile_vertical_lo.webm"
    );

    video.load();
    video.play();
} else {
    video.pause();
    source.removeAttribute("src");
    source.setAttribute(
        "src",
        "assets/homeVid.webm"
    );

    video.load();
    video.play();
}

window.addEventListener("resize", function () {
    if (w.matches) {
        video.pause();
        source.setAttribute(
            "src",
            "assets/mobile_vertical_lo.webm"
        );

        video.load();
        video.play();
    } else {
        video.pause();
        source.setAttribute(
            "src",
            "assets/homeVid.webm"
        );

        video.load();
        video.play();
    }
});