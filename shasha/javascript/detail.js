function Face(){
    /*this.menu=function(){
     ajaxRequest("post","../javascript/menu.json",true,null,function(data){
     var _list="";
     var _category=window.eval("("+data+")");
     var _menu=document.getElementById("menu");
     for(var key in _category){
     _list+="<li id=\""+key+"\"><a href=\""+_category[key]["url"]+"\">"+_category[key]["name"]+"</a></li>";
     }
     _menu.innerHTML=_list;
     blindEvent(_menu,_category);
     })
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
     }
     */
    this.login= function (){
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
    this.fangdajing=function(){
        var smallBox = document.getElementById("smallBox");  //小盒子
        var tool = document.getElementById("tool");  //放大镜
        var bigBox = document.getElementById("bigBox");  //大盒子
        var bigImg = $(".bigImg");  //大图片




        //第二步：当鼠标浮动到小盒子上时，显示出放大镜（tool）,显示出右边的大盒子。
        smallBox.onmouseover = function(){
            tool.style.display = "block";  //显示出放大镜（tool）
            bigBox.style.display = "block"; //显示出右边的大盒子。
        }

        smallBox.onmouseout = function(){
            tool.style.display = "none";  //隐藏出放大镜（tool）
            bigBox.style.display = "none"; //隐藏出右边的大盒子。
        }

        //第三步：在小盒子上移动鼠标时，放大镜（tool）跟着鼠标移动（范围就是小盒子内）。右边的大盒子中的大图片也随之移动
        //offsetWidth  offsetHeight   获取一个节点对象的宽度和高度（不包括滚动条）
        smallBox.onmousemove = function(e){
            var _event = window.event||e; //事件对象
            //计算放大镜（tool）的x坐标
            var left = _event.clientX-smallBox.offsetLeft-tool.offsetWidth/2;
            //console.log(left)
            //计算放大镜（tool）的y坐标
            var top = _event.clientY-smallBox.offsetTop-tool.offsetHeight/2;
            //console.log(top)
            //处理left和top值(限制范围)
         if(left<0){
                left = 0;
            }
            if(top<0){
                top = 0;
            }
            if(left>smallBox.offsetWidth-tool.offsetWidth){
                left = smallBox.offsetWidth-tool.offsetWidth;
            }
            if(top>smallBox.offsetHeight-tool.offsetHeight){
                top = smallBox.offsetHeight-tool.offsetHeight;
            }

            //改变放大镜的一个坐标
            tool.style.left = left + "px";
            tool.style.top = top + "px";

            //求图片应当移动的距离
            var x = tool.offsetLeft*bigBox.offsetWidth/tool.offsetWidth;
            var y = tool.offsetTop*bigBox.offsetHeight/tool.offsetHeight;
            //改变图片移动的距离
           // bigImg.style.left = -x + "px";
           // bigImg.style.top = -y + "px";
            bigImg.css({
                "left":-x+"px",
                "top":-y+"px"
            })
        }
        var _as=$("#slider img");
        var _list=$("#smallBox img");
        var _all=$("#bigBox img");
        var x="";

        for(var i=0;i<_as.length;i++){
            //console.log(_as.length);
            _as[i].index=i;
            //console.log(_as[i])	` 	`
            _as[i].onmouseover=function(){
                for(var n=0;n<_as.length;n++){
                    _as[n].style.borderColor="#ccc"
                    _list[n].style.display="none"
                    _all[n].style.display="none"

                }
                x=this.index
                _as[x].style.borderColor="black"
                _list[x].style.display="block"
                _all[x].style.display="block"

            }

        }




    }




}

window.onload=function(){
    var _Face=new Face();
    // _Face.menu()
    _Face.login();
    _Face.blurUs();
    _Face.myCart();
    _Face.mycoin();
    _Face.fangdajing();

}
/*$(function(){
    $(".btnL").click(function(){

        $("#slider").animate({
            left:"-408px"
        },50)
    })
    $("#button2").click(function(){
        $("#slider").animate({
            left:"0px"
        },50)
    })


})*/
