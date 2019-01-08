$(document).ready(function(){
  $("img").on('click',function(){
   
   var hello = $(this).attr('data-id');
    $('.firstDiv').hide();
    $('.hideDiv').hide();
    $('#'+hello).show();
    
   $('#testimonialCompany').css('opacity', '1');
  });
});