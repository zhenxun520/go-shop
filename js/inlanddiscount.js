/**
 * Created by w on 2017/12/9.
 */

$(function(){

    $.ajax({
        type:"get",
        url:"http://127.0.0.1:9090/api/getinlanddiscount",
        dataType:"json",
        success:function(data) {
            console.log(data);
            $(".zk-content").html(template("tpl-sj",data));
         }
        })


});
