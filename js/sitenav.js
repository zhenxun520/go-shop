/**
 * Created by w on 2017/12/9.
 */
$(function(){

    $.ajax({
        type:"get",
        url:"http://127.0.01:9090/api/getsitenav",
        success:function(data){
            console.log(data);
            $('.main').html(template("box-url",data));
        }
    })

});
