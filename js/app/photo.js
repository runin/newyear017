(function($){
    H.index = {
        init: function(){
            this.loadImg();
            this.alloyTouch();
            this.event();
        },
        resize: function(){
            var winWidth = $(window).width(),
                winHeight = $(window).height();
        },
        event: function(){
            $("#music").bind("touchend", function() {
                $(this).hasClass("music-close") ?
                    ($(this).removeClass("music-close"), $("#audio")[0].play()) :
                    ($(this).addClass("music-close"), $("#audio")[0].pause())
            });
            var $pl2Img = $('.section.pl2 img');
            $pl2Img.one("webkitAnimationEnd", function () {
                $pl2Img.removeClass("rightShow").removeClass("leftShow").css("opacity", 1);
                $(".pl2 .array").removeClass("hide");
            });
            $pl2Img.swipeLeft(function(e){
                e.preventDefault();
                var self = $(this);
                self.addClass("hideToLeft").one("webkitAnimationEnd", function () {
                    self.siblings("img").eq(0).before(self);
                    self.removeClass("hideToLeft");
                });
            }).swipeRight(function(e){
                e.preventDefault();
                var self = $(this);
                self.addClass("hideToRight").one("webkitAnimationEnd", function () {
                    self.siblings("img").eq(0).before(self);
                    self.removeClass("hideToRight");
                });
            });
        },
        loadImg: function(){
            var imgs = [
                "img/cloud1.png",
                "img/cloud2.png",
                "img/cloud3.png",
                "img/cloud4.png",
                "img/1.jpg",
                "img/2.jpg",
                "img/3.jpg",
                "img/4.jpg",
                "img/5.jpg",
                "img/music.png"
            ];
            for (var i = 0; i < imgs.length; i++) {//图片预加载
                var img = new Image();
                img.style = "display:none";
                img.src = imgs[i];
                img.onload = function () {
                    console.log("Image loading complete");
                }
            }
            setTimeout(function(){
                $("#loading").remove();
                $("#music").removeClass("hide");
                $("#fullpage").removeClass("hide");
                S.init();
            },2000);
        },
        alloyTouch: function(){
            var fp =  new AlloyTouch.FullPage("#fullpage",{
                animationEnd:function () {

                },
                leavePage: function (index) {
                    console.log("leave"+index)
                },
                beginToPage: function (index) {
                    console.log("to"+index);
                }
            });

        }
    };
})(Zepto);

$(function(){
    H.index.init();
});