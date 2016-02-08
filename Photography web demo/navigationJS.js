$(document).ready(function(){
	console.log("jQuery is ready to use...");
	//set up listeners on the menu items
	//$('#home').on("click",goHome);    
        
    $('#landscape').on("click",goLandscape);
	$('#animal').on("click",goAnimal);
	$('#car').on('click',goCar);
    $('#l0').on('click',goL0);
    $('#l1').on('click',goL1);
    $('#l2').on('click',goL2);
    $('#l3').on('click',goL3);
    $('#l4').on('click',goL4);
    $('#l5').on('click',goL5);
    $('#l6').on('click',goL6);
    $('#l7').on('click',goL7);
    $('#a0').on('click',goA0);
    $('#a1').on('click',goA1);
    $('#a2').on('click',goA2);
    $('#a3').on('click',goA3);
    $('#a4').on('click',goA4);
    $('#a5').on('click',goA5);
    $('#a6').on('click',goA6);
    $('#a7').on('click',goA7);
    $('#c0').on('click',goC0);
    $('#c1').on('click',goC1);
    $('#c2').on('click',goC2);
    $('#c3').on('click',goC3);
    $('#c4').on('click',goC4);
    $('#c5').on('click',goC5);
    $('#c6').on('click',goC6);
    $('#c7').on('click',goC7);
	//$('#mainContentPane #crseDelButton').on('click',delCourse);
	
	// The initial Page is the current and last page
	page = new menuState("home");
});

// Define a page State Object
function menuState(curPage) {
	this.curPage=curPage;
}

/* function to change the current page.  */
menuState.prototype.setCurPage = function(page) {
	this.curPage=page;
};

/* function to query the current page. */
menuState.prototype.getCurPage = function() {
	return this.curPage;
};

function goLandscape() {
	// adjust the pages that are shown
	if (page.getCurPage() != "Landscape") {
		// request the index html fragment
		var jqxhr = $.get("index.php");
		jqxhr.done(function(data){
            $('header').replaceWith('<header class="intro-header" style="background-image: url(' + "'" + $('#autobahn').html() + "'" + ')">');
            $('.intro-header').append('<div class="container">');
            $('.container').append('<div class="row">');
            $('.row').append('<div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">');
            $('.col-lg-8').append('<div class="site-heading">');
            $('.col-lg-8').remove('h1');
            $('.col-lg-8').remove('hr');
            $('.col-lg-8').remove('span');
		   console.log("The intro-header has been replaced.");
		   
		});
		jqxhr.fail(function(jqXHR){alert("Error: "+jqXHR.status);});
        
        // Display credit.
        $('.credit').html($('#autobahnCredit').html());
        
        // Display the related thumbs.
        $('.landscape-thumbs').css("display", "block");
        
        // Hide the unrelated thumbs.
        $('.animal-thumbs').css("display", "none");
        $('.car-thumbs').css("display", "none");
		
		// Hide the current page & make Landscape the new current page
		var curSelector = '#' + page.getCurPage()+"Page";
	    $(curSelector).css("display","none");
		page.setCurPage("Landscape");
	}
}

function goAnimal() {
	// adjust the pages that are shown
	if (page.getCurPage() != "Animal") {
		// request the index html fragment
		var jqxhr = $.get("index.php");
		jqxhr.done(function(data){
            $('header').replaceWith('<header class="intro-header" style="background-image: url(' + "'" + $('#anglerFish').html() + "'" + ')">');
            $('.intro-header').append('<div class="container">');
            $('.container').append('<div class="row">');
            $('.row').append('<div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">');
            $('.col-lg-8').append('<div class="site-heading">');
            $('.col-lg-8').remove('h1');
            $('.col-lg-8').remove('hr');
            $('.col-lg-8').remove('span');
		   console.log("The intro-header has been replaced.");
		   
		});
		jqxhr.fail(function(jqXHR){alert("Error: "+jqXHR.status);});
        
        // Display credit.
        $('.credit').html($('#anglerFishCredit').html());
        
        // Display the related thumbs.
        $('.animal-thumbs').css("display", "block");
        
        // Hide the unrelated thumbs.
        $('.landscape-thumbs').css("display", "none");
        $('.car-thumbs').css("display", "none");
		
		// Hide the current page & make Animal the new current page
		var curSelector = '#' + page.getCurPage()+"Page";
	    $(curSelector).css("display","none");
		page.setCurPage("Animal");
	}
}

function goCar() {
	// adjust the pages that are shown
	if (page.getCurPage() != "Car") {
		// request the index html fragment
		var jqxhr = $.get("index.php");
		jqxhr.done(function(data){
            $('header').replaceWith('<header class="intro-header" style="background-image: url(' + "'" + $('#elCamino').html() + "'" + ')">');
            $('.intro-header').append('<div class="container">');
            $('.container').append('<div class="row">');
            $('.row').append('<div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">');
            $('.col-lg-8').append('<div class="site-heading">');
            $('.col-lg-8').remove('h1');
            $('.col-lg-8').remove('hr');
            $('.col-lg-8').remove('span');
		   console.log("The intro-header has been replaced.");
		   
		});
		jqxhr.fail(function(jqXHR){alert("Error: "+jqXHR.status);});
        
        // Display credit.
        $('.credit').html($('#elCaminoCredit').html());
        
        // Display the related thumbs.
        $('.car-thumbs').css("display", "block");
        
        // Hide the unrelated thumbs.
        $('.animal-thumbs').css("display", "none");
        $('.landscape-thumbs').css("display", "none");
		
		// Hide the current page & make Car the new current page
		var curSelector = '#' + page.getCurPage()+"Page";
	    $(curSelector).css("display","none");
		page.setCurPage("Car");
	}
}

