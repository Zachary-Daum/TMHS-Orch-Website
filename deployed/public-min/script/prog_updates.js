var xhttp_posts=new XMLHttpRequest;xhttp_posts.overrideMimeType("text/json"),xhttp_posts.onreadystatechange=function(){if(4==this.readyState&&200==this.status){var t=JSON.parse(this.responseText),s=[];for(post in t)s.push(post);for(var e=s.length,p="",o=0;o<e&&o<25;o++)p+='<div class="post_box"><span class="post_author">'+t[s[e-1-o]].author+'</span><br><span class="post_text">'+t[s[e-1-o]].msg+"</span></div>";document.getElementById("program_updates").innerHTML=p}},xhttp_posts.open("GET","https://orch-website.firebaseio.com/posts.json",!0),xhttp_posts.send();