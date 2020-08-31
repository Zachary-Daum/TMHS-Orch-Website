//get handbook link
var handbook_xhttp = new XMLHttpRequest();
    handbook_xhttp.overrideMimeType("text/json");
    handbook_xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var handbook = JSON.parse(this.responseText);
            document.getElementById("handbook_link").innerHTML = '<a href="'+ handbook.link + '" style="color:#fff;">this link</a>';
        }
    };
    handbook_xhttp.open("GET", "https://orch-final.firebaseio.com/handbook.json", true);
    handbook_xhttp.send();
//get spring trip description
var trip_xhttp = new XMLHttpRequest();
    trip_xhttp.overrideMimeType("text/json");
    trip_xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var trip_desc = JSON.parse(this.responseText);
            document.getElementById("springtrip_description").innerHTML = trip_desc.description;
        }
    };
    trip_xhttp.open("GET", "https://orch-final.firebaseio.com/spring_trip.json", true);
    trip_xhttp.send();