function goL0() {
	// adjust the pages that are shown
	if (page.getCurPage() != "l0") {
		// request the index html fragment
		var jqxhr = $.get("index.php");
		jqxhr.done(function(data){
            $('header').replaceWith('<header class="intro-header" style="background-image: url(' + "'" + $('#l0').attr('src') + "'" + ')">');
            $('.intro-header').append('<div class="container">');
            $('.container').append('<div class="row">');
            $('.row').append('<div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">');
            $('.col-lg-8').append('<div class="site-heading">');
            $('.col-lg-8').remove('h1');
            $('.col-lg-8').remove('hr');
            $('.col-lg-8').remove('span');
		   console.log("The intro-header has been replaced.");
		   
		});
		jqxhr.fail(function(jqXHR){alert("Error: "+jqXHR.status);});
        
        // Display credit.
        $('.credit').html($('#lt0').html());
        
        // Display the related thumbs.
        $('.landscape-thumbs').css("display", "block");
        
        // Hide the unrelated thumbs.
        $('.animal-thumbs').css("display", "none");
        $('.car-thumbs').css("display", "none");
		
		// Hide the current page & make Car the new current page
		var curSelector = '#' + page.getCurPage()+"Page";
	    $(curSelector).css("display","none");
		page.setCurPage("l0");
	}
}

function goL1() {
	// adjust the pages that are shown
	if (page.getCurPage() != "l1") {
		// request the index html fragment
		var jqxhr = $.get("index.php");
		jqxhr.done(function(data){
            $('header').replaceWith('<header class="intro-header" style="background-image: url(' + "'" + $('#l1').attr('src') + "'" + ')">');
            $('.intro-header').append('<div class="container">');
            $('.container').append('<div class="row">');
            $('.row').append('<div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">');
            $('.col-lg-8').append('<div class="site-heading">');
            $('.col-lg-8').remove('h1');
            $('.col-lg-8').remove('hr');
            $('.col-lg-8').remove('span');
		   console.log("The intro-header has been replaced.");
		   
		});
		jqxhr.fail(function(jqXHR){alert("Error: "+jqXHR.status);});
        
        // Display credit.
        $('.credit').html($('#lt1').html());
        
        // Display the related thumbs.
        $('.landscape-thumbs').css("display", "block");
        
        // Hide the unrelated thumbs.
        $('.animal-thumbs').css("display", "none");
        $('.car-thumbs').css("display", "none");
		
		// Hide the current page & make Car the new current page
		var curSelector = '#' + page.getCurPage()+"Page";
	    $(curSelector).css("display","none");
		page.setCurPage("l1");
	}
}

function goL2() {
	// adjust the pages that are shown
	if (page.getCurPage() != "l2") {
		// request the index html fragment
		var jqxhr = $.get("index.php");
		jqxhr.done(function(data){
            $('header').replaceWith('<header class="intro-header" style="background-image: url(' + "'" + $('#l2').attr('src') + "'" + ')">');
            $('.intro-header').append('<div class="container">');
            $('.container').append('<div class="row">');
            $('.row').append('<div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">');
            $('.col-lg-8').append('<div class="site-heading">');
            $('.col-lg-8').remove('h1');
            $('.col-lg-8').remove('hr');
            $('.col-lg-8').remove('span');
		   console.log("The intro-header has been replaced.");
		   
		});
		jqxhr.fail(function(jqXHR){alert("Error: "+jqXHR.status);});
        
        // Display credit.
        $('.credit').html($('#lt2').html());
        
        // Display the related thumbs.
        $('.landscape-thumbs').css("display", "block");
        
        // Hide the unrelated thumbs.
        $('.animal-thumbs').css("display", "none");
        $('.car-thumbs').css("display", "none");
		
		// Hide the current page & make Car the new current page
		var curSelector = '#' + page.getCurPage()+"Page";
	    $(curSelector).css("display","none");
		page.setCurPage("l2");
	}
}

function goL3() {
	// adjust the pages that are shown
	if (page.getCurPage() != "l3") {
		// request the index html fragment
		var jqxhr = $.get("index.php");
		jqxhr.done(function(data){
            $('header').replaceWith('<header class="intro-header" style="background-image: url(' + "'" + $('#l3').attr('src') + "'" + ')">');
            $('.intro-header').append('<div class="container">');
            $('.container').append('<div class="row">');
            $('.row').append('<div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">');
            $('.col-lg-8').append('<div class="site-heading">');
            $('.col-lg-8').remove('h1');
            $('.col-lg-8').remove('hr');
            $('.col-lg-8').remove('span');
		   console.log("The intro-header has been replaced.");
		   
		});
		jqxhr.fail(function(jqXHR){alert("Error: "+jqXHR.status);});
        
        // Display credit.
        $('.credit').html($('#lt3').html());
        
        // Display the related thumbs.
        $('.landscape-thumbs').css("display", "block");
        
        // Hide the unrelated thumbs.
        $('.animal-thumbs').css("display", "none");
        $('.car-thumbs').css("display", "none");
		
		// Hide the current page & make Car the new current page
		var curSelector = '#' + page.getCurPage()+"Page";
	    $(curSelector).css("display","none");
		page.setCurPage("l3");
	}
}

function goL4() {
	// adjust the pages that are shown
	if (page.getCurPage() != "l4") {
		// request the index html fragment
		var jqxhr = $.get("index.php");
		jqxhr.done(function(data){
            $('header').replaceWith('<header class="intro-header" style="background-image: url(' + "'" + $('#l4').attr('src') + "'" + ')">');
            $('.intro-header').append('<div class="container">');
            $('.container').append('<div class="row">');
            $('.row').append('<div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">');
            $('.col-lg-8').append('<div class="site-heading">');
            $('.col-lg-8').remove('h1');
            $('.col-lg-8').remove('hr');
            $('.col-lg-8').remove('span');
		   console.log("The intro-header has been replaced.");
		   
		});
		jqxhr.fail(function(jqXHR){alert("Error: "+jqXHR.status);});
        
        // Display credit.
        $('.credit').html($('#lt4').html());
        
        // Display the related thumbs.
        $('.landscape-thumbs').css("display", "block");
        
        // Hide the unrelated thumbs.
        $('.animal-thumbs').css("display", "none");
        $('.car-thumbs').css("display", "none");
		
		// Hide the current page & make Car the new current page
		var curSelector = '#' + page.getCurPage()+"Page";
	    $(curSelector).css("display","none");
		page.setCurPage("l4");
	}
}

