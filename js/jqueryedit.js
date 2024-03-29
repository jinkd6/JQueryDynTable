//页面载入时，让td都有一个oncllick事件  
$(document).ready(function(){  
    //找到所有td节点  
    var tds = $("td");  
    //给所有td节点添加点击事件  
    tds.click(tdclick);  
	//tds.focus(tdclick);  
});  
//td被点击的事件  
function tdclick(){
    //0 保存当前td节点  
    var td = $(this);  
    //1 取出当前td的文本内容保存起来  
    var text = td.text(); 
    //2 清空td里面的内容  
    td.html("");//也可以用td.empty();  
    //3 建立文本框，也就是input的节点  
    var input = $("<input>");  
    //4 设置文本框值，即保存的文本内容  
    input.attr("value",text); 
	input.attr("width","135px"); 
	input.attr("height","25px"); 
    //4.5让文本框可以响应键盘按下并弹起的事件  
    input.keyup(function(event){  
        //0 获取当前用户按下的键值  
        //截取不同浏览器获取事件对象的差异  
        var myEvent = event || window.event;  
        var kcode = myEvent.keyCode;  
        //1 判断是否是回车按下  
        if(kcode == 13){  
            var inputnode = $(this);  
            //2 获取当前文本框的内容  
            var inputtext = inputnode.val();  
            //3 清空td里面的内容  
            var tdNode = inputnode.parent();  
            //4 保存文本框的内容填充到td中  
            tdNode.html(inputtext);  
            //5 让td重新拥有点击事件  
            tdNode.click(tdclick);  
        }  
    });  
	input.blur(function(event){  
		    var inputnode = $(this);  
            //2 获取当前文本框的内容  
            var inputtext = inputnode.val();  
            //3 清空td里面的内容  
            var tdNode = inputnode.parent();  
            //4 保存文本框的内容填充到td中  
            tdNode.html(inputtext);  
            //5 让td重新拥有点击事件  
            tdNode.click(tdclick);  
    }); 
    //5 将文本内容加入td  
    td.append(input);//也可input.appendto(td)  
    //5.5让文本框文字被高亮选中  
    //需要将jquery的对象转换成dom对象  
    var inputdom = input.get(0);  
    inputdom.select();  
    //6 需要清除td上的点击事件  
    td.unbind("click");  
} 