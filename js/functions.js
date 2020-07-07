function message(msg) 
{
    // alert("Welcome to Javascript")
    document.getElementById('output').innerHTML = msg;
}
function alertme(message) {
    alert(message)
}

function welcomeMsg(msg) {
    var name = msg
    return name;
}

function displayDate() {
    document.getElementById('output').innerHTML = Date();
}
function changetheme(image_name) {
    // document.body.style.background = "url('../img/meme.jpg')"
    file = 'url(../img/'+image_name+'.jpg'
    document.body.style.background = file
}
// background: url("../img/meme.jpg")
// background-color: #0080ff

function displayID(element) {
    console.log(element.id);
}

function showProperties(element) {
    document.getElementById('message').innerHTML = element.alt;
}


function setnickname() {
    if (document.getElementById('yesnick').checked) {
        document.getElementById('nick').style.display = 'inline';
        document.getElementById('nickname').setAttribute('required', true);        
    } else {
        document.getElementById('nickname').removeAttribute('required');
        document.getElementById('nick').style.display='none';
    }
    
}

function trollnickname() {
    if (document.getElementById('nickname').checked) {
        document.getElementById('troll').style.display = 'inline';
        document.getElementById('troll').setAttribute('required', true);        
    } else {
        document.getElementById('troll').removeAttribute('required');
        document.getElementById('troll').style.display='none';
    }
    
}

function check() {
    var email1 = document.getElementById('email_addr');
    var email2  = document.getElementById('email_rep');
    if (email1.value != email2.value) {
        alert("The 2 emails don't match");
        return false;

    }
}


$('document').ready(function(){
    $('button').hide().fadeIn(3000);
});

var grades=[2,5,,,9,8,,8];
// var grades=[2,5,8,10];
var sum=0;

if (grades.length > 0) {
    for (let index = 0; index < grades.length; index++) {
        if (grades[index]!=undefined) {
            const element = grades[index];
            sum += element
        }
    }
    count = grades.reduce(d => d + 1, 0);
    // console.log(sum/count)
} else {
    // console.log('Empty array')
}

function addnames() {
    var yourname = prompt('What is your name');
    names[names.length]=yourname;
    document.getElementById('names').innerHTML = names+" Espinoza";
}

function removename() {
    names = names.slice(0, -1);
    // names[names.length-1]=null;
    document.getElementById('names').innerHTML = names;
    
}
