$('.seachSift li a').click(function  () {
	var evenClass = $(this).attr('class');
	if( evenClass === 'normal'){
		$(this).attr('class','pitchOn');
	}else{
		$(this).attr('class','normal');
	}
})
$('.mainNav span').live('mousemove',
	function  () {
		$(this).addClass('closedEmHover').removeClass('closedEm');
	}
)
$('.mainNav span').live('mouseout',
	function  () {
		$(this).addClass('closedEm').removeClass('closedEmHover');
	}
)
function cteatLabel(type,text){//创建右侧导航标签
	this.type = type;
	this.text = text; 	
	var htmlTxt = '<span class="closedEm" freeStyleType="'+ this.type + '">' + this.text + '<em class=""></em></span>'	
	$('.mainNav').append(htmlTxt);
}
function delLabel(type){//删除右侧导航标签			
	$('.mainNav span').each(function(i){
		if( $(this).attr('freestyletype') === type ){
			$(this).detach();
		}
	})	
}
function hideField(type,text){//隐藏左侧删选list
	$('.field ul').each(function(i){
		if( $(this).attr('freestyletype') === type ){
			$(this).parent('.field').hide(200);
			$(this).parent().prev('.siftMode').children('span').text(text);		
			$(this).parent().prev('.siftMode').show(200);
		}
	})	
}
function showField(type){//展开左侧筛选list
	$('.field').each(function(i){
		if( $(this).children('ul').attr('freeStyleType') == type){
			$(this).show(200);			
			$(this).prev('.siftMode').hide(200);
		}		
	})
}
$('.field li').click(function(){
	var type = $(this).parent('ul').attr('freeStyleType');
	var text = $(this).text();	
	cteatLabel(type,text);
	hideField(type,text);
})
$('.mainNav span em').live('click',function(){
	var type = $(this).parent('span').attr('freeStyleType');
	showField(type);
	delLabel(type);
})
$('.siftMode').click(function(){
	var type = $(this).attr('freeStyleType');
	showField(type);
	delLabel(type);
})




function loginShow() {
    $("#shadeBg").css({
        background: '#000',
        display: "block",
        height: $(document).height()
    });
    var yscroll = document.documentElement.scrollTop;
    
    var h1 = $(document).scrollTop();
    
    
    $("#setLogin").css("top", h1);

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
    'jobType': 'jishu', //职能
    'jutizhineng': {
        'name': '后端开发',
        'jobName': ['java', 'php', 'java2', 'php1'],
        'jobUrl': ['http://www.careerintlinc.com/', 'http://www.careerintlinc.com/', 'http://www.careerintlinc.com/', 'http://www.careerintlinc.com/']
    }
}, {
    'jobType': 'jishu', //职能
    'jutizhineng': {
        'name': '测试',
        'jobName': ['java', 'php'],
        'jobUrl': ['http://www.careerintlinc.com/', 'http://www.careerintlinc.com/']
    }
}, {
    'jobType': 'jishu', //职能
    'jutizhineng': {
        'name': '运维',
        'jobName': ['java', 'php'],
        'jobUrl': ['http://www.careerintlinc.com/', 'http://www.careerintlinc.com/']
    }
}, {
    'jobType': 'jishu', //职能
    'jutizhineng': {
        'name': '项目管理',
        'jobName': ['java', 'php'],
        'jobUrl': ['http://www.careerintlinc.com/', 'http://www.careerintlinc.com/']
    }
}, {
    'jobType': 'chanpin', //职能
    'jutizhineng': {
        'name': '原型设计',
        'jobName': ['java', 'php'],
        'jobUrl': ['http://www.careerintlinc.com/', 'http://www.careerintlinc.com/']
    }
}, {
    'jobType': 'chanpin', //职能
    'jutizhineng': {
        'name': '交互设计',
        'jobName': ['java', 'php'],
        'jobUrl': ['http://www.careerintlinc.com/', 'http://www.careerintlinc.com/']
    }
}, {
    'jobType': 'chanpin', //职能
    'jutizhineng': {
        'name': '流程分析师',
        'jobName': ['java', 'php'],
        'jobUrl': ['http://www.careerintlinc.com/', 'http://www.careerintlinc.com/']
    }
}, {
    'jobType': 'chanpin', //职能
    'jutizhineng': {
        'name': '项目管理',
        'jobName': ['java', 'php'],
        'jobUrl': ['http://www.careerintlinc.com/', 'http://www.careerintlinc.com/']
    }
}, {
    'jobType': 'chanpin', //职能
    'jutizhineng': {
        'name': '项目管理2',
        'jobName': ['java', 'php'],
        'jobUrl': ['http://www.careerintlinc.com/', 'http://www.careerintlinc.com/']
    }
}];

var top01;
$('.jobNavFirst dl').mouseenter(function() {
    var navTopT = $(this).offset().top - $(this).height(); + 'px';
    $(this).css({
        background:'#d0d6db'
    })
    $('.jobNavThird ').css({
        top: navTopT,
    });
    $('.jobNavThird ').slideDown();
    $('.jobNavThird .list dl').detach(); //清空三级导航内容
    var jobType = $(this).attr('jobType'); //匹配三级导航和数据对应的内容    
    var newJobType = new Array,
        name,
        jobName,
        jobUrl,
        NavSecondLi,
        navThirdDl01 = "<dl><dt>",
        navThirdDl02 = "</dt><dd>",
        navThirdDl03 = "</dd></dl>";
    $(jobNav02).each(function(i) { //对应内容赋值
        if (this.jobType === jobType) {
            newJobType.push(jobNav02[i]);
        }
    });
    $(newJobType).each(function(i) {
        name = this.jutizhineng.name;
        jobName = this.jutizhineng.jobName;
        jobUrl = this.jutizhineng.jobUrl;
        var jobList = new Array,
            jobSeed;
        $(jobName).each(function(i) {
            jobSeed = '<span><a href="' + jobUrl[i] + '" class="hotJob">' + jobName[i] + '</a></span>'
            jobList.push(jobSeed);
        })
        $(newJobType).each(function(i) {
            NavSecondLi = navThirdDl01 + name + navThirdDl02 + jobList.join(' ') + navThirdDl03;
            //$('.jobNavThird ').append(NavSecondLi);//填充内容
        });
        if (i % 3 === 0) {
            $('.jobNavThird .list').eq(0).append(NavSecondLi);
        } else if (i % 3 === 1) {
            $('.jobNavThird .list').eq(1).append(NavSecondLi);
        } else if (i % 3 === 2) {
            $('.jobNavThird .list').eq(2).append(NavSecondLi);
        }
    })
})
$('.collectButtom').live('click',function(){
	$(this).addClass('collectButtomChoose').removeClass('collectButtom');
	var num = parseInt($(this).find('em').html());
	$(this).find('em').html(num + 1);
})

$('.leftSide').mouseleave (function(){
    $('.jobNavFirst dl').css({
        background:'#dde1e4'
    })  
    $('.jobNavThird ').fadeOut();
})

