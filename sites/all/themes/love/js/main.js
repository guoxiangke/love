(function ($) {
/**
 * Field instance settings screen: force the 'Display on registration form'
 * checkbox checked whenever 'Required' is checked.
 */
Drupal.behaviors.statusInit = {
 attach: function(context) {
  $('.t-field_photo a').each(function(){
       $(this).addClass('highslide').attr("onclick","return hs.expand(this)");;
      }
    );
   console.log('here1'); 
 }
};

})(jQuery);
