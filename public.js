

//绑定监听shijian addEvevt(element,fn,type) element 需要绑定事件的元素  type 绑定事件的名称（没有on）fn 要绑定的事件对应的函数
//解除绑定监听事件 removeEvent(element,type,fn)  element 需要绑定事件的元素   type 绑定事件的名称（没有on） fn 要绑定的事件对应的函数
// 取消冒泡 stopBubble(e) e 取消冒泡事件对象
// 获取css里面的样式 getStyle(element,key,fake)  element 获取样式的元素 key 获取的样式  fake 伪类
// 随机生成不重复的随机数  makeRandom(num,a,b) num 生成几个随机数 a 起始数字 b 终止数字
// 通过类名过去元素的兼容写法 兼容IE的不支持 用通过标签名获取  byClassName(clsName,ele)  clsName 元素类名   ele 在什么范围内查找元素
// 批量设置样式 cssText  el : 设置样式的元素 strCss : 由样式组成的字符串
// 设置cookie  setCookie(name,val,path,expires)   cookieName（名） cookieVal（值） path 作用域（/全局） expires(有效期天数)
// 获取cookie getCookie(name)  name  设置cookie时候的键值
// 获取当前的时间 currentTime() 以2017-11-20 20：14：14 的格式 
// 解析url中的参数的函数  不需要参数 返回值是一个对象 就是url中参数键值对的形式
//  jqGET方式发送请求 参数 第一个是拼接好的路径加上命令 第二个是得到数据之后执行的回调函数	
// getCookie 获取cookie的值 参数cookie的名称
//setCookie  参数 cookieName  cookieCal path 作用域 expires(天数)





	//设置cookie

			function setCookie(name,val,path,expires){
				var current_date = new Date();
				current_date.setDate(current_date.getDate()+expires);
				//将日期转换成字符串
				var expires_str = current_date.toGMTString();
				//设置cookie 的过期日期
				document.cookie = name +"="+ val +"; path ="+path+"; expires"+ expires_str ;
			}
			
//获取cookie
	function getCookie(cookieName){
			    //获取cookie字符串
			    var strCookie=document.cookie;
			    //将多cookie切割为多个名/值对
			    var arrCookie=strCookie.split("; ");
			    var cookieValue = null;
			    //遍历cookie数组,处理每个cookie对
			    for(var i=0;i<arrCookie.length;i++){
			        var arr=arrCookie[i].split("=");
			        //找到cookie,并返回它的值
			        if(cookieName==arr[0]){
			            cookieValue=(arr[1]);
			            break;
			        }
			    }
			    if(!cookieValue){
			        cookieValue = "";
			    }
			    cookieValue = decodeURIComponent(cookieValue);
			    return cookieValue;
			};

// get 方式获取数据的函数
	function getGata(url,callback){
		$.ajax({
			url:url,
			type:"GET",
			async:true,
			dataType:"json",
			success:function(data){
				callback(data);
			}
		})
	}


// 解析 url 中的参数
function GetRequest(){ 
		var url = location.search; //获取url中"?"符后的字串 
		var theRequest = new Object(); 
		if (url.indexOf("?") != -1) { 
		var str = url.substr(1); 
		strs = str.split("&"); 
		for(var i = 0; i < strs.length; i ++) { 
		theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]); 
		} 
		} 
		return theRequest; 
	}



function addEvevt(element,fn,type){
	if(element.addEventListener){
		element.addEventListener(type,fn,false);
	}else if(element.attachEvent){
		element.attachEvent('on' + type,fn,);
	}else{
		element['on' + type]=fn;
	}
}
function removeEvent(element,type,fn){
	if(element.removeEventListener){
		element.removeEventListener(type,fn,false);
	}else if(element.detachEvent){
		element.detachEvent('on' + type,fn,);
	}else{
		element['on' + type]=null;
	}
}
function stopBubble(e){
	if(e && e.stopPropagation){
		e.stopPropagation();
	}else{
		e.cancelBubble = true;
	}
}
function getStyle(element,key,fake){
			if(fake===undefined){
				fake=null;
			}
			if(element.currentStyle){
				return element.currentStyle[key];
			}else{
				return getComputedStyle(element,fake)[key];
			}
	}
function makeRandom(num,a,b){
	var arr = [];
	for(var i=0;i<num;i++){
		arr[i]=parseInt(Math.random()*(b-a)+a);
		for(var j=0;j<i;j++){
			if(arr[i]==arr[j]){
				i--;
			}	
		}
	}
	return arr;
}
function byClassName(clsName,ele){  
	// 如果当前浏览器支持通过类名获取元素，直接返回  
	if(document.getElementsByClassName){  
	    return document.getElementsByClassName(clsName) || ele.getElementsByClassName(clsName);  
	}  
	else{
	    var nodes = ele.getElementsByTagName("*")||document.getElementsByTagName("*");
	    var eles=[],       
	    clsNames = [];  
	    for(var i = 0;i < nodes.length; i++){  
	        clsNames = nodes[i].className.split(' ');   
	        for(var j=0;j < clsNames.length;j++){  
	            if(clsNames[j]==clsName){  
	                eles.push(nodes[i]);  
	                break;  
	            }  
	        }  
	    }  
	    return eles;  
	}  	     
}
function setStyle(el, strCss){
	function   endsWith(str, suffix) { 
	    var l = str.length - suffix.length;
	    return l >= 0 && str.indexOf(suffix, l) == l;
	}
		var sty = el.style,
		    cssText = sty.cssText;
		if(!endsWith(cssText, ';')){
		    cssText += ';';
		}
		sty.cssText = cssText + strCss;
}
function setCookie(name,val,path,expires){
	var current_date = new Date();
	current_date.setDate(current_date.getDate()+expires);
	//将日期转换成字符串
	var expires_str = current_date.toGMTString();
	//设置cookie 的过期日期
	document.cookie = name +"="+ val +"; path ="+path+"; expires"+ expires_str ;
}
function getCookie(name){
				var str =document.cookie;
				var start = str.indexOf(name + "=") + name.length + 1;
				var end = str.indexOf(";",start);
				end = end == (-1) ? str.length : end;
				var tring = str.substring(start,end);
				return tring;
			}
function currentTime(){
	var time = new Date();
	var current_time = time.getFullYear()+"-"+time.getMonth()+"-"+time.getDate()+" "+time.getHours()+":"+time.getMinutes()+":"+time.getSeconds();
	return current_time;
}


