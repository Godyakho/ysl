
$(function(){
    var index=0;
    var cindex=0;
    var a=0;
    $('#head').load('header.html')
    $('#foot').load('footer.html')
    $('.middle span').click(function(){
     index=$(this).index();
        $('.banner>div').fadeOut().eq(index).fadeIn(1000);
        $(this).addClass('now').siblings().removeClass('now')
    })
    $('.prev').click(function(){
        index--;
        if(index==-1){
            index=2
        }
        addnow();
    })
    $('.next').click(function(){
        index++;
        if(index==3){
            index=0
        }
        addnow();
    })

    function addnow(){
        $('.middle span').eq(index).addClass('now').siblings().removeClass('now')
        $('.banner>div').fadeOut().eq(index).fadeIn(1000);
    }

    $('.now-line').children().children('i').click(function(){
        var index=$(this).parent().index();
        var move=index>cindex?"fadeInRight":"fadeInLeft";
         cindex=index
        $(this).addClass('i-now').parent().siblings().children('i').removeClass('i-now')
        $('.content').eq(cindex).addClass('con-now').siblings().removeClass('con-now')
        goto(move);
    })


    $('.body-mid-l').click(function(){
        cindex--;
        if(cindex==-1){
            cindex=5
        }
        goto('fadeInLeft');
    })

function goto (move){
    $('.content').eq(cindex).addClass('con-now').siblings().removeClass('con-now')
    $('.now-line div').eq(cindex).children('i').addClass('i-now').parent().siblings().children('i').removeClass('i-now')
    $('.content').find("img,h1,p,h2").removeClass("fadeInLeft fadeInRight").addClass("animated "+move)
}

    $('.body-mid-r').click(function(){
        cindex++;
        if(cindex==6){
            cindex=0
        }
        goto('fadeInRight');
    })


    $('.ywcontent-topimg').hover(function () {
        $(this).children().addClass('animated tada')
    },function(){
        $(this).children().removeClass('animated tada')
    })

    $('.ywcontent-topimg').click(function () {
    $(this).parent().siblings().slideToggle()
        //控制自己
    $(this).parents('.ywcontent').siblings().find('.ywcontent-bot').slideUp()
        //控制其他的收回
    $(this).siblings('.xiangxi').toggleClass('xiangxi-hover')
        //加减号的变化
    $(this).parents('.ywcontent').siblings().find('.xiangxi').removeClass('xiangxi-hover')
        //其他的变回减号
})


$('.xiangxi').click(function(){
    $(this).toggleClass('xiangxi-hover').parents('.ywcontent').siblings().find('.xiangxi').removeClass('xiangxi-hover')
    $(this).parent().siblings().slideToggle()
    $(this).parents('.ywcontent').siblings().find('.ywcontent-bot').slideUp()
})

    $('.team-connect-next').click(function(){
        teamconnectnext();
    })

    $('.team-connect').hover(function(){
        clearInterval(timer)
    },function(){
     timer=setInterval(teamconnectnext,5000)
    })

   timer=setInterval(teamconnectnext,5000)

    function teamconnectnext (){
        a++;
        if(a==5){
            a=0
        }
        $('.team-connect-middle span').eq(a).addClass('now').siblings().removeClass('now')
        $('.teammove-box').animate({left:-550},600,"backIn",function(){
            $('.teammove-box .teammove:first-child').appendTo($('.teammove-box'))
            $('.teammove-box').animate({left:0},0)
        })
    }

    $('.team-connect-prev').click(function(){
        a--;
        if(a==-1){
            a=4
        }
        $('.team-connect-middle span').eq(a).addClass('now').siblings().removeClass('now')
        $(".teammove-box.teammove:last-child").insertBefore(".teammove-box.teammove:first-child");
        $('.teammove-box').animate({left:-550},0,function(){
            $('.teammove-box').animate({left:0},600,"backOut");
        })
    })





})