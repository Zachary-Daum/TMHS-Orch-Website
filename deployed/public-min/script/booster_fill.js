var board_xhttp=new XMLHttpRequest;board_xhttp.overrideMimeType("text/json"),board_xhttp.onreadystatechange=function(){if(4==this.readyState&&200==this.status){var e=JSON.parse(this.responseText);document.getElementById("pres_name").innerHTML=e.pres,document.getElementById("vp_name").innerHTML=e.vp,document.getElementById("tres_name").innerHTML=e.tres,document.getElementById("sec_name").innerHTML=e.sec,document.getElementById("banq_name").innerHTML=e.banq,document.getElementById("spons_name").innerHTML=e.memb,document.getElementById("unif_name").innerHTML=e.uni}},board_xhttp.open("GET","https://orch-website.firebaseio.com/booster_members.json",!0),board_xhttp.send();var member_xhttp=new XMLHttpRequest;member_xhttp.overrideMimeType("text/json"),member_xhttp.onreadystatechange=function(){if(4==this.readyState&&200==this.status){var e=JSON.parse(this.responseText);document.getElementById("suzuki_sponsors").innerHTML=e.suzuki,document.getElementById("vivaldi_sponsors").innerHTML=e.vivaldi,document.getElementById("mendelssohn_sponsors").innerHTML=e.mendelssohn,document.getElementById("stravinsky_sponsors").innerHTML=e.stravinsky,document.getElementById("mozart_sponsors").innerHTML=e.mozart,document.getElementById("beethoven_sponsors").innerHTML=e.beethoven}},member_xhttp.open("GET","https://orch-website.firebaseio.com/membership_recognition.json",!0),member_xhttp.send();var fund_xhttp=new XMLHttpRequest;fund_xhttp.overrideMimeType("text/json"),fund_xhttp.onreadystatechange=function(){if(4==this.readyState&&200==this.status){var e=JSON.parse(this.responseText);document.getElementById("fundtitle").innerHTML=e.title,document.getElementById("fundinfo").innerHTML=e.description}},fund_xhttp.open("GET","https://orch-website.firebaseio.com/fundraiser.json",!0),fund_xhttp.send();