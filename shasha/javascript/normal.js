/**
 * Created by Administrator on 2016/8/26.
 */
function Normal(){
    this.login=function(){
        var _dl=document.getElementById("dl");
        var userlist = JSON.parse(getCookie("user") ||"[]");
        for(var i=0; i<userlist.length;i++){
            var item = userlist[i]; //一个用户名信息
            //判断 cookie 中单个用户的用户名 与 登录的用户名是否相同
            _dl.text=item.name;
        }
    }
    this.mycoin=function(){
        var _coin=document.getElementById("mycoin");
        var _coinC=document.getElementById("mycoinC");
        _coin.onmouseover=function(){
            _coinC.style.display="block";
        }
        _coin.onmouseout=function(){
            _coinC.style.display="none";
        }
    }
    this.blurUs=function(){
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
    this.myCart=function(){
        var _cart=document.getElementById("cart");
        var _cartB=document.getElementById("cartB");
        _cart.onmouseover=function(){
            _cartB.style.display="block";
        }
        _cart.onmouseout=function(){
            _cartB.style.display="none";
        }
    }
}
window.onload=function(){
    var normal=new Normal();
    normal.login();
    normal.mycoin();
    normal.blurUs();
    normal.myCart();
}
