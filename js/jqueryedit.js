//ҳ������ʱ����td����һ��oncllick�¼�  
$(document).ready(function(){  
    //�ҵ�����td�ڵ�  
    var tds = $("td");  
    //������td�ڵ���ӵ���¼�  
    tds.click(tdclick);  
	//tds.focus(tdclick);  
});  
//td��������¼�  
function tdclick(){
    //0 ���浱ǰtd�ڵ�  
    var td = $(this);  
    //1 ȡ����ǰtd���ı����ݱ�������  
    var text = td.text(); 
    //2 ���td���������  
    td.html("");//Ҳ������td.empty();  
    //3 �����ı���Ҳ����input�Ľڵ�  
    var input = $("<input>");  
    //4 �����ı���ֵ����������ı�����  
    input.attr("value",text); 
	input.attr("width","135px"); 
	input.attr("height","25px"); 
    //4.5���ı��������Ӧ���̰��²�������¼�  
    input.keyup(function(event){  
        //0 ��ȡ��ǰ�û����µļ�ֵ  
        //��ȡ��ͬ�������ȡ�¼�����Ĳ���  
        var myEvent = event || window.event;  
        var kcode = myEvent.keyCode;  
        //1 �ж��Ƿ��ǻس�����  
        if(kcode == 13){  
            var inputnode = $(this);  
            //2 ��ȡ��ǰ�ı��������  
            var inputtext = inputnode.val();  
            //3 ���td���������  
            var tdNode = inputnode.parent();  
            //4 �����ı����������䵽td��  
            tdNode.html(inputtext);  
            //5 ��td����ӵ�е���¼�  
            tdNode.click(tdclick);  
        }  
    });  
	input.blur(function(event){  
		    var inputnode = $(this);  
            //2 ��ȡ��ǰ�ı��������  
            var inputtext = inputnode.val();  
            //3 ���td���������  
            var tdNode = inputnode.parent();  
            //4 �����ı����������䵽td��  
            tdNode.html(inputtext);  
            //5 ��td����ӵ�е���¼�  
            tdNode.click(tdclick);  
    }); 
    //5 ���ı����ݼ���td  
    td.append(input);//Ҳ��input.appendto(td)  
    //5.5���ı������ֱ�����ѡ��  
    //��Ҫ��jquery�Ķ���ת����dom����  
    var inputdom = input.get(0);  
    inputdom.select();  
    //6 ��Ҫ���td�ϵĵ���¼�  
    td.unbind("click");  
} 