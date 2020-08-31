//get Booster Club Board Members
var board_xhttp = new XMLHttpRequest();
    board_xhttp.overrideMimeType("text/json");
    board_xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var board_members = JSON.parse(this.responseText);
            //set names
            document.getElementById("pres_name").innerHTML = board_members.pres;
            document.getElementById("vp_name").innerHTML = board_members.vp;
            document.getElementById("tres_name").innerHTML = board_members.tres;
            document.getElementById("sec_name").innerHTML = board_members.sec;
            document.getElementById("banq_name").innerHTML = board_members.banq;
            document.getElementById("spons_name").innerHTML = board_members.memb;
            document.getElementById("unif_name").innerHTML = board_members.uni;
        }
    };
    board_xhttp.open("GET", "https://orch-final.firebaseio.com/booster_members.json", true);
    board_xhttp.send();
//get membership
var member_xhttp = new XMLHttpRequest();
    member_xhttp.overrideMimeType("text/json");
    member_xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var members = JSON.parse(this.responseText);
            document.getElementById("suzuki_sponsors").innerHTML = members.suzuki;
            document.getElementById("vivaldi_sponsors").innerHTML = members.vivaldi;
            document.getElementById("mendelssohn_sponsors").innerHTML = members.mendelssohn;
            document.getElementById("stravinsky_sponsors").innerHTML = members.stravinsky;
            document.getElementById("mozart_sponsors").innerHTML = members.mozart;
            document.getElementById("beethoven_sponsors").innerHTML = members.beethoven;
        }
    };
    member_xhttp.open("GET", 'https://orch-final.firebaseio.com/membership_recognition.json',true);
    member_xhttp.send();
//get fundraiser information
var fund_xhttp = new XMLHttpRequest();
    fund_xhttp.overrideMimeType("text/json");
    fund_xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var fundraiser = JSON.parse(this.responseText);
            document.getElementById("fundtitle").innerHTML = fundraiser.title;
            document.getElementById("fundinfo").innerHTML = fundraiser.description;
        }
    };
    fund_xhttp.open("GET", 'https://orch-final.firebaseio.com/fundraiser.json',true);
    fund_xhttp.send();