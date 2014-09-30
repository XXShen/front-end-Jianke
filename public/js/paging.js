$(document).ready(function () {
    var pager = $('#paging-odd-wrap').paging({
        pageNum: 100,
        showPagingNavNum: 5,
        onPageChange: function(pageAt){
            console.log(pageAt);
        }
    });
    var $selectPager = $('#page-num');
    $selectPager.change(function(){
        pager.setPageAt(parseInt(this.value, 10));
    });
    
});

