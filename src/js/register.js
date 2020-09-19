$(function(){
    $.idcode.setCode();   //加载生成验证码方法

    $('.sub').click(function(){
        var IsBy = $.idcode.validateCode()  //调用返回值，返回值结果为true或者false
        if(IsBy){
            alert("验证码输入正确")
        }else {
            alert("验证码错误")
        }

        let uname = $('#uname').val();
        let upwd = $('#upwd').val();
        //获取cookie
        let cookie_str = $.cookie('users') ? $.cookie('users') : '';
        //转对象
        let cookie_obj = $toObj(cookie_str);
        let re_1 = /^[\u4e00-\u9fa5]{3,5}$/
        if(!re_1.test(uname)){
            alert('用户名不符合规则')
            return;
        }
        let re_2 = /^\w{3,8}$/;
        if(!re_2.test(upwd)){
            alert('密码格式不正确');
            return;
        }
        //判断对象是否存在
        if(uname in cookie_obj){
            alert('用户已存在！');
            return;
        }
        //不存在加入对象
        cookie_obj[uname] = upwd;
        //存入cookie
        $.cookie('users',JSON.stringify(cookie_obj),{expires : 7,path : '/'});
        alert('注册成功')
    })
})
