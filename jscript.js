$("img").on('click',function(){
   
   var hello = $(this).attr('data-id');
   $('.hideDiv').hide();
   $('#'+hello).show();
});
