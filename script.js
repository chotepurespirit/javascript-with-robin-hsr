vdobutton = document.getElementById("video-btn");
vdobox = document.getElementById("video-box");
vdobutton.addEventListener("click", ()=>{
    vdobox.innerHTML = "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/QbPtrnmGlZ8?si=xXUXTtYBnkqNaLKA\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe>";
});

function clickChangeColor() {
  const title = document.getElementById("title");
  if (title.classList.contains("mybabecolor")) {
    title.classList.remove("mybabecolor");
    title.innerHTML = "My Love 💖 is ?";
  }else {
    title.classList.add("mybabecolor");
    title.innerHTML = "My Earnnie 💖💖💖";
  }
}

function clicktoggle() {
  const toggle = document.getElementById("toggle");
  if (toggle.classList.contains("hidden")) {
    toggle.classList.remove("hidden");
  }else {
    toggle.classList.add("hidden");
  }
}