function goL5() {
	// adjust the pages that are shown
	if (page.getCurPage() != "l5") {
		// request the index html fragment
		var jqxhr = $.get("index.php");
		jqxhr.done(function(data){
            $('header').replaceWith('<header class="intro-header" style="background-image: url(' + "'" + $('#l5').attr('src') + "'" + ')">');
            $('.intro-header').append('<div class="container">');
            $('.container').append('<div class="row">');
            $('.row').append('<div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">');
            $('.col-lg-8').append('<div class="site-heading">');
            $('.col-lg-8').remove('h1');
            $('.col-lg-8').remove('hr');
            $('.col-lg-8').remove('span');
		   console.log("The intro-header has been replaced.");
		   
		});
		jqxhr.fail(function(jqXHR){alert("Error: "+jqXHR.status);});
        
        // Display credit.
        $('.credit').html($('#lt5').html());
        
        // Display the related thumbs.
        $('.landscape-thumbs').css("display", "block");
        
        // Hide the unrelated thumbs.
        $('.animal-thumbs').css("display", "none");
        $('.car-thumbs').css("display", "none");
		
		// Hide the current page & make Car the new current page
		var curSelector = '#' + page.getCurPage()+"Page";
	    $(curSelector).css("display","none");
		page.setCurPage("l5");
	}
}

function goL6() {
	// adjust the pages that are shown
	if (page.getCurPage() != "l6") {
		// request the index html fragment
		var jqxhr = $.get("index.php");
		jqxhr.done(function(data){
            $('header').replaceWith('<header class="intro-header" style="background-image: url(' + "'" + $('#l6').attr('src') + "'" + ')">');
            $('.intro-header').append('<div class="container">');
            $('.container').append('<div class="row">');
            $('.row').append('<div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">');
            $('.col-lg-8').append('<div class="site-heading">');
            $('.col-lg-8').remove('h1');
            $('.col-lg-8').remove('hr');
            $('.col-lg-8').remove('span');
		   console.log("The intro-header has been replaced.");
		   
		});
		jqxhr.fail(function(jqXHR){alert("Error: "+jqXHR.status);});
        
        // Display credit.
        $('.credit').html($('#lt6').html());
        
        // Display the related thumbs.
        $('.landscape-thumbs').css("display", "block");
        
        // Hide the unrelated thumbs.
        $('.animal-thumbs').css("display", "none");
        $('.car-thumbs').css("display", "none");
		
		// Hide the current page & make Car the new current page
		var curSelector = '#' + page.getCurPage()+"Page";
	    $(curSelector).css("display","none");
		page.setCurPage("l6");
	}
}

function goL7() {
	// adjust the pages that are shown
	if (page.getCurPage() != "l7") {
		// request the index html fragment
		var jqxhr = $.get("index.php");
		jqxhr.done(function(data){
            $('header').replaceWith('<header class="intro-header" style="background-image: url(' + "'" + $('#l7').attr('src') + "'" + ')">');
            $('.intro-header').append('<div class="container">');
            $('.container').append('<div class="row">');
            $('.row').append('<div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">');
            $('.col-lg-8').append('<div class="site-heading">');
            $('.col-lg-8').remove('h1');
            $('.col-lg-8').remove('hr');
            $('.col-lg-8').remove('span');
		   console.log("The intro-header has been replaced.");
		   
		});
		jqxhr.fail(function(jqXHR){alert("Error: "+jqXHR.status);});
        
        // Display credit.
        $('.credit').html($('#lt7').html());
        
        // Display the related thumbs.
        $('.landscape-thumbs').css("display", "block");
        
        // Hide the unrelated thumbs.
        $('.animal-thumbs').css("display", "none");
        $('.car-thumbs').css("display", "none");
		
		// Hide the current page & make Car the new current page
		var curSelector = '#' + page.getCurPage()+"Page";
	    $(curSelector).css("display","none");
		page.setCurPage("l7");
	}
}

function goA0() {
	// adjust the pages that are shown
	if (page.getCurPage() != "a0") {
		// request the index html fragment
		var jqxhr = $.get("index.php");
		jqxhr.done(function(data){
            $('header').replaceWith('<header class="intro-header" style="background-image: url(' + "'" + $('#a0').attr('src') + "'" + ')">');
            $('.intro-header').append('<div class="container">');
            $('.container').append('<div class="row">');
            $('.row').append('<div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">');
            $('.col-lg-8').append('<div class="site-heading">');
            $('.col-lg-8').remove('h1');
            $('.col-lg-8').remove('hr');
            $('.col-lg-8').remove('span');
		   console.log("The intro-header has been replaced.");
		   
		});
		jqxhr.fail(function(jqXHR){alert("Error: "+jqXHR.status);});
        
        // Display credit.
        $('.credit').html($('#at0').html());
        
        // Display the related thumbs.
        $('.animal-thumbs').css("display", "block");
        
        // Hide the unrelated thumbs.
        $('.landscape-thumbs').css("display", "none");
        $('.car-thumbs').css("display", "none");
		
		// Hide the current page & make Car the new current page
		var curSelector = '#' + page.getCurPage()+"Page";
	    $(curSelector).css("display","none");
		page.setCurPage("a0");
	}
}

function goA1() {
	// adjust the pages that are shown
	if (page.getCurPage() != "a1") {
		// request the index html fragment
		var jqxhr = $.get("index.php");
		jqxhr.done(function(data){
            $('header').replaceWith('<header class="intro-header" style="background-image: url(' + "'" + $('#a1').attr('src') + "'" + ')">');
            $('.intro-header').append('<div class="container">');
            $('.container').append('<div class="row">');
            $('.row').append('<div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">');
            $('.col-lg-8').append('<div class="site-heading">');
            $('.col-lg-8').remove('h1');
            $('.col-lg-8').remove('hr');
            $('.col-lg-8').remove('span');
		   console.log("The intro-header has been replaced.");
		   
		});
		jqxhr.fail(function(jqXHR){alert("Error: "+jqXHR.status);});
        
        // Display credit.
        $('.credit').html($('#at1').html());
        
        // Display the related thumbs.
        $('.animal-thumbs').css("display", "block");
        
        // Hide the unrelated thumbs.
        $('.landscape-thumbs').css("display", "none");
        $('.car-thumbs').css("display", "none");
		
		// Hide the current page & make Car the new current page
		var curSelector = '#' + page.getCurPage()+"Page";
	    $(curSelector).css("display","none");
		page.setCurPage("a1");
	}
}

