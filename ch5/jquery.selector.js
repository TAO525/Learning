/**
 * Created by Administrator on 2015/12/25.
 */
;(function($){
    $.extend(jQuery.expr[":"],{
        "between" : function(a,i,m){
              var temp = m[3].split(",");
              return temp[0]-0<i&&temp[1]-0>i;//如何快速将一个string转化为number
        }
    });
})(jQuery);