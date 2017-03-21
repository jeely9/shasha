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
this.limitData=function(){
    ajaxRequest("get","../javascript/facepage.json",true,null,function (data){
        function format(_list,data){
            return _list.replace(/{{([\w]+)}}/g, function (name, key) {
                return item[key] || "";
            });
        }
        var _list="";
        var _limit=window.eval("("+data+")");
        var _limC=document.getElementById("wall");
        for(var key in _limit){
            var item=_limit[key];
            var str="<dl class=\'picture\'id='picture'><a href='#'><img src='{{url}}' alt='{{alt}}' style='width:220px;height:220px;'/></a><p class='price'><a href='#'>{{price}}</a><span>{{count}}</span></p><dt class='dis'>{{description}}</dt><p class='brand'>{{brand}}</p><p class='name'>{{name}}</p><p class='content'>{{content}}</p></dl>";
            _list += format(str,item);

        }
        _limC.innerHTML=_list;
        var _picture=$(".picture");
        console.log(_picture)
        _picture.onclick=function(){
            //alert("ok");
           // window.location.href="detail.html"
        }

    })
}





}


function blindEvent(_data,_total,_c){
    var _span=document.getElementById("button").children;
    for(var i=0;i<_span.length-1;i++){
        _span[i].onclick=function(){
            //var _s=(parseInt(this.innerText)-1)*5;
            //initData(_s,this.innerText);
            document.getElementById("tip").innerHTML="当前第"+this.innerText+"页/共"+Math.ceil(_data["img"].length/5)+"页";
            var _s=parseInt(this.innerText)-3;
            if(this==_span[0] && this.innerText!=1){
                getPageSize(_data,this.innerText,_s);
            }
            if(this==_span[_span.length-2] && parseInt(this.innerText)<_total){
                getPageSize(_data,this.innerText,_s);
            }
            var _s=(parseInt(this.innerText)-1)*5;
            readData(_data,_s);
        }
    }
}
function getPageSize(_data,_c,_s){
    var _span="";
    var _button=document.getElementById("button");
    for(var i=_s;i<_s+5 && i<Math.ceil(_data["img"].length/5);i++){
        _span+="<span class=\"size\">"+(i+1)+"</span>";
    }
    _button.innerHTML=_span+"<span id=\"tip\" class=\"tip\">当前第"+_c+"页/共"+Math.ceil(_data["img"].length/5)+"页</span>";
    blindEvent(_data,Math.ceil(_data["img"].length/5),_c);
}

function readData(_data,_s){
    var _span="",_img="",_a="";
    var _contant=document.getElementById("wall");
    function first(){
        for(var i=_s;i<_data["img"].length && i<_s+6;i++){
            if(i%6==0){
                _span+="<dl style=\"margin-left:0px\" class='picture'>";
            }else{
                _span+="<dl class='picture'>"
            }
            _img="<img style='width:220px;height:220px;' alt=\"\" src=\""+"../images/"+_data["img"][i]+ "\"/>";
            _a="<a class='name' href=\""+"../html/detail.html"+"\">"+_data["name"][i]+"</a>"
            _p="<a class='price' href=\""+"../images/"+_data["price"][i]+"\">"+_data["price"][i]+"</a>"
            _b="<p class='brand' href=\""+"../images/"+_data["brand"][i]+"\">"+_data["brand"][i]+"</p>"
            _t="<b class='count' href=\""+"../images/"+_data["count"][i]+"\">"+_data["count"][i]+"</b>"
            _span+=_img+_a+_p+_b+_t+"</dl>";
        }
        _contant.innerHTML=_span;



    }
    first();













}
function initData(_s,_c){
    ajaxRequest("get","../javascript/data.json",true,null,function(data){
        var _data=window.eval("("+data+")");
        readData(_data,_s);
        getPageSize(_data,_c,0)
    })
}
window.onload=function(){
    var _Face=new Face();
   // _Face.menu()
    _Face.login();
    _Face.blurUs();
    _Face.myCart();
    _Face.mycoin();
   // _Face.limitData();
   // _Face.initData(0,1);
   initData(0,1);
}
