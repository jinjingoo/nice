$(function () {
    $(window).scroll(function () {
        var winHeight = $(window).height() 
        var winHeightCL = $(window).height()
        var winHeightCC = $(window).height()
        var winHeightCR = $(window).height()
        var scTop = $(this).scrollTop()
        var scbottom = $(document).height() - $(window).height() - $(window).scrollTop();
        var subBar = $(".subpage-upper")
        var CLbtn = $('#credit-life button')
        var CCbtn = $('#credit-care button')
        var CRbtn = $('#credit-report button')
        var CRbtn = $('#credit-report button')
        console.log(scTop);
        console.log(scbottom);
        if( scTop > 140 ){
            subBar.addClass("fixed")
          }else{
            subBar.removeClass("fixed")
          }
          if( scbottom > 360 ){
            CLbtn.addClass("fixed")
          }else{
            CLbtn.removeClass("fixed")
          }
          if( scbottom > 410 ){
            CCbtn.addClass("fixed")
          }else{
            CCbtn.removeClass("fixed")
          }
          if( scbottom > 360 ){
            CRbtn.addClass("fixed")
          }else{
            CRbtn.removeClass("fixed")
          }
    })
    var checkAll = $('#new-account #all')
    var checkBox = $('#new-account .check-box input')
    $(checkAll).click(function () {
      if ($(checkAll).is(":checked")) {
        $("input[name=chk]").prop("checked", true);
      }
			else $("input[name=chk]").prop("checked", false);
      
    })

});
