$(document).ready(function() {

     $('#conc').hover(
         function () {
           $('#conc_list').css({"display":"block"});
         }, 
         function () {
           $('#conc_list').css({"display":"none"});
         }
     );
     $('#git').hover(
         function () {
           $('#git_list').css({"display":"block"});
         }, 
         function () {
           $('#git_list').css({"display":"none"});
         }
     );
     $('#chat_s').hover(
         function () {
           $('#chat_s_list').css({"display":"block"});
         }, 
         function () {
           $('#chat_s_list').css({"display":"none"});
         }
     );
     $('#chat_c').hover(
         function () {
           $('#chat_c_list').css({"display":"block"});
         }, 
         function () {
           $('#chat_c_list').css({"display":"none"});
         }
     );
     $('#test').hover(
         function () {
           $('#test_list').css({"display":"block"});
         }, 
         function () {
           $('#test_list').css({"display":"none"});
         }
     );
     $('#host').hover(
         function () {
           $('#host_list').css({"display":"block"});
         }, 
         function () {
           $('#host_list').css({"display":"none"});
         }
     );

     $('a[href^="#"]').on('click',function (e) {
      e.preventDefault();

      var target = this.hash;
      var $target = $(target);

      $('html, body').stop().animate({
          'scrollTop': $target.offset().top
      }, 900, 'swing', function () {
          window.location.hash = target;
      });
     });

     $(window).scroll(function(){
      // console.log($(window).scrollTop());
      // console.log($("#c_intro").offset().top);
      // console.log($("#c_concepts").offset().top);
      if( $(window).scrollTop() >= 0 && 
        $(window).scrollTop() < $("#c_concepts").offset().top -10 ){
        $("#intro > a").css({"color":"red"});
      }else{
        $("#intro > a").css({"color":"white"});
      }
      if( $(window).scrollTop() >= $("#c_concepts").offset().top -10 && 
        $(window).scrollTop() < $("#c_server").offset().top -10 ){
        $("#conc > a").css({"color":"red"});
      }else{
        $("#conc > a").css({"color":"white"});
      }
      if( $(window).scrollTop() >= $("#c_server").offset().top -10 && 
        $(window).scrollTop() < $("#c_client").offset().top - 10){
        $("#chat_s > a").css({"color":"red"});
      }else{
        $("#chat_s > a").css({"color":"white"});
      }
      if( $(window).scrollTop() >= $("#c_client").offset().top -10 && 
        $(window).scrollTop() < $("#github").offset().top - 10){
        $("#chat_c > a").css({"color":"red"});
      }else{
        $("#chat_c > a").css({"color":"white"});
      }
      if( $(window).scrollTop() >= $("#github").offset().top -10 && 
        $(window).scrollTop() < $("#c_testing").offset().top - 10){
        $("#git > a").css({"color":"red"});
      }else{
        $("#git > a").css({"color":"white"});
      }
      if( $(window).scrollTop() >= $("#c_testing").offset().top -10 && 
        $(window).scrollTop() < $("#c_hosting").offset().top - 10){
        $("#test > a").css({"color":"red"});
      }else{
        $("#test> a").css({"color":"white"});
      }
      if( $(window).scrollTop() >= $("#c_hosting").offset().top -10){
        $("#host > a").css({"color":"red"});
      }else{
        $("#host> a").css({"color":"white"});
      }
     });


});

if( $(window).scrollTop() >= 0 && 
  $(window).scrollTop() < $("#c_concepts").offset().top -10 ){
  $("#intro > a").css({"color":"red"});
}else{
  $("#intro > a").css({"color":"white"});
}
if( $(window).scrollTop() >= $("#c_concepts").offset().top -10 && 
  $(window).scrollTop() < $("#c_server").offset().top -10 ){
  console.log("in");
  $("#conc > a").css({"color":"red"});
}else{
  $("#conc > a").css({"color":"white"});
}
if( $(window).scrollTop() >= $("#c_server").offset().top -10 && 
  $(window).scrollTop() < $("#c_client").offset().top - 10){
  console.log("in");
  $("#chat_s > a").css({"color":"red"});
}else{
  $("#chat_s > a").css({"color":"white"});
}

var clicked = false;
var small;
if( $(window).width() < 750){
    $('#navbar').css({left: "-175px"});
    $('#content').css({"margin-left":"0px"});
    $('#clicker').css({display:"block"});
    small = true;
  }else{
    // if(!clicked)
    $('#navbar').css({left:"0px"});
    $('#content').css({"margin-left":"170px"});
    $('#clicker').css({display:"none"});
    small = false;
  }

$(window).resize(function(){
  // console.log($(window).width());
  // console.log($('#navbar'))
  if( $(window).width() < 750){
    if(!clicked){
      $('#navbar').css({left: "-175px"});
      $('#content').css({"margin-left":"0px"});
      $('#clicker').css({display:"block"});
      $('#clicker').css({left:"0px"});
      // clicked = false;
    }
    small = true;
  }else{
    $('#navbar').css({left:"0px"});
    $('#content').css({"margin-left":"170px"});
    $('#clicker').css({display:"none"});
    clicked = false;
    small = false;
  }
});

$('.nav').click(function(){
  // console.log(clicked);
  if(small){  
    if(!clicked){
      $('#navbar').animate({left:"0px"});
      $('#clicker').animate({left:"150px"});
      // $('#content').animate({left:"0px"});
      clicked = true;
    }
    else{
      $('#navbar').animate({left: "-175px"});
      $('#clicker').animate({left:"0px"});
      // $('#content').animate({left:"175px"});
      clicked = false;
    }
  }
});

$('#clicker').click(function(){
  // console.log(clicked);
  if(!clicked){
    $('#navbar').animate({left:"0px"});
    $('#clicker').animate({left:"150px"});
    // $('#content').animate({left:"0px"});
    clicked = true;
  }else{
    $('#navbar').animate({left: "-175px"});
    $('#clicker').animate({left:"0px"});
    // $('#content').animate({left:"175px"});
    clicked = false;
  }
});