function goA2() {
	// adjust the pages that are shown
	if (page.getCurPage() != "a2") {
		// request the index html fragment
		var jqxhr = $.get("index.php");
		jqxhr.done(function(data){
            $('header').replaceWith('<header class="intro-header" style="background-image: url(' + "'" + $('#a2').attr('src') + "'" + ')">');
            $('.intro-header').append('<div class="container">');
            $('.container').append('<div class="row">');
            $('.row').append('<div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">');
            $('.col-lg-8').append('<div class="site-heading">');
            $('.col-lg-8').remove('h1');
            $('.col-lg-8').remove('hr');
            $('.col-lg-8').remove('span');
		   console.log("The intro-header has been replaced.");
		   
		});
		jqxhr.fail(function(jqXHR){alert("Error: "+jqXHR.status);});
        
        // Display credit.
        $('.credit').html($('#at2').html());
        
        // Display the related thumbs.
        $('.animal-thumbs').css("display", "block");
        
        // Hide the unrelated thumbs.
        $('.landscape-thumbs').css("display", "none");
        $('.car-thumbs').css("display", "none");
		
		// Hide the current page & make Car the new current page
		var curSelector = '#' + page.getCurPage()+"Page";
	    $(curSelector).css("display","none");
		page.setCurPage("a2");
	}
}

function goA3() {
	// adjust the pages that are shown
	if (page.getCurPage() != "a3") {
		// request the index html fragment
		var jqxhr = $.get("index.php");
		jqxhr.done(function(data){
            $('header').replaceWith('<header class="intro-header" style="background-image: url(' + "'" + $('#a3').attr('src') + "'" + ')">');
            $('.intro-header').append('<div class="container">');
            $('.container').append('<div class="row">');
            $('.row').append('<div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">');
            $('.col-lg-8').append('<div class="site-heading">');
            $('.col-lg-8').remove('h1');
            $('.col-lg-8').remove('hr');
            $('.col-lg-8').remove('span');
		   console.log("The intro-header has been replaced.");
		   
		});
		jqxhr.fail(function(jqXHR){alert("Error: "+jqXHR.status);});
        
        // Display credit.
        $('.credit').html($('#at3').html());
        
        // Display the related thumbs.
        $('.animal-thumbs').css("display", "block");
        
        // Hide the unrelated thumbs.
        $('.landscape-thumbs').css("display", "none");
        $('.car-thumbs').css("display", "none");
		
		// Hide the current page & make Car the new current page
		var curSelector = '#' + page.getCurPage()+"Page";
	    $(curSelector).css("display","none");
		page.setCurPage("a3");
	}
}

function goA4() {
	// adjust the pages that are shown
	if (page.getCurPage() != "a4") {
		// request the index html fragment
		var jqxhr = $.get("index.php");
		jqxhr.done(function(data){
            $('header').replaceWith('<header class="intro-header" style="background-image: url(' + "'" + $('#a4').attr('src') + "'" + ')">');
            $('.intro-header').append('<div class="container">');
            $('.container').append('<div class="row">');
            $('.row').append('<div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">');
            $('.col-lg-8').append('<div class="site-heading">');
            $('.col-lg-8').remove('h1');
            $('.col-lg-8').remove('hr');
            $('.col-lg-8').remove('span');
		   console.log("The intro-header has been replaced.");
		   
		});
		jqxhr.fail(function(jqXHR){alert("Error: "+jqXHR.status);});
        
        // Display credit.
        $('.credit').html($('#at4').html());
        
        // Display the related thumbs.
        $('.animal-thumbs').css("display", "block");
        
        // Hide the unrelated thumbs.
        $('.landscape-thumbs').css("display", "none");
        $('.car-thumbs').css("display", "none");
		
		// Hide the current page & make Car the new current page
		var curSelector = '#' + page.getCurPage()+"Page";
	    $(curSelector).css("display","none");
		page.setCurPage("a4");
	}
}

function goA5() {
	// adjust the pages that are shown
	if (page.getCurPage() != "a5") {
		// request the index html fragment
		var jqxhr = $.get("index.php");
		jqxhr.done(function(data){
            $('header').replaceWith('<header class="intro-header" style="background-image: url(' + "'" + $('#a5').attr('src') + "'" + ')">');
            $('.intro-header').append('<div class="container">');
            $('.container').append('<div class="row">');
            $('.row').append('<div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">');
            $('.col-lg-8').append('<div class="site-heading">');
            $('.col-lg-8').remove('h1');
            $('.col-lg-8').remove('hr');
            $('.col-lg-8').remove('span');
		   console.log("The intro-header has been replaced.");
		   
		});
		jqxhr.fail(function(jqXHR){alert("Error: "+jqXHR.status);});
        
        // Display credit.
        $('.credit').html($('#at5').html());
        
        // Display the related thumbs.
        $('.animal-thumbs').css("display", "block");
        
        // Hide the unrelated thumbs.
        $('.landscape-thumbs').css("display", "none");
        $('.car-thumbs').css("display", "none");
		
		// Hide the current page & make Car the new current page
		var curSelector = '#' + page.getCurPage()+"Page";
	    $(curSelector).css("display","none");
		page.setCurPage("a5");
	}
}

function goA6() {
	// adjust the pages that are shown
	if (page.getCurPage() != "a6") {
		// request the index html fragment
		var jqxhr = $.get("index.php");
		jqxhr.done(function(data){
            $('header').replaceWith('<header class="intro-header" style="background-image: url(' + "'" + $('#a6').attr('src') + "'" + ')">');
            $('.intro-header').append('<div class="container">');
            $('.container').append('<div class="row">');
            $('.row').append('<div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">');
            $('.col-lg-8').append('<div class="site-heading">');
            $('.col-lg-8').remove('h1');
            $('.col-lg-8').remove('hr');
            $('.col-lg-8').remove('span');
		   console.log("The intro-header has been replaced.");
		   
		});
		jqxhr.fail(function(jqXHR){alert("Error: "+jqXHR.status);});
        
        // Display credit.
        $('.credit').html($('#at6').html());
        
        // Display the related thumbs.
        $('.animal-thumbs').css("display", "block");
        
        // Hide the unrelated thumbs.
        $('.landscape-thumbs').css("display", "none");
        $('.car-thumbs').css("display", "none");
		
		// Hide the current page & make Car the new current page
		var curSelector = '#' + page.getCurPage()+"Page";
	    $(curSelector).css("display","none");
		page.setCurPage("a6");
	}
}

