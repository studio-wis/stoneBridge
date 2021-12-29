/* main.js */
var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;

$(function() {
    $("#headers").load("common/header.html");
    $("#footers").load("common/footer.html");
})

window.onload = function() {

    var modeSelect = document.getElementById("modeSelect");
    if (modeSelect) {
        modeSelect.addEventListener("click", () => {
        
            const html = document.documentElement;

            if (html.classList.contains("dark")) {
                html.classList.remove("dark");
                localStorage.setItem("darkTheme", "false");
            } else {
                html.classList.add("dark");
                localStorage.setItem("darkTheme", "true");
            }

        });
    }

    const storedTheme = localStorage.getItem("darkTheme");

    if (storedTheme !== null) {
        if (storedTheme === "true") {
            document.documentElement.classList.add("dark");
            $("#open-menu .screen-mode").addClass("change");
            $("#open-menu .screen-mode").find("i").text("dark_mode");
        } else {
            document.documentElement.classList.remove("dark");
            $("#open-menu .screen-mode").removeClass("change");
            $("#open-menu .screen-mode").find("i").text("circle");
        }
    }

    /* a 태그 경로 제거 */
    $('a[href="#"]').click(function(e) {
        e.preventDefault();
    })

    // header 

    $(document).on("click", "header .menu-btn", function() {
        $(this).toggleClass("close");
        $("header .logo").toggleClass("close");
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
        $(this).find("a").text("Family Site");
    });



    // 21/12/29 line 75 searchBox 수정
    $(".user-setting .cateBox .placeholder").click(function() {
        $(".user-setting .cateBox").toggleClass("on");

        $(".user-setting .cateBox .depth01").toggleClass("slide");
        $(".user-setting .cateBox .depth02").removeClass("slide");
    });

    $(".user-setting .cateBox .depth01>li .cateHead").click(function () {
        $(this).next().toggleClass("slide");
        $(this).find(".arr-indi").toggleClass("on");
    });

    $(".user-setting .cateBox .depth01 .menu01 .cateHead").click(function () {
        if ($(".user-setting .cateBox .depth01 .menu01").find(".depth02").hasClass("slide")) {
            $(this).find("a").css("border", "none");
        } else {
            $(this).find("a").css("border-bottom", "1px solid #fff");
        }
    });

    
    $(document).mouseup(function(e) {
        var sel_hide = $(".cateBox");
        if (sel_hide.has(e.target).length === 0) {
            sel_hide.find(".depth01").removeClass("slide");
            $(".user-setting .cateBox .depth02").removeClass("slide");
            $(".user-setting .cateBox").removeClass("on");
        }
    });


    // crew popup 

    $("#crew .crew-box").click(function() {
        $(this).next().animate({ right: "0" }, 600, "easeInQuad");
        $(".popup .fixed-element p").addClass("ani");
        $(".popup .fixed-element h1").addClass("ani");
        $("header").addClass("fixed");
        $("header .logo").hide();
        $("header .back-btn").show();
        $("header .menu-btn").addClass("change");
        $("html, body").addClass("hidden");
    });

    $(document).on("click", "header .back-btn", function() {
        $(".popup").animate({ right: "-100%" }, 600, "easeInQuad");
        $(".popup .fixed-element p").removeClass("ani");
        $(".popup .fixed-element h1").removeClass("ani");
        $("header").removeClass("fixed");
        $("header .back-btn").hide();
        $("header .menu-btn").removeClass("change");
        $("header .logo").show();
        $("html, body").removeClass("hidden");
    });

    $(document).on("click", ".news-href header .back-btn", function() {
        $(this).prop("href", "news.html");
    });
    $(document).on("click", ".main-href header .back-btn", function() {
        $(this).prop("href", "index.html");
    });

    // news tab_menu

    $("#news .update .post-box").addClass("current");
    $("#news .tab-menu li").on("click", function() {

        var tag_active = $(this).attr("data-tab");
        var tab_on = $(this).index();

        $("#news .tab-menu li").removeClass("on");
        $("#news .update .post-box").removeClass("current");


        $("#news .tab-menu li:eq(" + tab_on + ")").addClass("on");
        $("." + tag_active).addClass("current");

    });

    // screen mode
    $(document).on("click", "#open-menu .screen-mode", function() {
        $(this).toggleClass("change");
        if ($("#open-menu .screen-mode").hasClass("change")) {
            $("#open-menu .screen-mode").find("i").text("dark_mode");

        } else {
            $("#open-menu .screen-mode").find("i").text("circle");
            $(".wrap").removeClass("dark-mode");
        }
    });


    // pc 감지
    if (!isMobile) {



    }
    // mobile 감지
    if (isMobile) {

        $("#contact marquee").attr("scrollamount", "10");

    }

};