/**
 * Created by Administrator on 2016/8/22.
 */
function login(){
    var _dl=document.getElementById("dl");
    var userlist = JSON.parse(getCookie("user") ||"[]");
    for(var i=0; i<userlist.length;i++){
        var item = userlist[i]; //一个用户名信息
        //判断 cookie 中单个用户的用户名 与 登录的用户名是否相同
        _dl.text=item.name;
    }
}
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
function myCart(){
    var _cart=document.getElementById("cart");
    var _cartB=document.getElementById("cartB");
    _cart.onmouseover=function(){
        _cartB.style.display="block";
    }
    _cart.onmouseout=function(){
        _cartB.style.display="none";
    }
}
function blindEvent(_menu,_category){
    var _list=_menu.getElementsByTagName("li");
    var _node=document.getElementById("node");
    for(var i=0;i<_list.length;i++){
        _node.onmouseover=function (){
            _node.style.display="block";
        }
        _list[i].onmouseover=function (){
            var _as="";
            for(var key in _category[this.id]["children"]){
                _as += "<span class=\'second\'><a href=\"" + _category[this.id]["children"][key]["url"] + "\">" + _category[this.id]["children"][key]["name"] + " </a></span>";
                for (var k in _category[this.id]["children"][key]["children"]) {
                    _as += "<span class=\'third\'><a href=\"" + _category[this.id]["children"][key]["children"][k]["url"] + "\">" + _category[this.id]["children"][key]["children"][k]["name"] + "</a>";
                }
                _as += "</span>"
            }
            _node.style.display="block";
            document.getElementById("node").innerHTML=_as;
        }
        _node.onmouseout=_list[i].onmouseout=function(){
            _node.style.display="none";
        }
    }
}
function menuData(){
    ajaxRequest("get","javascript/menu.json",true,null,function(data){
        var _list="";
        var _category=window.eval("("+data+")");
        var _menu=document.getElementById("menu");
        for(var key in _category){
            _list+="<li id=\""+key+"\"><a href=\""+_category[key]["url"]+"\">"+_category[key]["name"]+"</a></li>";
        }
        _menu.innerHTML=_list;
        blindEvent(_menu,_category);
    })
}


function changeImg(){
    var _timer=0;
    var number=1;
    var _img=document.getElementById("img");

    function exec(){
        window.clearTimeout(_timer);
        _img.src="images/img"+number+".jpg";
       // console.log(_img.src)
        number++
        if(number>=7){
            number=1;
        }

        _timer=window.setTimeout(exec,2000);


    }
    exec();


}
function itembg(){
    var _itemIn=document.getElementById("itemIn");
    var _list=_itemIn.getElementsByTagName("img")
    var _item=document.getElementById("item");
    for(var i=0;i<_list.length;i++){
        //console.log(_list.length)
        _list[i].onmouseover=function(){
            //alert("ok")

            var index=$("#itemIn img").index(this)
           // console.log($("#item > img").eq(index))
            $("#item > img").eq(index).show()
                //.siblings().hide();

            //console.log( this)
        }
        _list[i].onmouseout=function(){
            var index=$("#itemIn img").index(this)
            $("#item > img").eq(index).hide()
                //.siblings().hide();
        }
    }
}
function limitData(){
    ajaxRequest("get","javascript/item.json",true,null,function (data){
        function format(_list,data){
            return _list.replace(/{{([\w]+)}}/g, function (name, key) {
                return item[key] || "";
            });
        }
        var _list="";
        var _limit=window.eval("("+data+")");
        var _limC=document.getElementById("limC");
        for(var key in _limit){
            var item=_limit[key];
            var str="<dl class=\'picture\'><a href='#' class='hd'><img src='{{url}}' alt='{{alt}}' style='width:350px;height:350px;'/><!--<img class='hd1' src='{{img}}' alt='{{alt}}' style='width:350px;height:350px;'/>--></a><p class='price'><a href='#'>{{price}}</a><span>{{count}}</span></p><dt class='dis'>{{description}}</dt><p class='brand'>{{brand}}</p><p class='name'>{{name}}</p><p class='content'>{{content}}</p></dl>";
            _list += format(str,item);
           // _list+="<dl id=\""+key+"\"><a href=\""+_category[key]["url"]+"\">"+_category[key]["name"]+"</a></dl>";
        }
        _limC.innerHTML=_list;
        //blindEvent(_menu,_category);
     })
}

