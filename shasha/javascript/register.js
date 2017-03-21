$(document).ready(function(){

    var _allowed=0;
    //var _user={};
    $("#number").blur(function(){
        if(/(^1[34578][0-9]{1})([0-9]{5})([0-9]{3})/g.test($(this).val())){
            _allowed++;

        }else{
            alert("error")
        }
    });
    $("#pwd").blur(function(){
        if(/^[a-zA-Z]{1}([a-zA-Z0-9]|[._]){5,16}$/g.test($(this).val())){
            _allowed++;

        }else{
            alert("error");
        }
    });
    $("#again").blur(function(){
        if($(this).val()==$("#pwd").val()){
            _allowed++;
        }else{
            alert("error");
        }
    });
    $("#yzm").blur(function(){
        if($(this).val()==$("#yzmIn").text()){
            _allowed++;

        }else{
            alert("error");
        }
    });
//给注册按钮点击事件，保存cookie
    $("#btn").click(function(){
        if(_allowed==4){
            //将用户信息保存为一个对象
            //alert("恭喜你注册成功！");
            //window.location.href="login.html";
            var user = {
                "name": $('#number').val(),
                "pwd" : $('#pwd').val()
            };
            //获取所有用户数据
            //使用 浏览器提供的 JSON.parse 方法 将字符串转为对象
            var userlist = JSON.parse(getCookie("user") ||"[]");
            //console.log(userlist)
            var status = true; // 假设 cookie 中没有注册过这个用户名
            //循环遍历 cookie 中的数据
            for(var i=0; i<userlist.length;i++){
                var item = userlist[i]; //一个用户名信息
                //判断 cookie 中单个用户的用户名 与 注册的用户名是否相同
                if(item.name == user.name){
                    status = false;
                    break;
                }
            }
            //如果为 false 就表示用户名已经存在了
            if(status == false){
                alert("用户名已经存在");
            }
            else{
                alert("注册成功");
                //将新注册的用户数据添加到 对象中
                userlist.push(user);
                //将所有用户数据转换为字符串，存入cookie
                setCookie("user",JSON.stringify(userlist),1000*60*60*24*7);
                //console.log('user : ',userlist);
                //console.log("新注册的 ： ",user);
                window.location.href="login.html";
            }
        }else{
            alert("注册失败，请重新注册");
        }
    })
    $(".change").click(function(){
        $("#yzmIn").text(test());
    })
    function test(){
        var _code=[];
        var m=0;
        for(var i=0;i<36;i++){
            if(i<9){
                _code[i]=i;
            }else{
                _code[i]=String.fromCharCode("a".charCodeAt(0)+m);
                m++;
            }
        }
        return ""+_code[Math.floor(Math.random()*_code.length)]+_code[Math.floor(Math.random()*_code.length)]+_code[Math.floor(Math.random()*_code.length)]+_code[Math.floor(Math.random()*_code.length)];
    }
    $("#yzmIn").text(test());



})






function mycoin(){
    var _coin=document.getElementById("mycoin");
    var _coinC=document.getElementById("mycoinC");
    _coin.onmouseover=function(){
        _coinC.style.display="block";
    }
    _coin.onmouseout=function(){
        _coinC.style.display="none";
    }
}
function blurUs(){
    var _blur=document.getElementById("blur");
    var _blurC=document.getElementById("blurC");
    _blur.onmouseover=function(){
        _blurC.style.display="block";
    }
    _blur.onmouseout=function(){
        _blurC.style.display="none";
    }
    var _weibo=document.getElementById("weibo");
    var _wb=document.getElementById("wb");
    _weibo.onmouseover=function(){
        _wb.style.display="block";
    }
    _weibo.onmouseout=function(){
        _wb.style.display="none";
    }
    var _shasha=document.getElementById("shasha");
    var _wx=document.getElementById("wx");
    _shasha.onmouseover=function(){
        _wx.style.display="block";
    }
    _shasha.onmouseout=function(){
        _wx.style.display="none";
    }
    var _yk=document.getElementById("yk");
    var _sp=document.getElementById("sp");
    _yk.onmouseover=function(){
        _sp.style.display="block";
    }
    _yk.onmouseout=function(){
        _sp.style.display="none";
    }
}

window.onload=function(){

    mycoin();
    blurUs();
}