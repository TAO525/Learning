/**
 * Created by Administrator on 2015/12/24.
 */
;(function($){
    $.fn.extend({
        "tableBgcolor": function(options){
            options = $.extend({
                odd:"odd",
                even:"even",
                selected:"selected"
            },options);
            $("tbody>tr:odd",this).addClass(options.odd);//当前table
            $("tbody>tr:even",this).addClass(options.even);
            $("tbody>tr",this).click(function(){
                // 在click事件中 用$(this)
                var hasselected = $(this).hasClass(options.selected);// 用option下的selected；
                $(this)[hasselected?"removeClass":"addClass"](options.selected)//添加行属性
                    .find(":checkbox").attr("checked",!hasselected);//改变checkbox
            });
            $("tbody>tr:has(:checked)",this).addClass(options.selected);
            return this;//为了链式操作
        }
    });
})(jQuery);
