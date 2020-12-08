var a = document.getElementById('login');



function login(){
    a.style.display = 'none';
}

// $(".menu-bar").click(function(){
//     $("#navi").slideToggle(1000);
// });

$(".features").hover(function(){
     $("#features-box1").toggle();

});

$(".shop").hover(function(){
    $("#features-box2").toggle();

});

var b = document.getElementById('c1');
var c = document.getElementById('c2');
var d = document.getElementById('c3');

function c1(){
    b.style.display = 'none';
}

function c2(){
    c.style.display = 'none';
}

function c3(){
    d.style.display = 'none';
}

function alt(){
    document.getElementById('alt').style.display = 'block';
}

function altt(){
    document.getElementById('alt').style.display = 'none';
}


function cash(){
    document.getElementById("cash").classList.add('h3');
    document.getElementById("cre").classList.remove('h3');
    document.getElementById("net").classList.remove('h3');
    document.getElementById("paypal").classList.remove('h3');
    document.getElementById("cash1").style.display = 'block';
    document.getElementById("cash2").style.display = 'none';
    document.getElementById("cash3").style.display = 'none';
    document.getElementById("cash4").style.display = 'none';


}

function cashh(){
    document.getElementById("cash").classList.remove('h3');
    document.getElementById("cre").classList.add('h3');
    document.getElementById("net").classList.remove('h3');
    document.getElementById("paypal").classList.remove('h3');
    document.getElementById("cash2").style.display = 'block';
    document.getElementById("cash1").style.display = 'none';
    document.getElementById("cash3").style.display = 'none';
    document.getElementById("cash4").style.display = 'none';


}

function cashhh(){
    document.getElementById("cash").classList.remove('h3');
    document.getElementById("cre").classList.remove('h3');
    document.getElementById("net").classList.add('h3');
    document.getElementById("paypal").classList.remove('h3');
    document.getElementById("cash1").style.display = 'none';
    document.getElementById("cash2").style.display = 'none';
    document.getElementById("cash3").style.display = 'block';
    document.getElementById("cash4").style.display = 'none';
}

function cashhhh(){
    document.getElementById("cash").classList.remove('h3');
    document.getElementById("cre").classList.remove('h3');
    document.getElementById("net").classList.remove('h3');
    document.getElementById("paypal").classList.add('h3');
    document.getElementById("cash1").style.display = 'none';
    document.getElementById("cash2").style.display = 'none';
    document.getElementById("cash3").style.display = 'none';
    document.getElementById("cash4").style.display = 'block';

}


function img(){
    document.getElementById("img-box").style.display = 'block';
    document.getElementById("img-boxx").style.display = 'none';
    document.getElementById("img-boxxx").style.display = 'none';
}

function imgg(){
    document.getElementById("img-box").style.display = 'none';
    document.getElementById("img-boxx").style.display = 'block';
    document.getElementById("img-boxxx").style.display = 'none';
}

function immg(){
    document.getElementById("img-box").style.display = 'none';
    document.getElementById("img-boxx").style.display = 'none';
    document.getElementById("img-boxxx").style.display = 'block';
}