function goA7() {
	// adjust the pages that are shown
	if (page.getCurPage() != "a7") {
		// request the index html fragment
		var jqxhr = $.get("index.php");
		jqxhr.done(function(data){
            $('header').replaceWith('<header class="intro-header" style="background-image: url(' + "'" + $('#a7').attr('src') + "'" + ')">');
            $('.intro-header').append('<div class="container">');
            $('.container').append('<div class="row">');
            $('.row').append('<div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">');
            $('.col-lg-8').append('<div class="site-heading">');
            $('.col-lg-8').remove('h1');
            $('.col-lg-8').remove('hr');
            $('.col-lg-8').remove('span');
		   console.log("The intro-header has been replaced.");
		   
		});
		jqxhr.fail(function(jqXHR){alert("Error: "+jqXHR.status);});
        
        // Display credit.
        $('.credit').html($('#at7').html());
        
        // Display the related thumbs.
        $('.animal-thumbs').css("display", "block");
        
        // Hide the unrelated thumbs.
        $('.landscape-thumbs').css("display", "none");
        $('.car-thumbs').css("display", "none");
		
		// Hide the current page & make Car the new current page
		var curSelector = '#' + page.getCurPage()+"Page";
	    $(curSelector).css("display","none");
		page.setCurPage("a7");
	}
}

function goC0() {
	// adjust the pages that are shown
	if (page.getCurPage() != "c0") {
		// request the index html fragment
		var jqxhr = $.get("index.php");
		jqxhr.done(function(data){
            $('header').replaceWith('<header class="intro-header" style="background-image: url(' + "'" + $('#c0').attr('src') + "'" + ')">');
            $('.intro-header').append('<div class="container">');
            $('.container').append('<div class="row">');
            $('.row').append('<div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">');
            $('.col-lg-8').append('<div class="site-heading">');
            $('.col-lg-8').remove('h1');
            $('.col-lg-8').remove('hr');
            $('.col-lg-8').remove('span');
		   console.log("The intro-header has been replaced.");
		   
		});
		jqxhr.fail(function(jqXHR){alert("Error: "+jqXHR.status);});
        
        // Display credit.
        $('.credit').html($('#ct0').html());
        
        // Display the related thumbs.
        $('.car-thumbs').css("display", "block");
        
        // Hide the unrelated thumbs.
        $('.landscape-thumbs').css("display", "none");
        $('.animal-thumbs').css("display", "none");
		
		// Hide the current page & make Car the new current page
		var curSelector = '#' + page.getCurPage()+"Page";
	    $(curSelector).css("display","none");
		page.setCurPage("c0");
	}
}

function goC1() {
	// adjust the pages that are shown
	if (page.getCurPage() != "c1") {
		// request the index html fragment
		var jqxhr = $.get("index.php");
		jqxhr.done(function(data){
            $('header').replaceWith('<header class="intro-header" style="background-image: url(' + "'" + $('#c1').attr('src') + "'" + ')">');
            $('.intro-header').append('<div class="container">');
            $('.container').append('<div class="row">');
            $('.row').append('<div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">');
            $('.col-lg-8').append('<div class="site-heading">');
            $('.col-lg-8').remove('h1');
            $('.col-lg-8').remove('hr');
            $('.col-lg-8').remove('span');
		   console.log("The intro-header has been replaced.");
		   
		});
		jqxhr.fail(function(jqXHR){alert("Error: "+jqXHR.status);});
        
        // Display credit.
        $('.credit').html($('#ct1').html());
        
        // Display the related thumbs.
        $('.car-thumbs').css("display", "block");
        
        // Hide the unrelated thumbs.
        $('.landscape-thumbs').css("display", "none");
        $('.animal-thumbs').css("display", "none");
		
		// Hide the current page & make Car the new current page
		var curSelector = '#' + page.getCurPage()+"Page";
	    $(curSelector).css("display","none");
		page.setCurPage("c1");
	}
}

function goC2() {
	// adjust the pages that are shown
	if (page.getCurPage() != "c2") {
		// request the index html fragment
		var jqxhr = $.get("index.php");
		jqxhr.done(function(data){
            $('header').replaceWith('<header class="intro-header" style="background-image: url(' + "'" + $('#c2').attr('src') + "'" + ')">');
            $('.intro-header').append('<div class="container">');
            $('.container').append('<div class="row">');
            $('.row').append('<div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">');
            $('.col-lg-8').append('<div class="site-heading">');
            $('.col-lg-8').remove('h1');
            $('.col-lg-8').remove('hr');
            $('.col-lg-8').remove('span');
		   console.log("The intro-header has been replaced.");
		   
		});
		jqxhr.fail(function(jqXHR){alert("Error: "+jqXHR.status);});
        
        // Display credit.
        $('.credit').html($('#ct2').html());
        
        // Display the related thumbs.
        $('.car-thumbs').css("display", "block");
        
        // Hide the unrelated thumbs.
        $('.landscape-thumbs').css("display", "none");
        $('.animal-thumbs').css("display", "none");
		
		// Hide the current page & make Car the new current page
		var curSelector = '#' + page.getCurPage()+"Page";
	    $(curSelector).css("display","none");
		page.setCurPage("c2");
	}
}

function goC3() {
	// adjust the pages that are shown
	if (page.getCurPage() != "c3") {
		// request the index html fragment
		var jqxhr = $.get("index.php");
		jqxhr.done(function(data){
            $('header').replaceWith('<header class="intro-header" style="background-image: url(' + "'" + $('#c3').attr('src') + "'" + ')">');
            $('.intro-header').append('<div class="container">');
            $('.container').append('<div class="row">');
            $('.row').append('<div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">');
            $('.col-lg-8').append('<div class="site-heading">');
            $('.col-lg-8').remove('h1');
            $('.col-lg-8').remove('hr');
            $('.col-lg-8').remove('span');
		   console.log("The intro-header has been replaced.");
		   
		});
		jqxhr.fail(function(jqXHR){alert("Error: "+jqXHR.status);});
        
        // Display credit.
        $('.credit').html($('#ct3').html());
        
        // Display the related thumbs.
        $('.car-thumbs').css("display", "block");
        
        // Hide the unrelated thumbs.
        $('.landscape-thumbs').css("display", "none");
        $('.animal-thumbs').css("display", "none");
		
		// Hide the current page & make Car the new current page
		var curSelector = '#' + page.getCurPage()+"Page";
	    $(curSelector).css("display","none");
		page.setCurPage("c3");
	}
}

