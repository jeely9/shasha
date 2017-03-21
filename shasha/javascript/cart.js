/**
 * Created by Administrator on 2016/8/27.
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



}

window.onload=function(){
    var _Face=new Face();
    // _Face.menu()
    _Face.login();
    _Face.blurUs();
   // _Face.myCart();
    _Face.mycoin();

}
$(function(){
    var cars=getCookie("car");
    shopCarShow(JSON.parse(cars || "[]"));
})
function shopCarShow(data){
    var str='<li class="kuang clear">'+
        '<div class="shop-img left">'+
        '<img src="../images/{{url}}" alt="{{alt}}" style="width:80px;height:80px;"/>'+
        '</div>'+
        '<p class="shop-text left">'+
        '<span class="name">{{name}}</span>  '+
        '<span class="del" id="{{id}}">-</span>  '+
        '<span class="count">{{count}}</span>  '+
        '<span class="add" id="{{id}}">+</span>  '+
        '<span class="price">{{price}}元</span>'+
        '<b class="total">{{total}}</b>'+
        '</p>'+

        '<div class="del-btn left" data-key="{{id}}">删除</div>'+
        '</li>';
    var html ="";
    for(var i=0;i<data.length;i++){
        var item =data[i];
        html+=format(str,item);
    }
    $(".item",".box").append(html);

    function totalSum(){
        var _total=$(".total");
        //alert(_total)
        var _num=0;
        for(var i=0;i<_total.length;i++){
            var $a=$(_total[i]).text();
            //console.log(parseInt($a))
            _num+=parseInt($a);
        }
        $(".zongjia").text(_num);

    }
    totalSum()
    $(".kuang").on("click",".del",function(){
        var $count = $(".count",$(this).parent());
        var $price=$(".price",$(this).parent());
        var $total=$(".total",$(this).parent());

        var num = parseInt($count.text());
        var price=($price.text());
        //console.log(price)
        var pf=price.split("￥")[1].split("元")[0]
//分割成字符串，取出数字
        var total=$total.text();


        // console.log(pf)
        //console.log(total)
        // console.log(num)
        if(num>0){
            $count.text(num - 1);
            $total.text((num - 1)*pf);
            //$(".zongjia").text(allprice)
            totalSum();
        }else{
            num=0;
            pf=0;
        }

        var key=$(this).attr("id");
        //console.log(key)
        /*console.log(this,data[1].count)
        console.log(this,data[1].id)*/
        for(var i=0,len = data.length;i<len;i++){
            var item = data[i]; //拿到单个商品数据
            //比对 商品中的 id 与需要删除的商品的 id 是否一致
            if(item.id == key){
               // console.log(item.count)
                item.count--;
                //console.log(item.count)
                break;
            }
        }
        //console.log(data);
        setCookie("car",JSON.stringify(data));



    });
    $(".box").on("click",".del-btn",function(){
        var key=$(this).data("key");
        //console.log(key);
        //alert(key)
        var index=0;
        //循环遍历 购物车中的数据
        for(var i=0,len = data.length;i<len;i++){
            var item = data[i]; //拿到单个商品数据
            //比对 商品中的 id 与需要删除的商品的 id 是否一致
            if(item.id == key){
                index = i;
                break;
            }
        }
        var item=data[index];
        //splice:第一个参数是删除元素下标，第二个是要删除几个元素
        data.splice(index,1);
        totalSum();
        //将修改后的数据重新写入 cookie
        setCookie("car",JSON.stringify(data));
        //console.log(getCookie("car"));
        //删除页面中Dom节点
        $(this).parents("li").remove();
        alert("成功删除"+item.name+"请选择心爱的商品吧");

    });

    $(".shop-text").on("click",".add",function(){
        //alert("ok")
        var $count = $(".count",$(this).parent());
        var num = parseInt($count.text());
        var $price=$(".price",$(this).parent());
        var $total=$(".total",$(this).parent())
        var num = parseInt($count.text());
        var price=($price.text());
        var pf=price.split("￥")[1].split("元")[0]

        var total=$total.text();
        $count.text(num + 1);

        $total.text((num + 1)*pf);
        totalSum();
        //console.log(this);

       //console.log(data[0].id)
        var key=$(this).attr("id");
        //console.log(key)
        /*console.log(this,data[1].count)
         console.log(this,data[1].id)*/
        for(var i=0,len = data.length;i<len;i++){
            var item = data[i]; //拿到单个商品数据
            //比对 商品中的 id 与需要删除的商品的 id 是否一致
            if(item.id == key){
                //console.log(item.count)
                item.count++;
               // console.log(item.count)
                break;
            }
        }
        //console.log(data);
        setCookie("car",JSON.stringify(data));

    })
    $(".cenbottom").on("click",".qk",function() {
        alert("您确定要抛弃我嘛")
        $(".box").remove();

    });


}
