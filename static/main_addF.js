/**
 * Pixel2HTML - 0002122/0004535
 */

$(document).ready(function(){

  // --------------------------------------------------------------------------
  // PAGE CHANGE
  $('.section').hide();



  function showLoginPage(){
    $('.section-home, .section-confirmation').hide();
    $('.section-login').show();
    currentSection = 'loginPage';
    siteWrapperSetup();
  }

  showLoginPage();



  function showHomePage(){
    $('.section-login, .section-confirmation').hide();
    $('.section-home').show();
    currentSection = 'homePage';
    siteWrapperSetup();
  }

  $('#login-button').click(function(e){
    showHomePage();
  });



  function showConfirmationPage(){
    $('.section-login, .section-home').hide();
    $('.section-confirmation').show();
    currentSection = 'confirmationPage';
    siteWrapperSetup();
  }

  $('#home-button').click(function(e){
    showConfirmationPage();
  });



  function siteWrapperSetup(){
    if( currentSection == 'loginPage' ){
      if( $(window).width() < 850 || $(window).height() < 700 ){
        $('.site-wrapper').css({ 'height' : 'auto' });
      }
      else {
        $('.site-wrapper').css({ 'height' : '100%' });
      }
    }

    if( currentSection == 'homePage' ){
      if( $(window).height() > 1700 ){
        $('.site-wrapper').css({ 'height' : '100%' });
      }
      else {
        $('.site-wrapper').css({ 'height' : 'auto' });
      }
    }

    if( currentSection == 'confirmationPage' ){
      if( $(window).width() < 850 || $(window).height() < 1050 ){
        $('.site-wrapper').css({ 'height' : 'auto' });
      }
      else {
        $('.site-wrapper').css({ 'height' : '100%' });
      }
    }
  }

  $(window).resize(function(){
    siteWrapperSetup();
  });
});