function goC4() {
	// adjust the pages that are shown
	if (page.getCurPage() != "c4") {
		// request the index html fragment
		var jqxhr = $.get("index.php");
		jqxhr.done(function(data){
            $('header').replaceWith('<header class="intro-header" style="background-image: url(' + "'" + $('#c4').attr('src') + "'" + ')">');
            $('.intro-header').append('<div class="container">');
            $('.container').append('<div class="row">');
            $('.row').append('<div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">');
            $('.col-lg-8').append('<div class="site-heading">');
            $('.col-lg-8').remove('h1');
            $('.col-lg-8').remove('hr');
            $('.col-lg-8').remove('span');
		   console.log("The intro-header has been replaced.");
		   
		});
		jqxhr.fail(function(jqXHR){alert("Error: "+jqXHR.status);});
        
        // Display credit.
        $('.credit').html($('#ct4').html());
        
        // Display the related thumbs.
        $('.car-thumbs').css("display", "block");
        
        // Hide the unrelated thumbs.
        $('.landscape-thumbs').css("display", "none");
        $('.animal-thumbs').css("display", "none");
		
		// Hide the current page & make Car the new current page
		var curSelector = '#' + page.getCurPage()+"Page";
	    $(curSelector).css("display","none");
		page.setCurPage("c4");
	}
}

function goC5() {
	// adjust the pages that are shown
	if (page.getCurPage() != "c5") {
		// request the index html fragment
		var jqxhr = $.get("index.php");
		jqxhr.done(function(data){
            $('header').replaceWith('<header class="intro-header" style="background-image: url(' + "'" + $('#c5').attr('src') + "'" + ')">');
            $('.intro-header').append('<div class="container">');
            $('.container').append('<div class="row">');
            $('.row').append('<div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">');
            $('.col-lg-8').append('<div class="site-heading">');
            $('.col-lg-8').remove('h1');
            $('.col-lg-8').remove('hr');
            $('.col-lg-8').remove('span');
		   console.log("The intro-header has been replaced.");
		   
		});
		jqxhr.fail(function(jqXHR){alert("Error: "+jqXHR.status);});
        
        // Display credit.
        $('.credit').html($('#ct5').html());
        
        // Display the related thumbs.
        $('.car-thumbs').css("display", "block");
        
        // Hide the unrelated thumbs.
        $('.landscape-thumbs').css("display", "none");
        $('.animal-thumbs').css("display", "none");
		
		// Hide the current page & make Car the new current page
		var curSelector = '#' + page.getCurPage()+"Page";
	    $(curSelector).css("display","none");
		page.setCurPage("c5");
	}
}

function goC6() {
	// adjust the pages that are shown
	if (page.getCurPage() != "c6") {
		// request the index html fragment
		var jqxhr = $.get("index.php");
		jqxhr.done(function(data){
            $('header').replaceWith('<header class="intro-header" style="background-image: url(' + "'" + $('#c6').attr('src') + "'" + ')">');
            $('.intro-header').append('<div class="container">');
            $('.container').append('<div class="row">');
            $('.row').append('<div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">');
            $('.col-lg-8').append('<div class="site-heading">');
            $('.col-lg-8').remove('h1');
            $('.col-lg-8').remove('hr');
            $('.col-lg-8').remove('span');
		   console.log("The intro-header has been replaced.");
		   
		});
		jqxhr.fail(function(jqXHR){alert("Error: "+jqXHR.status);});
        
        // Display credit.
        $('.credit').html($('#ct6').html());
        
        // Display the related thumbs.
        $('.car-thumbs').css("display", "block");
        
        // Hide the unrelated thumbs.
        $('.landscape-thumbs').css("display", "none");
        $('.animal-thumbs').css("display", "none");
		
		// Hide the current page & make Car the new current page
		var curSelector = '#' + page.getCurPage()+"Page";
	    $(curSelector).css("display","none");
		page.setCurPage("c6");
	}
}

function goC7() {
	// adjust the pages that are shown
	if (page.getCurPage() != "c7") {
		// request the index html fragment
		var jqxhr = $.get("index.php");
		jqxhr.done(function(data){
            $('header').replaceWith('<header class="intro-header" style="background-image: url(' + "'" + $('#c7').attr('src') + "'" + ')">');
            $('.intro-header').append('<div class="container">');
            $('.container').append('<div class="row">');
            $('.row').append('<div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">');
            $('.col-lg-8').append('<div class="site-heading">');
            $('.col-lg-8').remove('h1');
            $('.col-lg-8').remove('hr');
            $('.col-lg-8').remove('span');
		   console.log("The intro-header has been replaced.");
		   
		});
		jqxhr.fail(function(jqXHR){alert("Error: "+jqXHR.status);});
        
        // Display credit.
        $('.credit').html($('#ct7').html());
        
        // Display the related thumbs.
        $('.car-thumbs').css("display", "block");
        
        // Hide the unrelated thumbs.
        $('.landscape-thumbs').css("display", "none");
        $('.animal-thumbs').css("display", "none");
		
		// Hide the current page & make Car the new current page
		var curSelector = '#' + page.getCurPage()+"Page";
	    $(curSelector).css("display","none");
		page.setCurPage("c7");
	}
}

function goCliffsOfMoher() {
	// adjust the pages that are shown
	if (page.getCurPage() != "Cliffs Of Moher") {
		// request the index html fragment
		var jqxhr = $.get("index.php");
		jqxhr.done(function(data){
            $('header').replaceWith('<header class="intro-header" style="background-image: url(' + "'" + $('#l1').attr('src') + "'" + ')">');
            $('.intro-header').append('<div class="container">');
            $('.container').append('<div class="row">');
            $('.row').append('<div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">');
            $('.col-lg-8').append('<div class="site-heading">');
            $('.col-lg-8').remove('h1');
            $('.col-lg-8').remove('hr');
            $('.col-lg-8').remove('span');
		   console.log("The intro-header has been replaced.");
		   
		});
		jqxhr.fail(function(jqXHR){alert("Error: "+jqXHR.status);});
        
        // Display credit.
        $('.credit').html($('#cliffsOfMoherCredit').html());
        
        // Display the related thumbs.
        $('.landscape-thumbs').css("display", "block");
        
        // Hide the unrelated thumbs.
        $('.animal-thumbs').css("display", "none");
        $('.car-thumbs').css("display", "none");
		
		// Hide the current page & make Cliffs of Moher the new current page
		var curSelector = '#' + page.getCurPage()+"Page";
	    $(curSelector).css("display","none");
		page.setCurPage("Cliffs of Moher");
	}
}

