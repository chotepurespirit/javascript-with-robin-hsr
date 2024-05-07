vdobutton = document.getElementById("video-btn");
vdobox = document.getElementById("video-box");
vdobutton.addEventListener("click", ()=>{
    vdobox.innerHTML = "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/QbPtrnmGlZ8?si=xXUXTtYBnkqNaLKA\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe>";
});



class StarRailChar {
  constructor(name, element, path) {
    this.name = name;
    this.element =element;
    this.path = path;
  }
}