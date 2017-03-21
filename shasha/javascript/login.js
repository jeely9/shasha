$(document).ready(function(){
   /* var _user={

        "1001":{
            "userName":"111111",
            "password":"111111"
        }
    }*/
    $("#btn").click(function(){
       /* for(var key in _user){
            if($("#userName").val()==_user[key]["userName"] && $("#pwd").val()==_user[key]["password"]){
                alert("欢迎进入界面！")
                window.location.href="../index.html";
            }
        }*/
        //获取所有用户数据
        //使用 浏览器提供的 JSON.parse 方法 将字符串转为对象
        var userlist = JSON.parse(getCookie("user") ||"[]");
        //console.log(userlist);
        var status = true; // 先假设 cookie 中没有这个用户名
        //循环遍历 cookie 中的数据
        var sucess=null;
        for(var i=0; i<userlist.length;i++){
            var item = userlist[i]; //一个用户名信息
            //判断 cookie 中单个用户的用户名 与 登录的用户名是否相同
            if(item.name == $("#userName").val() && item.pwd == $("#pwd").val()){
                sucess=1;
                //break;
            }
        }
        if(sucess==1){
            alert("欢迎进入界面！");
            window.location.href="../index.html";
        }else{
            alert("用户名或密码不存在,请重新输入");
        }
    })
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