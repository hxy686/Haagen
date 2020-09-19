$(function(){
    $.idcode.setCode();   //加载生成验证码方法
    
    $('.sub').click(()=>{
        let uname = $('#uname').val();
        let upwd = $('#upwd').val();
        let cookie_str = $.cookie('users') ? $.cookie('users') : '';
        let cookie_obj = $toObj(cookie_str);
        if(!re_user.test(uname)){
            alert('用户名不符合规则！');
            return;
        }
        //字母数字下划线 3-12
        let re_pass = /^\w{3,12}$/;
        if(!re_pass.test(upwd)){
            alert('密码不符合规则！');
            return;
        }

        if(uname in cookie_obj){
            if(upwd === cookie_obj[uname]){
                alert('登录成功');
                location.href = 'product.html';
            }else{
                alert('密码错误')
            }
        }else{
            alert('用户名不存在');
        }
    })

})
