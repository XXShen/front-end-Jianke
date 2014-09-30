
function loginShow () {	
    $("#shadeBg").css({
    	background: '#000',
        display: "block",
        height: $(document).height()
    });
    var yscroll = document.documentElement.scrollTop;
    var h1 = $(document).height();
    var h2 = $(document).scrollTop();
    var h3 = $(window).height();
    var h4 = h2 + h3 / 2;
    $("#setLogin").css("top", h4 - 375);
    
    $("#setLogin").removeClass("none ").addClass('animationLogin');
}
$('.register').click(function() {		
	loginShow();
})
function CloseLoginDiv() {
    
    $('#setLogin').addClass(' none');
    $('#shadeBg').hide();   
}
$('#shadeClosed a').click(function() {		
	CloseLoginDiv();
})
var jobNav01 = [{
				"trade":"hulianwang",//行业
				"jobType":['jishu','chanpin','yunying','jishu','sheji'],
				"text":['技术','产品','运营','技术','设计','职能']
				},
				{
				"trade":"hulianwang2",
				"jobType":['jishu1','chanpin1','yunying1','jishu1','sheji1'],
				"text":['技术1','产品1','运营1','技术1','设计1','职能1']
				}];
var jobNav02 = [{
				'jobType':'jishu',//职能
				'jutizhineng':{'name':'后端开发','jobName':['java','php','java2','php1'],'jobUrl':['http://www.careerintlinc.com/','http://www.careerintlinc.com/','http://www.careerintlinc.com/','http://www.careerintlinc.com/']}
				},
				{
				'jobType':'jishu',//职能
				'jutizhineng':{'name':'测试','jobName':['java','php'],'jobUrl':['http://www.careerintlinc.com/','http://www.careerintlinc.com/']}
				},
				{
				'jobType':'jishu',//职能
				'jutizhineng':{'name':'运维','jobName':['java','php'],'jobUrl':['http://www.careerintlinc.com/','http://www.careerintlinc.com/']}
				},
				{
				'jobType':'jishu',//职能
				'jutizhineng':{'name':'项目管理','jobName':['java','php'],'jobUrl':['http://www.careerintlinc.com/','http://www.careerintlinc.com/']}
				},
				{
				'jobType':'chanpin',//职能
				'jutizhineng':{'name':'原型设计','jobName':['java','php'],'jobUrl':['http://www.careerintlinc.com/','http://www.careerintlinc.com/']}
				},
				{'jobType':'chanpin',//职能
				'jutizhineng':{'name':'交互设计','jobName':['java','php'],'jobUrl':['http://www.careerintlinc.com/','http://www.careerintlinc.com/']}
				},
				{
				'jobType':'chanpin',//职能
				'jutizhineng':{'name':'流程分析师','jobName':['java','php'],'jobUrl':['http://www.careerintlinc.com/','http://www.careerintlinc.com/']}
				},
				{
				'jobType':'chanpin',//职能
				'jutizhineng':{'name':'项目管理','jobName':['java','php'],'jobUrl':['http://www.careerintlinc.com/','http://www.careerintlinc.com/']}
				},
				{
				'jobType':'chanpin',//职能
				'jutizhineng':{'name':'项目管理2','jobName':['java','php'],'jobUrl':['http://www.careerintlinc.com/','http://www.careerintlinc.com/']}
				}];						
				


var top01;
function jabNavSecond(){//第二级联工作导航打开
	$('.jobNavFirst li').bind('mousemove',function(){	
		$('.jobNavThird ').css({
			display : 'none'
		});
		var navTopS = $(this).index()*58 + 'px';//计算二级导航该出现的位置
		top01 = navTopS;
		$('.jobNavSecond ').css({
			top : navTopS,
			display : 'block'
		});		
				
		$('.jobNavSecond ul li').detach();  //清空二级导航内容
		var trade = $(this).attr('trade');//匹配二级导航和数据对应的内容
		var jobType,
			text;			
		$(jobNav01).each(function(i){//对应内容赋值
			if(this.trade === trade){
				jobType = this.jobType;
				text = this.text;
			}
		});
		var NavSecondLi1 = '<li><a href="javascript:void(0);" jobType="'
		var NavSecondLi2 = '">'
		var NavSecondLi3 = '</a></li>'
		$(jobType).each(function(i){
			var NavSecondLi = NavSecondLi1 + jobType[i] + NavSecondLi2 + text[i] + NavSecondLi3;
			
			$('.jobNavSecond ul').append(NavSecondLi);//填充内容
		});
	})
}

jabNavSecond();

$('.jobNavSecond li').live('mousemove',function(){	
	var navTopT = parseInt($(this).index()*58) + parseInt(top01) + 'px'  ;	
	$('.jobNavThird ').css({
		top : navTopT,
		display : 'block'
	});			
	$('.jobNavThird .list dl').detach();  //清空三级导航内容
	var jobType = $(this).children("a").attr('jobType');//匹配三级导航和数据对应的内容	
	var newJobType = new Array,
		name,
		jobName,	
		jobUrl,
		NavSecondLi,		
		navThirdDl01 = "<dl><dt>",
		navThirdDl02 = "</dt><dd>",
		navThirdDl03 = "</dd></dl>";
	$(jobNav02).each(function(i){//对应内容赋值
		if(this.jobType === jobType){	
			newJobType.push(jobNav02[i]);			
		}		
	});
	$(newJobType).each(function(i){
		name = this.jutizhineng.name;
		jobName = this.jutizhineng.jobName;
		jobUrl = this.jutizhineng.jobUrl;
		var jobList = new Array,	
			jobSeed;		
		$(jobName).each(function(i){
			jobSeed = '<span><a href="' + jobUrl[i] + '" class="hotJob">' + jobName[i] + '</a></span>'
			jobList.push(jobSeed);
		})
		$(newJobType).each(function(i){
			 NavSecondLi = navThirdDl01 + name + navThirdDl02 + jobList.join(' ') + navThirdDl03;				
			//$('.jobNavThird ').append(NavSecondLi);//填充内容
		});				
		if( i%3 === 0){
			$('.jobNavThird .list').eq(0).append(NavSecondLi);
		}else if( i%3 === 1){
			$('.jobNavThird .list').eq(1).append(NavSecondLi); 
		}else if( i%3 === 2){
			$('.jobNavThird .list').eq(2).append(NavSecondLi); 
		}
	})
})


