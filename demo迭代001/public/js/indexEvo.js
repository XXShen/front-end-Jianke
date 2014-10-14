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
    $('.jobNavFirst dl').css({
        background:'#dde1e4'
    })    
    $(this).css({
        background: '#d0d6db'
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
$('.leftSide').mouseleave (function(){
    $('.jobNavFirst dl').css({
        background:'#dde1e4'
    })  
    $('.jobNavThird ').fadeOut();
})

/*
$(function() {
    $(document).bind("click", function(e) {
        var target = $(e.target); //表示当前对象，切记，如果没有e这个参数，即表示整个BODY对象
        
        $('.jobNavFirst dl').css({
            background:'#dde1e4'
        }) 
        $('.jobNavThird ').css({
           
            display: 'none'
        });
    })
})
*/


$('.color01').hover(function() {
    $(this).css(
        'background-color', '#927646'
    )
}, function() {
    $(this).css(
        'background-color', '#fff'
    )
})

$('.color02').hover(function() {
    $(this).css(
        'background-color', '#e18636'
    )
}, function() {
    $(this).css(
        'background-color', '#fff'
    )
})

$('.color03').hover(function() {
    $(this).css(
        'background-color', '#dc341d'
    )
}, function() {
    $(this).css(
        'background-color', '#fff'
    )
})

$('.color04').hover(function() {
    $(this).css(
        'background-color', '#89ac20'
    )
}, function() {
    $(this).css(
        'background-color', '#fff'
    )
})