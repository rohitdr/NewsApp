import  "./Navbar.css";
import React from 'react'
import "./Nav.js"
import $ from 'jquery';
import jQuery from 'jquery';
export default function Navbar1() {
  
    // ---------Responsive-navbar-active-animation-----------
/* The `test()` function is defining variables and calculating the position and dimensions of the
active item in the navbar. It is used to animate the horizontal selector bar that highlights the
active item in the navbar. */
function test(){
	var tabsNewAnim = $('#navbarSupportedContent');
	var selectorNewAnim = $('#navbarSupportedContent').find('li').length;
	var activeItemNewAnim = tabsNewAnim.find('.active');
	var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
	var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
	var itemPosNewAnimTop = activeItemNewAnim.position();
	var itemPosNewAnimLeft = activeItemNewAnim.position();
	/* This code is setting the CSS properties of the element with class "hori-selector". It is
	positioning the element at the top and left positions of the active item in the navbar, and setting
	its height and width to match the height and width of the active item. This is used to animate a
	horizontal selector bar that highlights the active item in the navbar. */
	$(".hori-selector").css({
		"top":itemPosNewAnimTop.top + "px", 
		"left":itemPosNewAnimLeft.left + "px",
		"height": activeWidthNewAnimHeight + "px",
		"width": activeWidthNewAnimWidth + "px"
	});
	/* This code is adding a click event listener to the `li` elements inside the
	`#navbarSupportedContent` element. When an `li` element is clicked, it removes the "active" class
	from all `li` elements inside `#navbarSupportedContent`, adds the "active" class to the clicked
	`li` element, and calculates the position and dimensions of the clicked `li` element. These
	position and dimension values are then used to animate a horizontal selector bar that highlights
	the active item in the navbar. */
	$("#navbarSupportedContent").on("click","li",function(e){
		$('#navbarSupportedContent ul li').removeClass("active");
		$(this).addClass('active');
		var activeWidthNewAnimHeight = $(this).innerHeight();
		var activeWidthNewAnimWidth = $(this).innerWidth();
		var itemPosNewAnimTop = $(this).position();
		var itemPosNewAnimLeft = $(this).position();
/* This code is setting the CSS properties of the element with class "hori-selector". It is positioning
the element at the top and left positions of the active item in the navbar, and setting its height
and width to match the height and width of the active item. This is used to animate a horizontal
selector bar that highlights the active item in the navbar. */
		$(".hori-selector").css({
			"top":itemPosNewAnimTop.top + "px", 
			"left":itemPosNewAnimLeft.left + "px",
			"height": activeWidthNewAnimHeight + "px",
			"width": activeWidthNewAnimWidth + "px"
		});
	});
}
/* `$(document).ready(function(){ setTimeout(function(){ test(); }); });` is a jQuery function that
waits for the document to be fully loaded before executing the `test()` function. The `test()`
function calculates the position and dimensions of the active item in the navbar and animates a
horizontal selector bar that highlights the active item in the navbar. The `setTimeout()` function
is used to delay the execution of the `test()` function by a specified amount of time (in
milliseconds) to ensure that all elements in the document have been loaded before the function is
executed. */
$(document).ready(function(){
	setTimeout(function(){ test(); });
});
/* `$(window).on('resize', function(){ setTimeout(function(){ test(); }, 500); });` is adding an event
listener to the window object that listens for a resize event. When the window is resized, the
`test()` function is executed after a delay of 500 milliseconds. This delay is added to ensure that
all elements in the document have been resized before the `test()` function is executed. The
`test()` function calculates the position and dimensions of the active item in the navbar and
animates a horizontal selector bar that highlights the active item in the navbar. */
$(window).on('resize', function(){
	setTimeout(function(){ test(); }, 500);
});
/* This code is adding a click event listener to the element with class "navbar-toggler". When this
element is clicked, it toggles the visibility of the element with class "navbar-collapse" by sliding
it up or down over a duration of 300 milliseconds. It also calls the `test()` function after a delay
of 300 milliseconds using the `setTimeout()` function. The `test()` function calculates the position
and dimensions of the active item in the navbar and animates a horizontal selector bar that
highlights the active item in the navbar. */
$(".navbar-toggler").click(function(){
	$(".navbar-collapse").slideToggle(300);
	setTimeout(function(){ test(); });
});



// --------------add active class-on another-page move----------
jQuery(document).ready(function($){
	// Get current path and find target link
	var path = window.location.pathname.split("/").pop();

	// Account for home page with empty path
	if ( path == '' ) {
		path = 'index.html';
	}

	var target = $('#navbarSupportedContent ul li a[href="'+path+'"]');
	// Add active class to target link
	target.parent().addClass('active');
});




// Add active class on another page linked
// ==========================================
// $(window).on('load',function () {
//     var current = location.pathname;
//     console.log(current);
//     $('#navbarSupportedContent ul li a').each(function(){
//         var $this = $(this);
//         // if the current path is like this link, make it active
//         if($this.attr('href').indexOf(current) !== -1){
//             $this.parent().addClass('active');
//             $this.parents('.menu-submenu').addClass('show-dropdown');
//             $this.parents('.menu-submenu').parent().addClass('active');
//         }else{
//             $this.parent().removeClass('active');
//         }
//     })
// });
  return (
    <div>
    <nav class="navbar navbar-expand-custom navbar-mainbg">
        <a class="navbar-brand navbar-logo" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i class="fas fa-bars text-white"></i>
        </button>
       
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
                <div class="hori-selector"><div class="left"></div><div class="right"></div></div>
                <li class="nav-item">
                    <a class="nav-link" href="javascript:void(0);"><i class="fas fa-tachometer-alt"></i>Dashboard</a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link" href="javascript:void(0);"><i class="far fa-address-book"></i>Address Book</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="javascript:void(0);"><i class="far fa-clone"></i>Components</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="javascript:void(0);"><i class="far fa-calendar-alt"></i>Calendar</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="javascript:void(0);"><i class="far fa-chart-bar"></i>Charts</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="javascript:void(0);"><i class="far fa-copy"></i>Documents</a>
                </li>
            </ul>
        </div>
    </nav>
    </div>
  )
}
