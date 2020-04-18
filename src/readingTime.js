(function ( $ ) {
 
  $.fn.readingTime = function( options ) {

      // Default options
      var settings = $.extend({
          time: 0
      }, options );

      let words =  $('.readingTime').text();
      var matches = words.match(/\S+/g) ;
      let divider = (matches.length / 200).toFixed(0);
     
      return this.append(`Reading time: ${divider} minutes (${matches.length} words)`);

  };

}( jQuery ));