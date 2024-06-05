$(document).ready(function() {
    $(document).on("mouseover", ".link", function() {
        $(".link_text").show();
        $(".anc_overlaybg").show();
    })
    $(document).on("mouseout", ".link", function() {
        $(".link_text").hide();
        $(".anc_overlaybg").hide();
    })

    $(document).on("click", ".mysimgdiv", function() {

        var mybnrCls = $(this).attr("data-id");
        $(".mysimgdiv").removeClass("active")
        $(this).addClass("active");

        $(".bannerDiv").removeClass("active");
        $(mybnrCls).addClass("active");

    })


    // $(document).on("mouseover", ".swiper-slide", function() {
    //     var myHoverCls = $(this).attr("data-id");
    //     alert(myHoverCls);
    // })

    // for mobile view banner
    // Swiper: Slider
    new Swiper('.swiper_Mob', {
        loop: true,
        autoplay: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 1,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
});

// small slider on banner js
var swiper = new Swiper(".swiper", {
    loop: true,
    slidesPerView: 3,
    effect: "coverflow",
    coverflowEffect: {
        rotate: 20,
        slideShadows: true
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    keyboard: {
        enabled: true,
        onlyInViewport: false
    }
});




// latest realease slider
var product_swiper = new Swiper(".product_swiper", {
    loop: false,
    slidesPerView: 7,
    keyboard: {
        enabled: true,
        onlyInViewport: false
    }
});

var bestin_swiper = new Swiper(".bestin_swiper", {
    loop: false,
    slidesPerView: 5,
    keyboard: {
        enabled: true,
        onlyInViewport: false
    }
});