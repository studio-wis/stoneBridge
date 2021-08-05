/* main.js */
var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;


$(function() {
    $("#headers").load("common/header.html");
    $("#footers").load("common/footer.html");


    /* a 태그 경로 제거 */
    $('a[href="#"]').click(function(e) {
        e.preventDefault();
    })





    // header 

    $(document).on("click", "header .menu-btn", function() {
        $(this).toggleClass("close");
        $("#open-menu").slideToggle(300);

        if ($(this).hasClass("close")) {
            $("html, body").addClass("hidden")
        } else {
            $("html, body").removeClass("hidden");
        }

    });


    // footer text change event 

    $(document).on("mouseenter", "footer .wsite-link", function() {
        $(this).find("a").text("Stonebridge Capital");
    });
    $(document).on("mouseleave", "footer .wsite-link", function() {
        $(this).find("a").text("Web Site");
    });



    $(".user-setting .cateBox .placeholder").click(function() {
        $(".user-setting .cateBox").toggleClass("on");

        if ($(".user-setting .cateBox").hasClass("on")) {
            $(".user-setting .cateBox .placeholder").find("i").text("arrow_drop_up");
        } else {
            $(".user-setting .cateBox .placeholder").find("i").text("arrow_drop_down");
        }

        $(".user-setting .cateBox .depth01").toggleClass("slide");
        $(".user-setting .cateBox .depth02").removeClass("slide");
    });

    $(".user-setting .cateBox .depth01>li>p").click(function() {
        $(this).next().toggleClass("slide");
    });



    $(document).mouseup(function(e) {
        var sel_hide = $(".cateBox");
        if (sel_hide.has(e.target).length === 0) {
            sel_hide.find(".depth01").removeClass("slide");
            $(".user-setting .cateBox .depth02").removeClass("slide");
            $(".user-setting .cateBox").removeClass("on");
            $(".user-setting .cateBox .placeholder").find("i").text("arrow_drop_down");
        }
    });


    // crew popup 

    $("#crew .crew-box").click(function() {
        $(this).next().animate({ right: "0" }, 600, "easeInQuad");
        // $(".popup .brief-info p").delay(600).animate({ opacity: "1" }, 500);
        $(".popup .fixed-element p").addClass("ani");
        $(".popup .fixed-element h1").addClass("ani");
        $("header .logo").hide();
        $("header .back-btn").show();
        $("html, body").addClass("hidden");
    });

    $(document).on("click", "header .back-btn", function() {
        $(".popup").animate({ right: "-100%" }, 600, "easeInQuad");
        // $(".popup .brief-info p").delay(600).animate({ opacity: "0" }, 500);
        $(".popup .fixed-element p").removeClass("ani");
        $(".popup .fixed-element h1").removeClass("ani");
        $("header .back-btn").hide();
        $("header .logo").show();
        $("html, body").removeClass("hidden");
    });


    // news tab_menu

    $("#news .tab-menu li").click(function() {
        $("#news .tab-menu li").removeClass("on");
        var tab_on = $(this).index();
        $("#news .tab-menu li:eq(" + tab_on + ")").addClass("on");
    });

    $("#news .tab-menu li").hover(function() {
        $("#news .tab-menu li").removeClass("on");
    });
    $("#news .tab-menu").mouseleave(function() {
        $("#news .tab-menu li:eq(0)").addClass("on");
    });

    $(document).on("click", ".news-href header .back-btn", function() {
        $(this).prop("href", "news.html");
    });
    $(document).on("click", ".main-href header .back-btn", function() {
        $(this).prop("href", "index.html");
    });


    // screen mode

    $(document).on("click", "#open-menu .screen-mode", function() {
        $(this).toggleClass("change");
        if ($("#open-menu .screen-mode").hasClass("change")) {
            $("#open-menu .screen-mode").find("i").text("dark_mode");
        } else {
            $("#open-menu .screen-mode").find("i").text("circle");
        }
    });


});
$(function() {
    // pc 감지
    if (!isMobile) {



    }
});

$(function() {
    // mobile 감지
    if (isMobile) {

        $("#contact marquee").attr("scrollamount", "10");


    }
});