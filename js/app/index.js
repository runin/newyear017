(function($){
    H.index = {
        init: function(){
            this.loadImg();
            this.touch();
            this.swap();
            this.event();
        },
        resize: function(){
            var winWidth = $(window).width(),
                winHeight = $(window).height();
        },
        event: function(){
            $("#music").bind("touchend", function() {
                $(this).hasClass("music_close") ?
                    ($(this).removeClass("music_close"), $("#audio")[0].play()) :
                    ($(this).addClass("music_close"), $("#audio")[0].pause())
            })
        },
        loadImg: function(){
            $(".loading-icon").typed({
                strings: ["加载中~"],
                typeSpeed: 100
            });

            var imgs = [
                "img/cloud1.png",
                "img/cloud2.png",
                "img/cloud3.png",
                "img/cloud4.png",
                "img/cloud5.png",
                "img/cloud6.png",
                "img/music.png"
            ];
            for (var i = 0; i < imgs.length; i++) {//图片预加载
                var img = new Image();
                img.style = "display:none";
                img.src = imgs[i];
                img.onload = function () {
                    console.log("Image loading complete");
                    // $("#loading").remove();
                    $("#music").removeClass("hide");
                }
            }
        },
        touch: function(){
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


        },
        swap: function(){
            var array1 = [1, 5, 0, 7, 3, 2, 6],
                middleValue = null;
            console.log("原值array1="+array1);
            for(var i = 0,len = array1.length; i < len; i++){
                for(var j = i+1; j < len; j++){
                    if(array1[i] < array1[j]){
                        middleValue = array1[i];
                        array1[i] = array1[j];
                        array1[j] = middleValue;
                    }
                }

            };
            console.log("排序array1="+array1);
        }
    };
})(Zepto);

$(function(){
    H.index.init();
});