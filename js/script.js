$('body').scrollspy({ target: '#navbar' });
$('body').scrollspy({ target: '#find' });
$("#navbar a").on('click', function(event) {
    if (this.hash !== "") {
        event.preventDefault();
        // Store hash
        var hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function(){
            window.location.hash = hash;
        });
    }
});
$("#find").on('click', function(event) {
    if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function(){
            window.location.hash = hash;
        });
    }
});
$("#read").on('click', function(event) {
    if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function(){
            window.location.hash = hash;
        });
    }
});
$("#revealed1").on('click', function(event) {
    if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function(){
            window.location.hash = hash;
        });
    }
});
$("#revealed2").on('click', function(event) {
    if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function(){
            window.location.hash = hash;
        });
    }
});
$("#revealed3").on('click', function(event) {
    if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function(){
            window.location.hash = hash;
        });
    }
});
$("#track1").on('click', function(event) {
    if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function(){
            window.location.hash = hash;
        });
    }
});
$("#track2").on('click', function(event) {
    if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function(){
            window.location.hash = hash;
        });
    }
});

$("#track3").on('click', function(event) {
    if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function(){
            window.location.hash = hash;
        });
    }
});
// LAYOUT
var mobile = false;
var init = false;
// initial layout check
updateLayout();
// on resize layout check
var _this = this;
$(window).resize(function() {
    _this.updateLayout();
});
var navbar_open = false;
$('#navbartoggler').on('click', function() {
    navbar_open = !navbar_open;
});
$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});
$( window ).on( "orientationchange", function( event ) {
    var mode;
    if(window.innerHeight > window.innerWidth){
        mode = 'landscape';
    }
    if(window.innerWidth > window.innerHeight){
        mode = 'portrait'
    }
});

function updateLayout(){
    var landscape = 1400; // landscape desktop size
    var screen = 695; // iPad vertical format
    if(window.innerWidth < screen){
        if(!mobile || !init) {
            $("#ad-overlay").hide();
            $("#ad-landscape").hide();
            $("#ad-bottom").show();

            $("#grid-container").hide();
            $("#grid-container-mobile").show();

            $('#navbarSupportedContent').prop('data-toggle', 'collapse');
            $('#navbarSupportedContent').prop('data-target', '#navbarSupportedContent');
        }
        mobile = true;
        // desktop version
    }else{

        $('#navbarSupportedContent').removeProp('data-toggle');
        $('#navbarSupportedContent').removeProp('data-target');


        if(window.innerWidth > landscape) {
            $("#ad-overlay").hide();
            $("#ad-bottom").hide();
            $("#ad-landscape").show();

            $("#grid-container").show();
            $("#grid-container-mobile").hide();

        }else{
            //alert("check 2");
            $("#ad-overlay").show();
            $("#ad-bottom").hide();
            $("#ad-landscape").hide();

            $("#grid-container").show();
            $("#grid-container-mobile").hide();
        }
        mobile = false;
    }
    // signal initialization done
    init = true;
}
// PHOTOSWIPE
var pswpElement = document.querySelectorAll('.pswp')[0];
var items = [
    {
        src: './img/img01.jpg',
        w: 2016,
        h: 1257,
        title: 'Armin Hary meets Jesse Owens.'
    },
    {
        src: './img/img02.jpg',
        w: 1446,
        h: 1986,
        title: 'Friend will be friends.'
    },
    {
        src: './img/img03.jpg',
        w: 1512,
        h: 2016,
        title: 'A new generation of Running Shoes.'
    },
    {
        src: './img/img04.jpg',
        w: 1242,
        h: 1811,
        title: 'Breaking Records.'
    }
];

$( "#target1" ).click(function() {
    var options = {
        index: 0, shareEl: true,
        shareButtons: [
            {id:'facebook', label:'Share on Facebook', url:'https://www.facebook.com/sharer/sharer.php?u={{url}}'}
        ]
    };
    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
});
$( "#target2" ).click(function() {
    var options = {
        index: 1, shareEl: true,
        shareButtons: [
            {id:'facebook', label:'Share on Facebook', url:'https://www.facebook.com/sharer/sharer.php?u={{url}}'}
        ]
    };
    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
});
$( "#target3" ).click(function() {
    var options = {
        index: 2, shareEl: true,
        shareButtons: [
            {id:'facebook', label:'Share on Facebook', url:'https://www.facebook.com/sharer/sharer.php?u={{url}}'}
        ]
    };
    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
});
$( "#target4" ).click(function() {
    var options = {
        index: 3, shareEl: true,
        shareButtons: [
            {id:'facebook', label:'Share on Facebook', url:'https://www.facebook.com/sharer/sharer.php?u={{url}}'}
        ]
    };
    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
});
$( "#target-mobile1" ).click(function() {
    var options = {
        index: 0, shareEl: false,
    };
    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
});
$( "#target-mobile2" ).click(function() {
    var options = {
        index: 1 , shareEl: false
    };
    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
});
$( "#target-mobile3" ).click(function() {
    var options = {
        index: 2, shareEl: false
    };
    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
});
$( "#target-mobile4" ).click(function() {
    var options = {
        index: 3 , shareEl: false
    };
    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
});