function goFuji() {
	// adjust the pages that are shown
	if (page.getCurPage() != "Fuji") {
		// request the index html fragment
		var jqxhr = $.get("index.php");
		jqxhr.done(function(data){
            $('header').replaceWith('<header class="intro-header" style="background-image: url(' + "'" + $('#l2').attr('src') + "'" + ')">');
            $('.intro-header').append('<div class="container">');
            $('.container').append('<div class="row">');
            $('.row').append('<div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">');
            $('.col-lg-8').append('<div class="site-heading">');
            $('.col-lg-8').remove('h1');
            $('.col-lg-8').remove('hr');
            $('.col-lg-8').remove('span');
		   console.log("The intro-header has been replaced.");
		   
		});
		jqxhr.fail(function(jqXHR){alert("Error: "+jqXHR.status);});
        
        // Display credit.
        $('.credit').html($('#fujiCredit').html());
        
        // Display the related thumbs.
        $('.landscape-thumbs').css("display", "block");
        
        // Hide the unrelated thumbs.
        $('.animal-thumbs').css("display", "none");
        $('.car-thumbs').css("display", "none");
		
		// Hide the current page & make Fuji the new current page
		var curSelector = '#' + page.getCurPage()+"Page";
	    $(curSelector).css("display","none");
		page.setCurPage("Fuji");
	}
}

function goTokyo() {
	// adjust the pages that are shown
	if (page.getCurPage() != "Tokyo") {
		// request the index html fragment
		var jqxhr = $.get("index.php");
		jqxhr.done(function(data){
            $('header').replaceWith('<header class="intro-header" style="background-image: url(' + "'" + $('#l4').attr('src') + "'" + ')">');
            $('.intro-header').append('<div class="container">');
            $('.container').append('<div class="row">');
            $('.row').append('<div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">');
            $('.col-lg-8').append('<div class="site-heading">');
            $('.col-lg-8').remove('h1');
            $('.col-lg-8').remove('hr');
            $('.col-lg-8').remove('span');
		   console.log("The intro-header has been replaced.");
		   
		});
		jqxhr.fail(function(jqXHR){alert("Error: "+jqXHR.status);});
        
        // Display credit.
        $('.credit').html($('#tokyoCredit').html());
        
        // Display the related thumbs.
        $('.landscape-thumbs').css("display", "block");
        
        // Hide the unrelated thumbs.
        $('.animal-thumbs').css("display", "none");
        $('.car-thumbs').css("display", "none");
		
		// Hide the current page & make Tokyo the new current page
		var curSelector = '#' + page.getCurPage()+"Page";
	    $(curSelector).css("display","none");
		page.setCurPage("Tokyo");
	}
}

function goManhattan() {
	// adjust the pages that are shown
	if (page.getCurPage() != "Manhattan") {
		// request the index html fragment
		var jqxhr = $.get("index.php");
		jqxhr.done(function(data){
            $('header').replaceWith('<header class="intro-header" style="background-image: url(' + "'" + $('#l3').attr('src') + "'" + ')">');
            $('.intro-header').append('<div class="container">');
            $('.container').append('<div class="row">');
            $('.row').append('<div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">');
            $('.col-lg-8').append('<div class="site-heading">');
            $('.col-lg-8').remove('h1');
            $('.col-lg-8').remove('hr');
            $('.col-lg-8').remove('span');
		   console.log("The intro-header has been replaced.");
		   
		});
		jqxhr.fail(function(jqXHR){alert("Error: "+jqXHR.status);});
        
        // Display credit.
        $('.credit').html($('#manhattanCredit').html());
        
        // Display the related thumbs.
        $('.landscape-thumbs').css("display", "block");
        
        // Hide the unrelated thumbs.
        $('.animal-thumbs').css("display", "none");
        $('.car-thumbs').css("display", "none");
		
		// Hide the current page & make Canadian the new current page
		var curSelector = '#' + page.getCurPage()+"Page";
	    $(curSelector).css("display","none");
		page.setCurPage("Manhattan");
	}
}

function goCanadian() {
	// adjust the pages that are shown
	if (page.getCurPage() != "Canadian") {
		// request the index html fragment
		var jqxhr = $.get("index.php");
		jqxhr.done(function(data){
            $('header').replaceWith('<header class="intro-header" style="background-image: url(' + "'" + $('#a1').attr('src') + "'" + ')">');
            $('.intro-header').append('<div class="container">');
            $('.container').append('<div class="row">');
            $('.row').append('<div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">');
            $('.col-lg-8').append('<div class="site-heading">');
            $('.col-lg-8').remove('h1');
            $('.col-lg-8').remove('hr');
            $('.col-lg-8').remove('span');
		   console.log("The intro-header has been replaced.");
		   
		});
		jqxhr.fail(function(jqXHR){alert("Error: "+jqXHR.status);});
        
        // Display credit.
        $('.credit').html($('#canadianCredit').html());
        
        // Display the related thumbs.
        $('.animal-thumbs').css("display", "block");
        
        // Hide the unrelated thumbs.
        $('.landscape-thumbs').css("display", "none");
        $('.car-thumbs').css("display", "none");
		
		// Hide the current page & make Canadian the new current page
		var curSelector = '#' + page.getCurPage()+"Page";
	    $(curSelector).css("display","none");
		page.setCurPage("Canadian");
	}
}