function lim1(){
    ajaxRequest("get","javascript/limi.json",true,null,function (data){
        function format(_list,data){
            return _list.replace(/{{([\w]+)}}/g, function (name, key) {
                return item[key] || "";
            });
        }
        var _list="";
        var _limit=window.eval("("+data+")");
        var _lim1=document.getElementById("lim1");
        for(var key in _limit){
            var item=_limit[key];
            var str="<dl class=\'picture\'><a href='#' class='hd'><img src='{{url}}' alt='{{alt}}' style='width:350px;height:350px;'/><!--<img class='hd1' src='{{img}}' alt='{{alt}}' style='width:350px;height:350px;'/>--></a><p class='price'><a href='#'>{{price}}</a><span>{{count}}</span></p><dt class='dis'>{{description}}</dt><p class='brand'>{{brand}}</p><p class='name'>{{name}}</p><p class='content'>{{content}}</p></dl>";
            _list += format(str,item);
            // _list+="<dl id=\""+key+"\"><a href=\""+_category[key]["url"]+"\">"+_category[key]["name"]+"</a></dl>";
        }
        _lim1.innerHTML=_list;
        //blindEvent(_menu,_category);
    })
}
function changeTab(){
    var _tab1=document.getElementById("tab1");
    var _tab2=document.getElementById("tab2");
    var _limC=document.getElementById("limC");
    var _lim1=document.getElementById("lim1");
    _tab1.onmouseover=function(){
        _limC.style.display="block";
        _lim1.style.display="none";
        //alert("ok")
        //_tab1.style.borderBottom="4px solid #e5004f"
    }

    _tab2.onmouseover=function(){
        _lim1.style.display="block";
        _limC.style.display="none";
        //_tab1.style.borderBottom="4px solid #e5004f"

    }
}
function newData(){
    ajaxRequest("get","javascript/new.json",true,null,function (data){
        function format(_list,data){
            return _list.replace(/{{([\w]+)}}/g, function (name, key) {
                return item[key] || "";
            });
        }
        var _list="";
        var _new=window.eval("("+data+")");
        var _newC=document.getElementById("newC");
        for(var key in _new){
            var item=_new[key];
            var str="<dl class=\'picture\'><a href='#'><img src='{{url}}' alt='{{alt}}' style='width:170px;height:168px;'/></a><p class='price'><a href='#'>{{price}}</a><span>{{count}}</span></p><p class='brand'>{{brand}}</p><p class='name'>{{name}}</p><p class='content'>{{content}}</p><p class='gwc'>加入购物车</p></dl>";
            _list += format(str,item);
            // _list+="<dl id=\""+key+"\"><a href=\""+_category[key]["url"]+"\">"+_category[key]["name"]+"</a></dl>";
        }
        _newC.innerHTML=_list;
        //blindEvent(_menu,_category);
    })
}
function hotChange(){
    var _hotC=document.getElementById("hotC");
    var _list=_hotC.getElementsByTagName("a");
    var _img=document.getElementById("imgChange")
    for(var i=0;i<_list.length;i++){
        //console.log(_img.length)
        _list[i].onmouseenter=function(){
            //alert("ok");
            //_img.style.display="block"
            //_list[0].backgroundUrl="images/hotex2.jpg"
        }
    }
}
window.onload=function(){
    login();
    mycoin();
    blurUs();
    myCart();
    menuData();
    changeImg();
    itembg();
    limitData();
    lim1();
    changeTab();
    newData();
   // hotChange();

}


window.onscroll = function(){
    var t = document.documentElement.scrollTop || document.body.scrollTop;
    var _jump = document.getElementById( "jump");
    if( t >= 300 ) {
        _jump.style.display = "block";
    } else {
        _jump.style.display = "none";
    }
}
