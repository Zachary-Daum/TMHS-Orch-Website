var  xhttp_posts = new XMLHttpRequest();
xhttp_posts.overrideMimeType("text/json");
xhttp_posts.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var msg = JSON.parse(this.responseText);
        var post_history = []
        for (post in msg) {
            post_history.push(post);
        }
        var hist_len = post_history.length;
        //draw messages & get data from JSON
        var msg_body = '';
        for (var n=0;n<hist_len && n<25; n++) {
            msg_body += '<div class="post_box"><span class="post_author">' + msg[post_history[hist_len-1-n]].author + '</span><br><span class="post_text">'+ msg[post_history[hist_len-1-n]].msg + '</span></div>';
        }
        document.getElementById('program_updates').innerHTML = msg_body;
    }
};
xhttp_posts.open("GET",'https://orch-final.firebaseio.com/posts.json',true);
xhttp_posts.send();