var xhttp_gallery = new XMLHttpRequest();
xhttp_gallery.overrideMimeType("text/json");
xhttp_gallery.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var response = JSON.parse(this.responseText);
        //get array of links
        var img_links = []
        var img_alts = []
        for (key in response) {
            img_links.push(response[key].link);
            img_alts.push(response[key].alt);
        }
        //draw gallery in html
        var slides = '';
        for (var k=0;k<img_links.length;k++) {
            slides += '<div class="slides fade"><img src="' + img_links[k] + '" alt="' + img_alts[k] + '" style="width:100%"></div>';
        }
        document.getElementById('slideshow').innerHTML = slides + '<a class="prev" id="prev">&#10094;</a><a class="next" id="next">&#10095;</a>';
        //do styling and script so they get loaded last
        document.getElementById('script-test').innerHTML = 'var slideIndex = 1; showSlides(slideIndex); document.getElementById("next").onclick = function() {showSlides(slideIndex += 1)}; document.getElementById("prev").onclick = function() {showSlides(slideIndex += -1)}; function showSlides(n) {var i; var slides = document.getElementsByClassName("slides"); var dots = document.getElementsByClassName("dot"); if (n > slides.length) {slideIndex = 1} if (n < 1) {slideIndex = slides.length} for (i=0; i < slides.length; i++) {slides[i].style.display = "none";} slides[slideIndex-1].style.display = "block";}';
        //var x = document.getElementById("next"); x.addEventListener("click", function() {alert("working")});
    }
};
xhttp_gallery.open("GET", 'https://orch-final.firebaseio.com/gallery.json',true);
xhttp_gallery.send();