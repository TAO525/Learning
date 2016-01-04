/**
 * Created by Administrator on 2015/12/25.
 */
;(function($){
    $.extend({
        "ltrim": function(text){
            return (text||"").replace(/^\s+/g,"");
        },
        "rtrim": function(text){
            return(text||"").replace(/\s+$/g,"");
        }
    });
})(jQuery);