function goMarmot() {
	// adjust the pages that are shown
	if (page.getCurPage() != "Marmot") {
		// request the index html fragment
		var jqxhr = $.get("index.php");
		jqxhr.done(function(data){
            $('header').replaceWith('<header class="intro-header" style="background-image: url(' + "'" + $('#a2').attr('src') + "'" + ')">');
            $('.intro-header').append('<div class="container">');
            $('.container').append('<div class="row">');
            $('.row').append('<div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">');
            $('.col-lg-8').append('<div class="site-heading">');
            $('.col-lg-8').remove('h1');
            $('.col-lg-8').remove('hr');
            $('.col-lg-8').remove('span');
		   console.log("The intro-header has been replaced.");
		   
		});
		jqxhr.fail(function(jqXHR){alert("Error: "+jqXHR.status);});
        
        // Display credit.
        $('.credit').html($('#marmotCredit').html());
        
        // Display the related thumbs.
        $('.animal-thumbs').css("display", "block");
        
        // Hide the unrelated thumbs.
        $('.landscape-thumbs').css("display", "none");
        $('.car-thumbs').css("display", "none");
		
		// Hide the current page & make Marmot the new current page
		var curSelector = '#' + page.getCurPage()+"Page";
	    $(curSelector).css("display","none");
		page.setCurPage("Marmot");
	}
}

function goSugarGlider() {
	// adjust the pages that are shown
	if (page.getCurPage() != "Sugar Glider") {
		// request the index html fragment
		var jqxhr = $.get("index.php");
		jqxhr.done(function(data){
            $('header').replaceWith('<header class="intro-header" style="background-image: url(' + "'" + $('#a3').attr('src') + "'" + ')">');
            $('.intro-header').append('<div class="container">');
            $('.container').append('<div class="row">');
            $('.row').append('<div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">');
            $('.col-lg-8').append('<div class="site-heading">');
            $('.col-lg-8').remove('h1');
            $('.col-lg-8').remove('hr');
            $('.col-lg-8').remove('span');
		   console.log("The intro-header has been replaced.");
		   
		});
		jqxhr.fail(function(jqXHR){alert("Error: "+jqXHR.status);});
        
        // Display credit.
        $('.credit').html($('#sugarGliderCredit').html());
        
        // Display the related thumbs.
        $('.animal-thumbs').css("display", "block");
        
        // Hide the unrelated thumbs.
        $('.landscape-thumbs').css("display", "none");
        $('.car-thumbs').css("display", "none");
		
		// Hide the current page & make Sugar Glider the new current page
		var curSelector = '#' + page.getCurPage()+"Page";
	    $(curSelector).css("display","none");
		page.setCurPage("Sugar Glider");
	}
}

function goModelT() {
	// adjust the pages that are shown
	if (page.getCurPage() != "Model T") {
		// request the index html fragment
		var jqxhr = $.get("index.php");
		jqxhr.done(function(data){
            $('header').replaceWith('<header class="intro-header" style="background-image: url(' + "'" + $('#c1').attr('src') + "'" + ')">');
            $('.intro-header').append('<div class="container">');
            $('.container').append('<div class="row">');
            $('.row').append('<div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">');
            $('.col-lg-8').append('<div class="site-heading">');
            $('.col-lg-8').remove('h1');
            $('.col-lg-8').remove('hr');
            $('.col-lg-8').remove('span');
		   console.log("The intro-header has been replaced.");
		   
		});
		jqxhr.fail(function(jqXHR){alert("Error: "+jqXHR.status);});
        
        // Display credit.
        $('.credit').html($('#modelTCredit').html());
        
        // Display the related thumbs.
        $('.car-thumbs').css("display", "block");
        
        // Hide the unrelated thumbs.
        $('.animal-thumbs').css("display", "none");
        $('.landscape-thumbs').css("display", "none");
		
		// Hide the current page & make Model T the new current page
		var curSelector = '#' + page.getCurPage()+"Page";
	    $(curSelector).css("display","none");
		page.setCurPage("Model T");
	}
}

function goMustang() {
	// adjust the pages that are shown
	if (page.getCurPage() != "Mustang") {
		// request the index html fragment
		var jqxhr = $.get("index.php");
		jqxhr.done(function(data){
            $('header').replaceWith('<header class="intro-header" style="background-image: url(' + "'" + $('#c2').attr('src') + "'" + ')">');
            $('.intro-header').append('<div class="container">');
            $('.container').append('<div class="row">');
            $('.row').append('<div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">');
            $('.col-lg-8').append('<div class="site-heading">');
            $('.col-lg-8').remove('h1');
            $('.col-lg-8').remove('hr');
            $('.col-lg-8').remove('span');
		   console.log("The intro-header has been replaced.");
		   
		});
		jqxhr.fail(function(jqXHR){alert("Error: "+jqXHR.status);});
        
        // Display credit.
        $('.credit').html($('#mustangCredit').html());
        
        // Display the related thumbs.
        $('.car-thumbs').css("display", "block");
        
        // Hide the unrelated thumbs.
        $('.animal-thumbs').css("display", "none");
        $('.landscape-thumbs').css("display", "none");
		
		// Hide the current page & make Mustang the new current page
		var curSelector = '#' + page.getCurPage()+"Page";
	    $(curSelector).css("display","none");
		page.setCurPage("Mustang");
	}
}

function goSuperBee() {
	// adjust the pages that are shown
	if (page.getCurPage() != "Super Bee") {
		// request the index html fragment
		var jqxhr = $.get("index.php");
		jqxhr.done(function(data){
            $('header').replaceWith('<header class="intro-header" style="background-image: url(' + "'" + $('#c3').attr('src') + "'" + ')">');
            $('.intro-header').append('<div class="container">');
            $('.container').append('<div class="row">');
            $('.row').append('<div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">');
            $('.col-lg-8').append('<div class="site-heading">');
            $('.col-lg-8').remove('h1');
            $('.col-lg-8').remove('hr');
            $('.col-lg-8').remove('span');
		   console.log("The intro-header has been replaced.");
		   
		});
		jqxhr.fail(function(jqXHR){alert("Error: "+jqXHR.status);});
        
        // Display credit.
        $('.credit').html($('#superBeeCredit').html());
        
        // Display the related thumbs.
        $('.car-thumbs').css("display", "block");
        
        // Hide the unrelated thumbs.
        $('.animal-thumbs').css("display", "none");
        $('.landscape-thumbs').css("display", "none");
		
		// Hide the current page & make Super Bee the new current page
		var curSelector = '#' + page.getCurPage()+"Page";
	    $(curSelector).css("display","none");
		page.setCurPage("Super Bee");
	}
}