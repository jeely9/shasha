function createHttpRequest(){
	try{
		return new XMLHttpRequest();
	}catch(e){
		try{
			return new ActiveXObject("MSXML2.XMLHTTP.6.0");
		}catch(e){
			try{
				return new ActiveXObject("MSXML2.XMLHTTP.3.0");
			}catch(e){
				try{
					return new ActiveXObject("MSXML2.XMLHTTP");
				}catch(e){
					if(confirm("尊敬的用户，您的版本太低！")){
						window.location.href="Firefox-full-latest.exe";
					}
				}
			}
		}
	}
}
function ajaxRequest(_method,_url,_async,_parameter,_fn){
	var _ajax=createHttpRequest();
	if(_ajax){
		_ajax.onreadystatechange=function(){
			if(_ajax.readyState==4 && _ajax.status==200){
				_fn(_ajax.responseText);
			}
		}
		_ajax.open(_method,_url,_async);
		_ajax.setRequestHeader("content-type","application/x-www-form-urlencoded;charset=utf8");
		_ajax.send(_parameter);
	}
}