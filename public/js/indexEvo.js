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
$('.jobNavFirst li').live('mousemove',function(){   
    var navTopT = parseInt($(this).index()*58) + 'px'  ;  
   
    $('.jobNavThird ').css({
        top : navTopT,
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
function navDisplay(){
    $('.jobNavThird').css('display','none');
}

$.one('.jobNav').hover(function(){
    $.one('.jobNavThird').removeClass('none');
}, function(){
    $.one('.jobNavThird').addClass('none');
});