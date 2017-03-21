/**
 * Created by Administrator on 2016/8/26.
 */
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
        ajaxRequest("get","../javascript/face.json",true,null,function (data){
            //data = JSON.parse(data);
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
                item.id=key;
                var str="<dl class=\'picture\'><a href='#'><img src='{{url}}' alt='{{alt}}' style='width:220px;height:220px;'/></a><p class='price'><a href='#'>{{price}}</a><span>{{count}}</span></p><dt class='dis'>{{description}}</dt><p class='brand'>{{brand}}</p><p class='name'>{{name}}</p><p class='content'>{{content}}</p><p class='shop-btn' data-key='{{id}}'>购买</p></dl>";
                _list += format(str,item);

            }
            _limC.innerHTML=_list;

        })

var _btn=document.getElementsByClassName("shop-btn");
        _btn.onclick=function(){
            var key=$(this).data("key");
            //console.log(key);

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
   // _Face.limitData();


}
$(function(){
    $.get("../javascript/face.json",{},function(data){
        data = JSON.parse(data);
        shopList(data);
    },"text");
});
function shopList(data){
    var str="<dl class=\'picture\'>" +
        "<a href='#'><img src='{{url}}' alt='{{alt}}' style='width:220px;height:220px;'/></a>" +
        "<p class='price'><a href='#'>{{price}}</a><span>{{count}}</span></p>" +
        "<dt class='dis'>{{description}}</dt>" +
        "<p class='brand'>{{brand}}</p>" +
        "<p class='name'>{{name}}</p>" +
        "<p class='content'>{{content}}</p>" +
        /*'<p class="total">{{price}}元</p>'+*/
        "<p class='shop-btn' data-key='{{id}}'>点击购买</p>" +
        "</dl>";
    var html = "";
    for(var key in data){
        //根据 key 获取 value
        var item = data[key];
        item.id = key;
        html += format(str,item);
    }
    $("#wall","#demo").append(html);
    $("#demo").on("click",".shop-btn",function(){
       // console.log($(this).data)
        var key=$(this).data("key");
        //console.log(key);
        var item=data[key];
        item.count=1;//默认添加 一件 商品
       // console.log(item.price)
        item.total=item.price.split("￥")[1].split("元")[0]
       // console.log(item.total)
        //将 cookie 中的购物车数据取出来，并且转换为 对象
        //如果cookie中不存在 car 这个对象，就默认为空数组
        var cars=JSON.parse(getCookie("car") || "[]");
        var status=true;//假设 cookie 中不存在这个商品
        for(var i=0;i<cars.length;i++){
            var shop=cars[i];
            //判断 购买的商品 id 与 购物车中的商品 id 是否一样
            //一样表示购物车中存在这个新购买的商品
            if(shop.id == key){
                shop.count += item.count; //将新购买的商品与购物车中的商品累加
                shop.total=item.total*shop.count
                status = false; //表示 cookie 中存在这个商品
            }
        }
        //如果假设 cookie 中不存在这个商品 条件成立
        if(status){
            cars.push(item)//将商品添加到对象中
        }
        setCookie("car",JSON.stringify(cars));
        //console.log(getCookie("car"));
        alert("恭喜你已经购买"+item.name);
        $("#cartB").text(item.name + shop.count);

    })
}

