(function($){
    H.index = {
        init: function(){
            // this.loadImg();
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
                $(this).hasClass("music-close") ?
                    ($(this).removeClass("music-close"), $("#audio")[0].play()) :
                    ($(this).addClass("music-close"), $("#audio")[0].pause())
            })
        },
        loadImg: function(){
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
                }
            }
            setTimeout(function(){
                $("#loading").remove();
                $("#music").removeClass("hide");
                $("#fullpage").removeClass("hide");
                $("#words").typed({
                    strings: ["你觉得孤独就不对了，说明我给你温暖还不够。<br/>你觉得不被理解就不对了 ，说明我得更耐心的感受你。<br/>你觉得黑暗就不对了，说明我没给你带来光明。<br/>你觉得无助就不对了，说明我对你的好还远远不够。<br/>你觉得迷茫就不对了，说明我还没你明确方向……"],
                    typeSpeed: 100,
                    contentType: 'html' // or 'text'
                });
            },2000);
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