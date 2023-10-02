/**
 * helper.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2014, Codrops
 * http://www.codrops.com
 */
var docElem = window.document.documentElement,
	transEndEventNames = {
		'WebkitTransition': 'webkitTransitionEnd',
		'MozTransition': 'transitionend',
		'OTransition': 'oTransitionEnd',
		'msTransition': 'MSTransitionEnd',
		'transition': 'transitionend'
	},
	transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
	support = {
		pointerevents : Modernizr.pointerevents,
		csstransitions : Modernizr.csstransitions,
		csstransforms3d : Modernizr.csstransforms3d
	};

function scrollX() {
	return window.pageXOffset || docElem.scrollLeft; 
}

function scrollY() {
	return window.pageYOffset || docElem.scrollTop;
}

function getOffset(el) {
	var offset = el.getBoundingClientRect();
	return { top : offset.top + scrollY(), left : offset.left + scrollX() };
}

// from http://responsejs.com/labs/dimensions/
function getViewportW() {
	var client = docElem['clientWidth'],
		inner = window['innerWidth'];
	
	if( client < inner )
		return inner;
	else
		return client;
}

function getViewportH() {
	var client = docElem['clientHeight'],
		inner = window['innerHeight'];
	
	if( client < inner )
		return inner;
	else
		return client;
}

function extend( a, b ) {
	for( var key in b ) { 
		if( b.hasOwnProperty( key ) ) {
			a[key] = b[key];
		}
	}
	return a;
}

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.codrops-demos a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            // Remove 'active' class from all links
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            
            // Add 'active' class to the clicked link
            link.classList.add('active');
        });
    });
});
