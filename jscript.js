$(document).ready(function(){
  $("img").on('click',function(){
   
   var hello = $(this).attr('data-id');
   $('.hideDiv').hide();
   $('#'+hello).show();
    
   $('#testimonialCompany').css('opacity', '1');
  });
});