$(document).ready( function() {
    /*
    ============================================================
    =================== Start Main Function ==========================
    ============================================================
    */
   //Home page for service and craft sections " Active li and swap Tabs "
    function activeAndSwapTabs(headLiSelector, headActiveClass, headActiveImg) {
        // For home-services section active li
        $(headLiSelector).each(function () {
            let liTurn = $(this).data('turn');
            let liImg = $(this).data('img');
            
            $(this).click(function() {
                $(this).addClass(headActiveClass).siblings('li').removeClass(headActiveClass);

                $(liTurn).show().siblings().hide();

                $(liImg).addClass(headActiveImg).siblings().removeClass(headActiveImg);
            });
        });
    }
    
   //Home Page home-projects section
   function getDataOfCenterSlide() {
        $('.home-projects--owl .owl-item').each(function () {
            if( $(this).hasClass('center') ) {
                let newTitleofOwl = $(this).find('h3').text();
                let newPofOwl = $(this).find('p').text();
                $('.home-projects--boxinfo h4').text( newTitleofOwl );
                $('.home-projects--boxinfo p').text( newPofOwl );
            }
        });
   }

    //Animate label of inputs to be above
    function animateLabelToBeAbove(allInputs, prevLabelTag, activeClassName, siblingInputs) {
        $(allInputs).each(function() {
            $(this).click(function() {
                $(this).prev(prevLabelTag).addClass(activeClassName).siblings(siblingInputs).removeClass(activeClassName);
            });
        });    
    }

    //Animate label of inputs to be down again
    function animateLabelToBeDown(selectedInputs, tagLabel, activatedClassName) {
        $(selectedInputs).each(function() {
            $(this).blur(function() {
                $(this).prev(tagLabel).removeClass(activatedClassName);
            });
        });
    }

    //click span to click hidden input file
    function clickedFileInput(fakeClicked, realFileInout) {
        $(fakeClicked).click(function () {
            $(realFileInout).click();
        });
    }
    //get file input val to copy it in span
    function getValFileInputinSpan(inputFileVal, spanToBrCopiesVal) {
        $(inputFileVal).change(function () {
            let inputFileVal = $(this).val().slice(12);
            $(spanToBrCopiesVal).text( inputFileVal );
        });
    }

    function me() {
        $('.owl-carousel .owl-stage').css('transform', 'translate3d(-895px, 0px, 0px);')
    }me()
    /*
    ============================================================
    =================== End Main Function ==========================
    ============================================================
    */

    //------------------------------------- Start Home page
    
    // Main menu button
    $('#mainMenuBtn').click(function() {

        $('body').css('overflow', 'hidden');

        $(this).toggleClass('active');
        $(this).children('i').toggleClass('fa-bars fa-close');
        if( $(this).hasClass('active') ) {
            $(this).children('span').text('close');
            $('#menu').fadeIn();
        } else {
            $(this).children('span').text('menu');
            $('#menu').fadeOut();
            $('body').css('overflow', 'visible'); 
        }
    });

    $('.header-logo--bars').click(function () {
        $('#menu').fadeIn();
        $('body').css('overflow', 'hidden');
    });
    $('#menuBtnMob').click(function () {
        $('#menu').fadeOut();
        $('body').css('overflow', 'visible'); 
    });

    // For Home Slider
    $('#homeHeroSlidesBtn').click(function () {
        $(this).fadeOut();
        $('.home-hero').animate({ 'paddingLeft': '0' }, 1000);
        $('.home-hero--slides').animate({'width': '100%'});
        $('.home-hero--slides_cover').animate({ 'marginLeft': '0' }, 1000);
        $('.home-hero--info').animate({ 'opacity': '0' });
        $('.home-hero--info').animate({ 'width': '0' });        
        $('.home-hero--slides_bg').delay(500).animate({ 'width': '100%', 'paddingLeft': '52px'});
        $('.home-hero--slides_bg').addClass('translateX_zero');
        $('.home-hero--slides_bg_info').delay(1000).fadeIn();
        $('.home-hero--slides_cover_container').delay(1000).animate({ 'opacity': '1' });
    });

    $('#homeHeroSlidesCoverContainerClose').click(function () {
        $('.home-hero--slides_cover_container').animate({ 'opacity': '0' });
        $('#homeHeroSlidesBtn').delay(500).fadeIn();
        $('.home-hero--slides_bg_info').fadeOut();
        $('.home-hero').animate({ 'paddingLeft': '68px' }, 1000);
        $('.home-hero--slides_cover').animate({ 'marginLeft': '55px' }, 1000);
        $('.home-hero--info').animate({ 'width': '108%' });        
        $('.home-hero--info').delay(200).animate({ 'opacity': '1' });
        $('.home-hero--slides_bg').delay(500).animate({ 'width': '478px', 'paddingLeft': '' });
        $('.home-hero--slides_bg').removeClass('translateX_zero');
        $('.home-hero--slides_bg').addClass('translateX_zero_two');
    });

    // For home-services section active li and swap tabs
    activeAndSwapTabs('.home-services--heads li', 'home-services--heads_active', 'home-services--imgs_active');
    
    // For home-Craft section active li and swap tabs
    activeAndSwapTabs('.home-craft--heads li', 'home-services--heads_active', 'home-services--imgs_active');
    
    // For home projects bottom slider
    $('.home_hero_owl_slider').owlCarousel({
        autoplay:true,
        loop:true,
        dots: false,
        nav: true,
        margin: 20,
        items: 2,
        startPosition: 0,
        responsive:{
            0:{items:1},
            600:{items:2},
            1000:{items:2}
            },
        center:true,
        slideBy:1,
        autoplayTimeout:1000000000
    });

    //Home page hero slider getting count of sliders
    let countSliderHero = $('.home_hero_owl_slider .owl-item');
    $('.home-hero--slides_cover_container ul li').eq(0).children('strong').text( countSliderHero.length );

    //Home page heroo slider fake controls
    $('#heroSliderNext').click(function() {
        $('.home-hero--slides .owl-next').click();
    });
    $('#heroSliderBack').click(function() {
        $('.home-hero--slides owl-prev').click();
    });

    // For home projects bottom slider
    $('.home_projects_slider').owlCarousel({
        loop:true,
        dots: false,
        nav: true,
        margin: 5,
        center: true,
        startPosition: 0,
        responsive:{
            0:{items:1},
            600:{items:3},
            1000:{items:5}
            },
        center:true,
        slideBy:2,
        autoplayTimeout:1000000000
    });

    // For home-clients slider
    $('.home_clients_slider').owlCarousel({
        autoplay:true,
        loop:true,
        dots: false,
        nav: true,
        // margin: 0,
        // startPosition: 0,
        responsive:{
            0:{items:1},
            600:{items:2},
            1000:{items:6}
            },
        // center:false,
        slideBy:1,
        autoplayTimeout:1000000000
    });

    $('#home-clients--sliding_right').click(function() {
        $('.home-clients--sliding .owl-next').click();
    });
    $('#home-clients--sliding_left').click(function() {
        $('.home-clients--sliding .owl-prev').click();
    });

    $('#homeProjectsBoxinfoNext').click(function () {
        if( $('.home-projects').hasClass('active') ) {
            $('.home-projects .home-projects--owl').animate({ 'marginLeft': 0 });
        } 
    })

    // For home projects section
    getDataOfCenterSlide();
    
    // For home projects section
    $('#homeProjectsBoxinfoNext').click(function () {
        $('.owl-next').click();

        getDataOfCenterSlide();

    });
    $('#homeProjectsBoxinfoPrev').click(function () {
        $('.owl-prev').click();

        getDataOfCenterSlide();
    });
    
    //------------------------------------- End Home page

    //------------------------------------- Start Contact Page
    
    //Animate form label
    $('.contact-core--form input, .contact-core--form textarea').click(function() {
        $(this).prev('label').addClass('label_transformed');
        $('.contact-core--form label').removeClass('label_transformed');
    });
    
    //------------------------------------- End Contact Page

    //------------------------------------- Start Careers page
    
    // Add active class into careers and internship && show and hide careers and Intern sections 
    $('.career-content--info_controls li').each(function () {
        $(this).children('button').click(function () {
            $(this).addClass('career-content--info_controls__active').parent('li').siblings('li').children().removeClass('career-content--info_controls__active')
        
            let showHidecareersandIntern = $(this).data('swap');
            $(showHidecareersandIntern).show().siblings().hide();
        });
    });
    
    animateLabelToBeAbove('#contact-core__career form input', 'label', 'label_transformed', 'input');
    animateLabelToBeAbove('#contact-core__intern input', 'label', 'label_transformed', 'input');
    animateLabelToBeDown('#contact-core__career form input', 'label', 'label_transformed');
    animateLabelToBeDown('#contact-core__intern form input', 'label', 'label_transformed');
    clickedFileInput('#internFakeClicked', '#internFileInput');
    clickedFileInput('#careerFakeClicked', '#careerFileInput');
    getValFileInputinSpan('#internFileInput', '#internFakeClicked');
    getValFileInputinSpan('#careerFileInput', '#careerFakeClicked');
    
    //------------------------------------- End Careers page

    //------------------------------------- Start Services Page
    
    //Adjust services-hero--info_details === its parent
    $('.services-hero--info_details').height( $('.services-hero').height() );

    $('.services-hero--info_detailsbtn').mouseenter(function() {
        $('#services-hero--info_detailsbtn__circle').attr("stroke-dasharray", "40.1327 50.2655");
    });
    $('.services-hero--info_detailsbtn').mouseleave(function() {
        $('#services-hero--info_detailsbtn__circle').attr("stroke-dasharray", "0.1327 50.2655");
    });

    $('#servicesHeroInfoDown').click(function () {
        $('html, body').animate({ scrollTop : $('.service-parts').offset().top }, 800);
    });
    //------------------------------------- End Services Page

    //------------------------------------- Start Projects Page
    //Adjust height of pros hero info as same its parent
    $('.pros-hero--info').width( $(window).width() );
    //------------------------------------- End Projects Page

    //------------------------------------- Start General
    $(window).resize(function() {
        //Adjust services-hero--info_details === its parent
        $('.services-hero--info_details').height( $('.services-hero').height() );

    });

    // goUp
    $('#goUp').click(function() {
        $('html, body').animate( { scrollTop: 0 }, 500 );
    });

});