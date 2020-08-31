'use strict';
var messageForm = document.getElementById('message_form');
var nameInput = document.getElementById('name');
var msgInput = document.getElementById('msg');
//new update post
function writeNewPost(name,msg) {
    var postData = {
        author: name,
        msg: msg
    }
    var newPostKey = firebase.database().ref().child('posts').push().key;

    var updates = {}
    updates['/posts/' + newPostKey] = postData;

    return firebase.database().ref().update(updates);
}

messageForm.onsubmit = function(e) {
    e.preventDefault();
    var name_val = nameInput.value;
    var msg_val = msgInput.value;

    writeNewPost(name_val, msg_val);
    nameInput.value='';
    msgInput.value='';
}
//gallery update
var galleryForm = document.getElementById('gallery_form');
var linkInput = document.getElementById('img_link');
var altInput = document.getElementById('img_alt');
function newGalleryImage(link, alt) {
    var imageData = {
        link: link,
        alt: alt
    }
    var newImgKey = firebase.database().ref().child('gallery').push().key;
    var updates = {}
    updates['/gallery/' + newImgKey] = imageData;

    return firebase.database().ref().update(updates)
}
galleryForm.onsubmit = function(e) {
    e.preventDefault();
    var link_val = linkInput.value;
    var alt_val = altInput.value;

    newGalleryImage(link_val, alt_val);
    linkInput.value = '';
    altInput.value = '';
}
//fundraiser update
var fundForm = document.getElementById('fundraiser_form');
var fundnmInput = document.getElementById('fundraiser_name');
var funddescInput = document.getElementById('fundraiser_description');
function newFundraiser(name, desc) {
    var fundraiserData = {
        description: desc,
        title: name
    }
    var updates = {}
    updates['/fundraiser/'] = fundraiserData;

    return firebase.database().ref().update(updates);
}
fundForm.onsubmit = function(e) {
    e.preventDefault();
    var nm_val = fundnmInput.value;
    var desc_val = funddescInput.value;
    newFundraiser(nm_val, desc_val);
    fundnmInput.value = '';
    funddescInput.value = '';
}
//Board members update
var boardForm = document.getElementById('board_form');
var presInput = document.getElementById('pres_name');
var vpInput = document.getElementById('vp_name');
var tresInput = document.getElementById('tres_name');
var secInput = document.getElementById('sec_name');
var banqInput = document.getElementById('banq_name');
var membInput = document.getElementById('memb_name');
var uniInput = document.getElementById('uni_name');
function newBoard(pres, vp, tres, sec, banq, memb, uni) {
    var boardNames = {
        pres: pres,
        vp: vp,
        tres: tres,
        sec: sec,
        banq: banq,
        memb: memb,
        uni: uni
    }
    var updates = {}
    updates['/booster_members/'] = boardNames;

    return firebase.database().ref().update(updates);
}
boardForm.onsubmit = function(e) {
    e.preventDefault();
    var pres_nm = presInput.value;
    var vp_nm = vpInput.value;
    var tres_nm = tresInput.value;
    var sec_nm = secInput.value;
    var banq_nm = banqInput.value;
    var memb_nm = membInput.value;
    var uni_nm = uniInput.value;
    newBoard(pres_nm, vp_nm, tres_nm, sec_nm, banq_nm, memb_nm, uni_nm);
    presInput.value = '';
    vpInput.value = '';
    tresInput.value = '';
    secInput.value = '';
    banqInput.value = '';
    membInput.value = '';
    uniInput.value = '';
}
//Booster Sponsors Update
var sponsorForm = document.getElementById('sponsor_form');
var suzukiInput = document.getElementById('suzuki');
var vivaldiInput = document.getElementById('vivaldi');
var mendelssohnInput = document.getElementById('mendelssohn');
var stravinskyInput = document.getElementById('stravinsky');
var mozartInput = document.getElementById('mozart');
var beethovenInput = document.getElementById('beethoven');
function newMembers(suzuki, vivaldi, mendelssohn, stravinsky, mozart, beethoven) {
    var memberNames = {
        beethoven: beethoven,
        mendelssohn: mendelssohn,
        mozart: mozart,
        stravinsky: stravinsky,
        suzuki: suzuki,
        vivaldi: vivaldi
    }
    var updates = {}
    updates['/membership_recognition/'] = memberNames;

    return firebase.database().ref().update(updates);
}
sponsorForm.onsubmit = function(e) {
    e.preventDefault();
    var suzuki_memb = suzukiInput.value;
    var vivaldi_memb = vivaldiInput.value;
    var mendelssohn_memb = mendelssohnInput.value;
    var stravinsky_memb = stravinskyInput.value;
    var mozart_memb = mozartInput.value;
    var beethoven_memb = beethovenInput.value;
    newMembers(suzuki_memb,vivaldi_memb,mendelssohn_memb,stravinsky_memb,mozart_memb,beethoven_memb);
    suzukiInput.value = '';
    vivaldiInput.value = '';
    mendelssohnInput.value = '';
    stravinskyInput.value = '';
    mozartInput.value = '';
    beethovenInput.value = '';
}
//handbook link
var handbookForm = document.getElementById('handbook_form');
var linkInput = document.getElementById('handbook_link');

function newMembers(link) {
    var linkValue = {
        link: link,

    }
    var updates = {}
    updates['/handbook/'] = linkValue;

    return firebase.database().ref().update(updates);
}
handbookForm.onsubmit = function(e) {
    e.preventDefault();
    var link_val = linkInput.value;

    newMembers(link_val);
    linkInput.value = '';

}
//spring trip description
var tripForm = document.getElementById('springtrip_form');
var descInput = document.getElementById('trip_description');

function newMembers(desc) {
    var descValue = {
        description: desc,

    }
    var updates = {}
    updates['/spring_trip/'] = descValue;

    return firebase.database().ref().update(updates);
}
tripForm.onsubmit = function(e) {
    e.preventDefault();
    var desc = descInput.value;

    newMembers(desc);
    descInput.value = '';

}