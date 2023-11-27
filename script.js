$(".Part-Two-Yes").hide();
$(".mad").hide();
$(".before").hide();
$(".after").hide();

$(".yes-button").click(function() {
    $("body").css("background-image","url(https://img.freepik.com/premium-vector/make-up-room-interior-scenes_1300-1200.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699660800&semt=ais)");
    $(".scissors").hide();
    $(".hair").hide();
    $("button").hide();
    $("haircuts").fadeIn();
    $(".Part-Two-Yes").fadeIn();
});

$(".no-button").click(function() {
    $(".scissors").hide();
    $(".hair").hide();
    $(".yes-button").hide();
    $(".no-button").hide();
    $(".help").hide();
    $(".mad").fadeIn();
    $(".bye").fadeIn();
    $(".restart").fadeIn();
});



$(".black").dblclick(function(){
    $(".cut2").show();
    $(".beforeblack1").show();
    $(".afterblack1").show();
    $(".haircuts").fadeOut();
    $(".before").show();
    $(".Part-Two-Yes").hide();
    $(".beforepink1").hide();
    $(".afterpink1").hide();
    $(".beforeblonde1").hide();
    $(".afterblonde1").hide();
    $(".beforebald1").hide();
    $(".afterbald1").hide();
});
$(".before").click(function(){
    $(".after").show();
    $(".cut3").fadeIn();
    $(".cut2").fadeOut();
    $(".before").fadeOut();
    
});
$(".cut3").hover(function(){
    $(".restart").show();
});


$(".pink").dblclick(function(){
    $(".cut2").show();
    $(".beforepink1").show();
    $(".afterpink1").show();
    $(".haircuts").fadeOut();
    $(".before").show();
    $(".Part-Two-Yes").hide();
    $(".beforeblack1").hide();
    $(".afterblack1").hide();
    $(".beforeblonde1").hide();
    $(".afterblonde1").hide();
    $(".beforebald1").hide();
    $(".afterbald1").hide();
});
$(".before").click(function(){
    $(".after").show();
    $(".cut3").fadeIn();
    $(".cut2").fadeOut();
    $(".before").fadeOut();
});
$(".cut3").hover(function(){
    $(".restart").show();
});



$(".blonde").dblclick(function(){
    $(".beforeblonde1").show();
    $(".afterblonde1").show();
    $(".cut2").show();
    $(".haircuts").fadeOut();
    $(".before").show();
    $(".Part-Two-Yes").hide();
    $(".beforepink1").hide();
    $(".afterpink1").hide();
    $(".beforeblack1").hide();
    $(".afterblack1").hide();
    $(".beforebald1").hide();
    $(".afterbald1").hide();
});
$(".before").click(function(){
    $(".after").show();
    $(".cut3").fadeIn();
    $(".cut2").fadeOut();
    $(".before").fadeOut(); 
});
$(".cut3").hover(function(){
    $(".restart").show();
});



$(".bald").dblclick(function(){
    $(".beforebald1").show();
    $(".afterbald1").show();
    $(".cut2").show();
    $(".haircuts").fadeOut();
    $(".before").show();
    $(".Part-Two-Yes").hide();
    $(".beforepink1").hide();
    $(".afterpink1").hide();
    $(".beforeblack1").hide();
    $(".afterblack1").hide();
    $(".beforeblonde1").hide();
    $(".afterblonde1").hide();
});
$(".before").click(function(){
    $(".after").show();
    $(".cut3").fadeIn();
    $(".cut2").fadeOut();
    $(".before").fadeOut();
    
});
$(".cut3").hover(function(){
    $(".restart").show();
});



$(".restart").click(function(){
    $(".scissors").show();
    $(".hair").show();
    $(".yes-button").fadeIn();
    $(".no-button").fadeIn();
    $(".help").show();
    $(".bye").hide();
    $(".mad").hide();
    $(".after").hide();
    $(".before").hide();
    $(".restart").hide();
    $("body").css("background-image","url(https://t3.ftcdn.net/jpg/02/43/34/94/360_F_243349435_LUaZ5qMppje3v4evuleCsXIMvqjUz3JB.jpg)");
});







